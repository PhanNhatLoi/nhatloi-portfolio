import { useTranslation } from "react-i18next";
import FadeInView from "@/src/components/animations/FadeInView";
import MyJourney from "./MyJourney";

export default function Content5() {
  const { t } = useTranslation();
  return (
    <div>
      <FadeInView>
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          {t("my_journey")}
        </h2>
        <MyJourney />
      </FadeInView>
    </div>
  );
}
