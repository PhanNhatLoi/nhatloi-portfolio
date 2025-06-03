import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ExpandContent from "./ExpandContent";

const Content2 = () => {
  const { t } = useTranslation();
  const [itemActive, setItemActive] = useState<number | undefined>(2);
  return (
    <>
      <div className="container-ct flex justify-center text-text-100">
        <div className="md:min-h-[710px] relative hidden md:block text-left w-full flex flex-row mb-20">
          <div className="w-full md:w-[40%] xl:w-[33%] h-[100px] xl:bg-background">
            <div className="h-auto pr-0 md:pr-8 lg:pr-6 lg:h-[260px]">
              <h2 className="font-bold uppercase hyphens-auto mb-6 mt-0 text-[28px] md:mb-[15px] md:text-[2rem] lg:mb-6 lg:text-[2.5rem] text-text-100 bg-background">
                {t("content_2_title")}
              </h2>
              <p className="mb-10 mt-0 text-base hyphens-auto font-normal md:mb-[64px] ">
                {t("content_2_des")}
              </p>
            </div>

            <div className="hidden md:block">
              <figure
                className={`${
                  itemActive === 2 ? "block" : "hidden"
                } absolute top-0 right-0 bottom-0 w-[60%] xl:w-[67%] h-[710px] overflow-hidden`}
              >
                <div className="inset-0 absolute hidden xl:block">
                  <img
                    className="w-full h-full"
                    src="/images/web-design_2.png"
                  />
                </div>
                <div className="inset-0 absolute block xl:hidden">
                  <img
                    className="w-full h-full"
                    src="/images/web-design_3.png"
                  />
                </div>
              </figure>
              <div
                onClick={() => {
                  setItemActive(2);
                }}
                className={`${
                  itemActive === 2
                    ? "bg-primary-300 text-white"
                    : "text-primary-300"
                } py-0 px-[14px] lg:px-[16px] h-14 flex flex-wrap items-center`}
              >
                <strong className="font-bold pt-[18px] px-0 pb-5 text-base">
                  {t("ware")}
                </strong>
              </div>
              <div
                className={`${
                  itemActive === 2 ? "block" : "hidden"
                } color-white absolute w-auto right-0 lg:w-[500px] top-[200px] lg:top-[260px] left-[40%] xl:left-[33%] bottom-0 box-border text-white bg-gradient-to-br from-[rgba(66,92,61,1)] via-[rgba(116,148,107,0.85)]  to-[rgba(116,148,107,0.7)] p-10 clip-diagonal`}
              >
                <h3 className="uppercase mb-4 font-bold text-[1.5rem] hyphens-auto">
                  {t("ware_des")}
                </h3>
                <p className="text-base hyphens-auto font-normal">
                  {t("ware_content")}
                </p>

                <a
                  href="https://react.dev/"
                  target="_blank"
                  className="absolute mt-4 text-white border-[2px] border-white uppercase font-bold py-[13px] px-[40px] flex min-h-[48px] bottom-10 left-10"
                >
                  {t("learn_more")}
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <figure
                className={`${
                  !itemActive || itemActive === 1 ? "block" : "hidden"
                } absolute top-0 right-0 bottom-0 w-[60%] xl:w-[67%] h-[710px] overflow-hidden`}
              >
                <div className="inset-0 absolute hidden xl:block">
                  <img
                    className="w-full h-full"
                    src="/images/Supply-Chain.png"
                  />
                </div>
                <div className="inset-0 absolute block xl:hidden">
                  <img
                    className="w-full h-full"
                    src="/images/Supply-Chain_2.png"
                  />
                </div>
              </figure>
              <div
                onClick={() => {
                  setItemActive(1);
                }}
                className={`${
                  !itemActive || itemActive === 1
                    ? "bg-primary-300 text-white"
                    : "text-primary-300"
                } py-0 px-[14px] lg:px-[16px] h-14 flex flex-wrap items-center`}
              >
                <strong className="font-bold pt-[18px] px-0 pb-5 text-base">
                  {t("supply_chain_solutions")}
                </strong>
              </div>
              <div
                className={`${
                  !itemActive || itemActive === 1 ? "block" : "hidden"
                } color-white absolute w-auto right-0 lg:w-[500px] top-[200px] lg:top-[260px] left-[40%] xl:left-[33%] bottom-0 box-border text-white bg-gradient-to-br from-[rgba(66,92,61,1)] via-[rgba(116,148,107,0.85)]  to-[rgba(116,148,107,0.7)] p-10 clip-diagonal`}
              >
                <h3 className="uppercase mb-4 font-bold text-[1.5rem] hyphens-auto">
                  {t("supply_chain_des")}
                </h3>
                <p className="text-base hyphens-auto font-normal">
                  {t("supply_chain_content")}
                </p>

                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  className="absolute mt-4 text-white border-[2px] border-white uppercase font-bold py-[13px] px-[40px] flex min-h-[48px] bottom-10 left-10"
                >
                  {t("learn_more")}
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <figure
                className={`${
                  itemActive === 3 ? "block" : "hidden"
                } absolute top-0 right-0 bottom-0 w-[60%] xl:w-[67%] h-[710px] overflow-hidden`}
              >
                <div className="inset-0 absolute hidden xl:block">
                  <img className="w-full h-full" src="/images/backend_2.png" />
                </div>
                <div className="inset-0 absolute block xl:hidden">
                  <img className="w-full h-full" src="/images/backend_3.png" />
                </div>
              </figure>
              <div
                onClick={() => {
                  setItemActive(3);
                }}
                className={`${
                  itemActive === 3
                    ? "bg-primary-300 text-white"
                    : "text-primary-300"
                } py-0 px-[14px] lg:px-[16px] h-14 flex flex-wrap items-center`}
              >
                <strong className="font-bold pt-[18px] px-0 pb-5 text-base">
                  {t("trans")}
                </strong>
              </div>
              <div
                className={`${
                  itemActive === 3 ? "block" : "hidden"
                } color-white absolute w-auto right-0 lg:w-[500px] top-[200px] lg:top-[260px] left-[40%] xl:left-[33%] bottom-0 box-border text-white bg-gradient-to-br from-[rgba(66,92,61,1)] via-[rgba(116,148,107,0.85)]  to-[rgba(116,148,107,0.7)] p-10 clip-diagonal`}
              >
                <h3 className="uppercase mb-4 font-bold text-[1.5rem] hyphens-auto">
                  {t("trans_des")}
                </h3>
                <p className="text-base hyphens-auto font-normal">
                  {t("trans_content")}
                </p>

                <a
                  href="https://nestjs.com/"
                  target="_blank"
                  className="absolute mt-4 text-white border-[2px] border-white uppercase font-bold py-[13px] px-[40px] flex min-h-[48px] bottom-10 left-10"
                >
                  {t("learn_more")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="">
            <h2 className="font-bold uppercase hyphens-auto mb-6 mt-0 text-[28px] md:mb-[15px] md:text-[2rem] lg:mb-6 lg:text-[2.5rem]">
              {t("content_2_title")}
            </h2>
            <p className="mb-10 mt-0 text-base hyphens-auto font-normal md:mb-[64px]">
              {t("content_2_des")}
            </p>
          </div>
          <ExpandContent
            itemActive={itemActive}
            setItemActive={setItemActive}
          />
        </div>
      </div>
    </>
  );
};

export default Content2;
