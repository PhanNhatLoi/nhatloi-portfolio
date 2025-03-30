import React from "react";
import { useTranslation } from "react-i18next";

const Content1 = () => {
  const { t } = useTranslation();
  return (
    <div className="container-ct">
      <header className="mb-6 uppercase font-bold hyphens-auto text-[28px] md:text-[2.5rem] text-text-100">
        {t("content_1_title")}
      </header>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: t("content_1_des") }}
          className="hyphens-auto text-base text-left font-normal text-text-100"
        ></div>
      </div>
    </div>
  );
};

export default Content1;
