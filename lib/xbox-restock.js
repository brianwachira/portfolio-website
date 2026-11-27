import { createHash, randomUUID } from "node:crypto";
import { get, put } from "@vercel/blob";

const storeUrl = "https://www.microsoft.com";
const collection = `${storeUrl}/en-us/store/collections/certifiedrefurbishedxbox/`;
const catalog = "https://www.xbox.com/en-US/global-shares/templates/consoles/JS/allConsoles.js";
const blackSeriesS = "8mbxhqt38ztw";
const productPath = /\/en-us\/d\/(xbox-series-[xs][\w-]*certified-refurbished[\w-]*)\/([a-z0-9]{12})(?=[/?#"\s<]|$)/gi;
const soldOutBuyBox = /<p\b[^>]*\bdata-automation-test-id=["']buy-box-cta-description["'][^>]*>\s*Out of stock\s*<\/p>/i;
const soldOutStatuses = new Set(["OutOfStock", "SoldOut", "Discontinued"]);
const statePath = "xbox-restock/stock.json";

async function fetchText(url) {
	const response = await fetch(url, {
		headers: { "Accept-Language": "en-US", "User-Agent": "XboxRestockWatch/1.0" },
		signal: AbortSignal.timeout(12000),
	});
	if (!response.ok) throw new Error(`HTTP ${response.status}`);
	return response.text();
}

async function discoverProducts() {
	const products = new Map([
		[blackSeriesS, `${storeUrl}/en-us/d/xbox-series-s-certified-refurbished/${blackSeriesS}`],
		["8p01kzxz5j21", `${storeUrl}/en-us/d/xbox-series-s-certified-refurbished/8p01kzxz5j21`],
		["8ncm2gz33jql", `${storeUrl}/en-us/d/xbox-series-s-1tb-certified-refurbished/8ncm2gz33jql`],
		["92cc6w0n36g0", `${storeUrl}/en-us/d/xbox-series-x-1tb-digital-edition-certified-refurbished/92cc6w0n36g0`],
		["8mzbmmcjznxr", `${storeUrl}/en-us/d/xbox-series-x-certified-refurbished/8mzbmmcjznxr`],
		["8q9jtnwk948f", `${storeUrl}/en-us/p/product/8q9jtnwk948f`],
	]);
	const sources = await Promise.allSettled([
		fetchText(collection).then((html) => {
			for (const [, slug, id] of html.matchAll(productPath)) {
				products.set(id.toLowerCase(), `${storeUrl}/en-us/d/${slug}/${id}`);
			}
		}),
		fetchText(catalog).then((content) => {
			const assignment = /^\s*allConsoles\s*=\s*([\s\S]*?)\s*;?\s*$/.exec(content);
			const entries = assignment && JSON.parse(assignment[1]).locales?.["en-us"];
			if (!Array.isArray(entries) || !entries.length) throw new Error("U.S. catalog is missing");
			for (const entry of entries) {
				const id = entry.gaPid?.split("/", 1)[0].toLowerCase();
				if (/refurbished/i.test(entry.itemId) && /^[a-z0-9]{12}$/.test(id) && !products.has(id)) {
					products.set(id, `${storeUrl}/en-us/p/product/${id}`);
				}
			}
		}),
	]);
	const problems = sources.flatMap((result, index) => result.status === "rejected"
		? [`${index === 0 ? "Microsoft Store collection" : "Xbox catalog"}: ${result.reason.message}`] : []);
	return { products, problems };
}

function readProduct(html, id, url) {
	for (const [, json] of html.matchAll(/<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
		const data = JSON.parse(json);
		if (data?.["@type"] !== "Product" || !/certified refurbished/i.test(data.name)) continue;
		const offers = Array.isArray(data.offers) ? data.offers : data.offers?.offers ?? (data.offers ? [data.offers] : []);
		const status = (offer) => offer.availability?.split("/").pop();
		const available = offers.filter((offer) => status(offer) === "InStock");
		const name = id === blackSeriesS ? "Xbox Series S 1 TB, black (Certified Refurbished)" : data.name.trim();
		if (!available.length && (!offers.length || offers.some((offer) => !soldOutStatuses.has(status(offer))))) {
			if (soldOutBuyBox.test(html)) return { id, name, url, inStock: false };
			break;
		}
		const prices = available
			.filter((offer) => (offer.priceCurrency ?? offer.currency) === "USD" && offer.price != null)
			.map((offer) => Number(offer.price)).filter(Number.isFinite);
		const price = prices.length ? `$${Math.min(...prices).toFixed(2)}` : "See listing for price";
		return { id, name, price, url, inStock: available.length > 0 };
	}
	throw new Error("Microsoft Store did not report stock status");
}

async function emailRestocks(products, revision, key, recipient) {
	const payload = JSON.stringify({
		from: "Xbox Restock Watch <xbox@alerts.brianwachira.dev>",
		to: [recipient],
		subject: "Microsoft refurbished Xbox in stock",
		text: products.map(({ name, price, url }) => `${name}\n${price}\n${url}`).join("\n\n"),
	});
	const fingerprint = createHash("sha256").update(revision).update("\0").update(payload).digest("hex");
	const response = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${key}`,
			"Content-Type": "application/json",
			"Idempotency-Key": `xbox-stock/${fingerprint}`,
		},
		body: payload,
		signal: AbortSignal.timeout(12000),
	});
	if (!response.ok) throw new Error(`Resend rejected the Xbox alert (HTTP ${response.status})`);
	const { id } = await response.json();
	if (!id) throw new Error("Resend did not return an email ID");
	console.info(`Resend accepted Xbox alert ${id}`);
}

export async function watchXboxStock() {
	const { XBOX_RESEND_API_KEY: key, XBOX_ALERT_TO: recipient } = process.env;
	if (!key || !recipient) {
		throw new Error("The Xbox Resend key or recipient is missing");
	}
	const { products, problems } = await discoverProducts();
	const checked = await Promise.all([...products].sort().map(async ([id, url]) => {
		try {
			return readProduct(await fetchText(url), id, url);
		} catch (error) {
			problems.push(`${id}: ${error.message}`);
			return null;
		}
	}));
	const observed = checked.filter(Boolean);
	if (observed.length) {
		const existing = await get(statePath, { access: "private", useCache: false });
		const previous = existing ? await new Response(existing.stream).json() : { stock: {}, revision: "initial" };
		const restocked = observed.filter(({ id, inStock }) => inStock && previous.stock[id] !== true);
		if (restocked.length) await emailRestocks(restocked, previous.revision, key, recipient);
		if (observed.some(({ id, inStock }) => inStock !== previous.stock[id])) {
			const stock = { ...previous.stock };
			for (const { id, inStock } of observed) stock[id] = inStock;
			await put(statePath, JSON.stringify({ stock, revision: randomUUID() }), {
				access: "private",
				contentType: "application/json",
				allowOverwrite: Boolean(existing),
				...(existing ? { ifMatch: existing.blob.etag } : {}),
			});
		}
		console.info(`Checked ${observed.length} refurbished Xbox listings; ${restocked.length} newly available.`);
	}
	if (problems.length) throw new Error(problems.join("; "));
}
