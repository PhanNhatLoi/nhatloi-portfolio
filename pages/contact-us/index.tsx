import React, { useEffect, useMemo, useState } from "react";
import Layout from "@/pages/_layout";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const ContactUs = () => {
  const { t } = useTranslation();
  const [messageSuccess, setMessageSuccess] = useState<string>("");
  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
    if (locale === "vi")
      setMessageSuccess(
        "Chúng tôi đã nhận được yêu cầu của bạn, chúng tôi sẽ phản hồi sau khi xử lý yêu cầu"
      );
    if (locale === "en")
      setMessageSuccess(
        "We have received your request, we will respond after processing the request"
      );
  }, [locale]);

  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const response = await fetch(
      //   "https://hs-globallogistic.com/api/v1/admin/request-submit",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Failed to submit form");
      // }
      window.alert(messageSuccess);
      setFormData({
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const buttonDisabled = useMemo(() => {
    return !formData.email || !formData?.message;
  }, [formData]);

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="max-w-lg mx-auto p-6 bg-white pt-[170px]">
          <div className=" mt-10">
            <p className="text-[#ADB7BE] mb-4 w-full">{t("contact_des")}</p>
          </div>
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jacob@google.com"
              className="w-full p-3 border border-gray-300 bg-gray-100 text-gray-500 rounded-md focus:outline-none"
            />
            <input
              onChange={handleChange}
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              className="w-full p-3 border border-gray-300 bg-gray-100 text-gray-500 rounded-md focus:outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("specify_request")}
              className="w-full p-3 border border-gray-300 bg-gray-100 text-gray-500 rounded-md focus:outline-none h-32"
            ></textarea>
            <p className="text-gray-500">
              {t("contact_form_4")}
              <a href="#" className="text-blue-600 hover:underline ml-1">
                {t("privacy_policy")}
              </a>
              .
            </p>
            <button
              disabled={buttonDisabled}
              type="submit"
              className={`uppercase w-full ${
                buttonDisabled ? "bg-[gray]" : "bg-yellow-500"
              } text-white py-3 rounded-md font-semibold`}
            >
              {t("send")}
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ContactUs;
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "vi", ["common"])),
    },
  };
};
