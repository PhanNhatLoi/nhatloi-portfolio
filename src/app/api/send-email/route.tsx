import { Resend } from "resend";
import * as React from "react";
import profileData from "@/data/profileData";

const resend = new Resend("re_BWy1fzFY_9aHtbkQmeGWJ5VnwzopwDdv7");
// const resend = new Resend("re_bDjC5jEk_PEVaXRp1mgExMwdTEc6RHxqi");

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [profileData.originalEmail],
      subject: subject,
      react: (
        <>
          <h1>New message from {email}</h1>
          <p>{message}</p>
        </>
      ),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
