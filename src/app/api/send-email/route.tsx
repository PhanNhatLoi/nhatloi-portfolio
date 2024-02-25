import { Resend } from "resend";
import * as React from "react";

const resend = new Resend("re_bDjC5jEk_PEVaXRp1mgExMwdTEc6RHxqi");
const toEmail = "phanloi971@gmail.com";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: email,
      to: [toEmail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
