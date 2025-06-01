import { useTranslation } from "react-i18next";
import { timelineData } from "../../data/timeline";
import ImageSlider from "../../components/ImageSlider";
import FadeInView from "../../components/animations/FadeInView";
import SlideInView from "../../components/animations/SlideInView";
import ScaleInView from "../../components/animations/ScaleInView";
import { motion } from "framer-motion";

export default function Content5() {
  const { t } = useTranslation();
  return (
    <div className="w-screen min-h-screen flex justify-center items-center py-20 overflow-x-hidden">
      <div className="container-ct w-full">
        <FadeInView>
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            {t("my_journey")}
          </h2>
        </FadeInView>

        <div className="relative">
          {/* Timeline line with animation */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-100"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {timelineData.map((item, index) => (
            <div key={item.id} className="relative mb-20 last:mb-0 w-full">
              <SlideInView
                direction={index % 2 === 0 ? "right" : "left"}
                delay={index * 0.2}
              >
                <div
                  className={`flex items-center w-full ${
                    index % 2 === 0
                      ? "md:justify-start md:w-1/2 md:pr-8"
                      : "md:justify-end md:w-1/2 md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="w-[calc(100%-2rem)] mx-4 md:w-[500px] md:mx-0 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    {item.images.length > 0 && (
                      <ImageSlider images={item.images} />
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2 gap-2 flex-wrap">
                        <h3 className="text-2xl font-bold">{item.company}</h3>
                        <span className="text-primary-100 font-semibold">
                          {item.startDate} - {item.endDate}
                        </span>
                      </div>
                      <div className="text-lg text-primary-100 mb-2">
                        {item.role}
                      </div>
                      <p
                        className="text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: t(item.description),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </SlideInView>
              <ScaleInView delay={index * 0.2 + 0.1}>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-100 rounded-full"></div>
              </ScaleInView>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
