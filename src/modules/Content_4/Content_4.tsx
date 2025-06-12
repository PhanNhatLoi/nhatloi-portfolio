import { useTranslation } from "react-i18next";
import ProjectContent from "./ProjectContent";

export default function Content4() {
  const { t } = useTranslation();

  return (
    <div className="relative w-screen mb-10 flex flex-col items-center">
      <div className="container-ct w-full mb-14">
        <div className="mb-8 text-left w-full">
          <h2 className="text-[20px] md:text-[32px] text-white uppercase font-bold">
            {t("projects")}
          </h2>
        </div>
        <ProjectContent />
      </div>
    </div>
  );
}
