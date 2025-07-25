import React from "react";
import ShapeCard from "./ShapeCard";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    image: "/images/projects/11.png",
    title: "WISE Buddy",
    description: "wise_description",
    tag: "React-native",
    appStore: "https://apps.apple.com/vn/app/wise-buddy/id6744956584?l=vi",
    chplay: "https://play.google.com/store/apps/details?id=com.myzens.wise",
  },
  {
    id: 2,
    image: "/images/projects/12.png",
    title: "AiNote.one",
    description: "ainote_description",
    tag: "React-native",
    link: "https://ainote.one",
  },
  {
    id: 3,
    image: "/images/projects/10.png",
    title: "Auto meeting bot",
    description: "automeetingbot_description",
    tag: "NestJs",
    link: "https://github.com/PhanNhatLoi/meeting-bot-service",
  },
  {
    id: 4,
    image: "/images/projects/13.png",
    title: "RKD System",
    description: "rkd_description",
    tag: "React-native",
    link: "https://rkd-system.com",
  },
  {
    id: 5,
    image: "/images/projects/2.jpg",
    title: "EDENHUB APP",
    description: "edenhub_description",
    tag: "React native",
    link: "https://edenhub.vn/",
    appStore: "https://apps.apple.com/vn/app/eden-hub/id6451351715?l=vi",
    chplay:
      "https://play.google.com/store/apps/details?id=com.edenhub.farm.app&hl=vi",
  },
  {
    id: 8,
    image: "/images/projects/8.png",
    title: "DigitFace App",
    description: "digitface_description",
    tag: "React native",
    appStore: "https://apps.apple.com/vn/app/digitface/id6673892991",
    chplay: "https://play.google.com/store/apps/details?id=com.digitface",
  },
  {
    id: 6,
    image: "/images/projects/7.png",
    title: "Chat App realtime",
    description: "chatapp_fullstack_description",
    tag: "ReactJS, Nodejs",
    link: "https://chat-app-realtime-orcin.vercel.app",
  },
  {
    id: 7,
    image: "/images/projects/9.png",
    title: "React-native chat app",
    description: "chatapp_description",
    tag: "React native",
    link: "https://github.com/PhanNhatLoi/chat-app-realtime",
  },
  // {
  //   id: 9,
  //   image: "/images/projects/3.png",
  //   title: "Sellpath web",
  //   description:
  //     "The web uses built code techniques to build an interface design environment for users - users can freely come up with ideas and design their own websites based on pre-programmed tools.",
  //   tag: "NextJs",
  //   link: "https://demo.sellpath.ai/",
  // },
  {
    id: 10,
    image: "/images/projects/4.png",
    title: "AUTO REPAIR SHOP MANAGERMENT-WEB",
    description: "auto_repair_shop_description",
    tag: "ReactJs",
    link: "https://portal.ecaraid.com",
  },
  {
    id: 11,
    image: "/images/projects/1.png",
    title: "ECARAID-CONSUMER-WEB",
    description: "ecaraid_consumer_web_description",
    tag: "ReactJs",
    link: "https://eca.ecaraid.com",
  },
  {
    id: 12,
    image: "/images/projects/14.png",
    title: "HomNayAnGi",
    description: "homnayangi_description",
    tag: "ReactJs",
    link: "http://103.129.127.239:3000/",
  },
  {
    id: 13,
    image: "/images/projects/15.png",
    title: "hs-globallogistics",
    description: "hs_globallogistics_description",
    tag: "NextJS",
    link: "https://hs-globallogistics.com/",
  },
  {
    id: 14,
    image: "/images/projects/16.png",
    title: "E-commerce Template Free",
    description: "ecommerce_template_free_description",
    tag: "NextJS",
    link: "https://template-shop-nextjs-free.vercel.app/",
  },
  {
    id: 15,
    image: "/images/projects/17.png",
    title: "Restaurant Template Free",
    description: "restaurant_template_free_description",
    tag: "NextJS",
    link: "https://restaurent-nextjs-five.vercel.app/",
  },
];

export default function ProjectContent() {
  const { t } = useTranslation();
  return (
    <>
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          height: 400px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((project) => (
          <div key={project.id} className="flip-card">
            <div className="flip-card-inner">
              {/* Front face */}
              <div className="flip-card-front">
                <div className="rounded overflow-hidden shadow-lg h-full">
                  <Image
                    width={1000}
                    height={192}
                    objectFit="cover"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-primary-100 p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p
                      className="text-white text-sm mb-4 line-clamp-4"
                      dangerouslySetInnerHTML={{
                        __html: t(project.description),
                      }}
                    />
                    <span className="text-sm bg-primary-100 text-white px-3 py-1 rounded-full w-fit">
                      {project.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Back face */}

              <div className="flip-card-back rounded shadow-lg">
                <ShapeCard>
                  <div className="flex flex-col h-full p-5">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {project.title}
                    </h3>
                    <p
                      className="text-white text-sm flex-grow max-h-[280px] overflow-y-auto"
                      dangerouslySetInnerHTML={{
                        __html: t(project.description),
                      }}
                    />
                    <div className="flex gap-2 text-black">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline mt-4 inline-block"
                        >
                          {t("visit_website")}
                        </a>
                      )}
                      {project.appStore && (
                        <a
                          href={project.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline mt-4 inline-block"
                        >
                          {t("appstore")}
                        </a>
                      )}
                      {project.chplay && (
                        <a
                          href={project.chplay}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline mt-4 inline-block"
                        >
                          {t("chplay")}
                        </a>
                      )}
                    </div>
                  </div>
                </ShapeCard>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
