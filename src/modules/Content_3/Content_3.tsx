import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

const Content3 = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const goToPage = (path: string) => {
    const currentLocale = locale === "vi" ? "" : `/${locale}`;
    router.push(`${currentLocale}${path}`);
  };
  return (
    <div className="mb-[0px] md:mb-[40px] relative w-full bg-[linear-gradient(to_right,#007ccb,#014698)] from-blue-500 to-blue-700 text-white py-16 px-8 flex flex-col items-center text-center">
      <div className="absolute top-8 right-8 w-32 h-16 bg-white/10 transform rotate-12"></div>
      <div className="absolute top-14 right-16 w-32 h-16 bg-white/10 transform rotate-12"></div>

      <h2 className="text-3xl font-bold uppercase">{t("any_questions")}?</h2>
      <p className="mt-2 text-lg font-light">{t("we_here")}</p>

      <div
        onClick={() => {
          goToPage("/contact-us");
        }}
        className="mt-6 border-2 border-white text-white px-6 py-2 uppercase font-bold hover:bg-white hover:text-blue-700 transition"
      >
        {t("contact_us")}!
      </div>
    </div>
  );
};

export default Content3;
