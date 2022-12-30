// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = JSON.parse(req.body);

	const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}
    `;

	mail
		.send({
			to: process.env.RECEIVER_EMAIL as string,
			from: process.env.SENDER_EMAIL as string,
			subject: "New Message!",
			text: message,
			html: message.replace(/\r\n/g, "<br>"),
		})
		.then(() => {
			console.log("Email sent");
			res.status(200).json({ status: "Ok" });
		})
		.catch((error) => {
			res
				.status(error.status)
				.json({ status: error.status, message: error.message });
		});
}
