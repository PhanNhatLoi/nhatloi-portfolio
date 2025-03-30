import { useTranslation } from "react-i18next";

export default function Content5() {
  const { t } = useTranslation();
  return (
    <div className="w-screen h-full flex justify-center mb-[40px] md:mb-[80px]">
      <div className="container-ct">
        <div className="flex flex-col md:flex-row gap-5 md:gap-7">
          <div className="cursor-pointer relative group w-full md:w-1/2 lg:w-[40%] h-72 lg:w-[40vw] overflow-hidden">
            <img
              src="/images/Wimmelbild.webp"
              alt="About Us"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-primary-100 opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

            <div className="absolute inset-0 flex flex-col justify-end transition-all duration-300 group-hover:translate-y-0 translate-y-44">
              <h2 className="text-[28px] md:text-[2.5rem] font-bold text-white px-6 pb-4 uppercase">
                {t("about_us")}
              </h2>
              <div className="px-6 pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="mt-[10px] text-[16px] text-white">
                  {t("about_us_des")}
                </p>
                <button className="mt-4 px-4 py-2 border border-white text-white uppercase font-bold">
                  {t("read_more")}
                </button>
              </div>
            </div>
          </div>

          <div className="cursor-pointer relative group w-full md:w-1/2 lg:w-[60%] h-72 overflow-hidden">
            <img
              src="/images/Port_Miami.webp"
              alt="About Rhenus USA"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-primary-100 opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

            <div className="absolute inset-0 flex flex-col justify-end transition-all duration-300 group-hover:translate-y-0 translate-y-16">
              <h2 className="text-[28px] md:text-[2.5rem] font-bold text-white px-6 pb-4 uppercase">
                {t("about_in")}
              </h2>
              <div className="px-6 pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="mt-4 px-4 py-2 border border-white text-white uppercase font-bold">
                  {t("read_more")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
