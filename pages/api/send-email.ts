import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend("re_BWy1fzFY_9aHtbkQmeGWJ5VnwzopwDdv7");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "NhatLoi <onboarding@resend.dev>",
      to: ["phanloi971@gmail.com"],
      subject: `New message from ${email}`,
      html: `
        <div>
          <h1>New message from ${email}</h1>
          <p>${message}</p>
        </div>
        `,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
