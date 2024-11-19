"use client";
import React, { useState } from "react";
import MUIButton from "./MUI/Button";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      email: email,
      subject: subject,
      message: message,
    };
    fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setEmailSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className=" mt-10">
        <h5 className="text-xl font-bold text-white my-2 text-center mt-20 sm:mt-0">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 w-full">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <div className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>

            <MUIButton
              disabled={!email || !message}
              loading={loading}
              neonType={2}
              onClick={handleSubmit}
            >
              Send
            </MUIButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailSection;
