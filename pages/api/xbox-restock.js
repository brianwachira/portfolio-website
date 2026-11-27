import { handleSchedule } from "@vercel/schedules";
import { watchXboxStock } from "../../lib/xbox-restock";

const runScheduledCheck = handleSchedule(async () => {
	if (process.env.VERCEL_ENV === "production") {
		await watchXboxStock();
	}
});

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(404).end();
	}
	const headers = new Headers();
	for (const [name, value] of Object.entries(req.headers)) {
		if (typeof value === "string") headers.set(name, value);
	}
	const result = await runScheduledCheck(new Request("https://localhost/api/xbox-restock", {
		method: "POST",
		headers,
	}));
	return res.status(result.status).send(await result.text());
}
