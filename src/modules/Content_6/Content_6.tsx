import { useTranslation } from "react-i18next";

export default function Content6() {
  const { t } = useTranslation();
  return (
    <div className="relative w-screen h-[calc(100vw+200px)] lg:h-auto">
      <img
        src="/images/Karriere_Teaser.webp"
        alt="Working at Rhenus USA"
        className="w-screen lg:h-auto h-full lg:object-contain object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="absolute top-auto bottom-[80px] left-0 right-0 text-white flex justify-center">
        <div className="container-ct w-full">
          <h2 className="text-[28px] md:text-[2.5rem] font-bold uppercase">
            {t("working_at")}
          </h2>
          <p className="text-base mt-2 font-light">{t("content_6_des")}</p>

          <button className="mt-6 bg-yellow-500 font-bold uppercase px-4 sm:px-6 py-2">
            {t("apply_now")}!
          </button>
        </div>
      </div>
    </div>
  );
}
