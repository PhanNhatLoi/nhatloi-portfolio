import { useCallback, useState } from "react";
import CarouselMUI from "./CarouselImage";
import { useTranslation } from "react-i18next";

const newsData = [
  {
    id: 1,
    image: "/images/projects/9.png",
    title: "React-native chat app",
    description:
      "Chat app realtime app. Application send and recive message realtime using React-native code",
    tag: "React native",
    link: "https://github.com/PhanNhatLoi/chat-app-realtime",
  },
  {
    id: 2,
    image: "/images/projects/7.png",
    title: "Chat App realtime",
    description: "Is the website version of the realtime chat application",
    tag: "Nextjs",
    link: "https://chat-app-realtime-orcin.vercel.app",
  },
  {
    id: 3,
    image: "/images/projects/8.png",
    title: "DigitFace App",
    description:
      "AI integrated application analyzes faces, recognizes and analyzes signs of acne on the face and then gives advice.",
    tag: "React native",
    link: "https://apps.apple.com/vn/app/digitface/id6673892991",
  },
  {
    id: 4,
    image: "/images/projects/2.jpg",
    title: "EDENHUB APP",
    description:
      "Agricultural application, supporting management and monitoring of production process for farmers",
    tag: "React native",
    link: "https://edenhub.vn/",
  },
  {
    id: 5,
    image: "/images/projects/3.png",
    title: "Sellpath web",
    description:
      "The web uses built code techniques to build an interface design environment for users - users can freely come up with ideas and design their own websites based on pre-programmed tools.",
    tag: "NextJs",
    link: null,
  },
  {
    id: 6,
    image: "/images/projects/4.png",
    title: "AUTO REPAIR SHOP MANAGERMENT-WEB",
    description:
      "Garage Digitalization. Time-saving and affordable digital transformation for car service providers to improve their business processes and customer experience",
    tag: "ReactJs",
    link: "https://portal.ecaraid.com",
  },
  {
    id: 7,
    image: "/images/projects/1.png",
    title: "ECARAID-CONSUMER-WEB",
    description:
      "Continuing the chain of digital garage systems, this is a website for consumers, where they can go online to exchange and post products for sale.",
    tag: "ReactJs",
    link: "https://eca.ecaraid.com",
  },
];

export default function Content4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const RenderItem = useCallback(() => {
    return (
      <div className="w-[50vw]">
        <div className="relative w-full max-w-[200px] h-[2px] bg-white">
          <div className="absolute top-[-30px] w-full flex justify-center text-white">
            <span>
              {currentIndex + 1} / {newsData.length}
            </span>
          </div>
          <div
            style={{
              width: `${((currentIndex + 1) / newsData.length) * 100}%`,
            }}
            className="h-[2px] bg-primary-200"
          ></div>
        </div>
      </div>
    );
  }, [currentIndex]);

  return (
    <div className="relative w-screen mb-10 flex flex-col items-center">
      <div className="container-ct w-full mb-14">
        <div className="mb-8 text-left w-full">
          <h2 className="text-[20px] md:text-[32px] text-white uppercase font-bold">
            {t("projects")}
          </h2>
        </div>
        <CarouselMUI
          data={newsData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      <div className="absolute left-0 bottom-0">
        <RenderItem />
      </div>
    </div>
  );
}
