import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import VideoTop from "@/src/modules/VideoTop/VideoTop";
import Content1 from "@/src/modules/Content_1/Content_1";
import Content2 from "@/src/modules/Content_2/Content_2";
import Content3 from "@/src/modules/Content_3/Content_3";
import Content5 from "@/src/modules/Content_5/Content_5";
import Content4 from "@/src/modules/Content_4/Content_4";
import Layout from "./_layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout>
      <VideoTop />
      <div className="w-full pt-10 mb-10" id="overview" />
      <Content1 />
      <div className="w-full pt-10  mb-10" id="skills" />
      <Content2 />
      <Content3 />
      <div className="w-full pt-10  mb-10" id="project" />
      <Content4 />
      <Content5 />
      {/* <Content6 /> */}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "vi", ["common"])),
    },
  };
};
