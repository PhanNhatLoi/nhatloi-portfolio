import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { SITE_URL } from "@/src/configs/config";
// import { useRouter } from "next/router";
// export const metadata: Metadata = {
//   metadataBase: new URL("https://nhatloi-portfolio.vercel.app/"),
//   title: "Nhat Loi Portfolio",
//   description:
//     "Portfolio of a Front End Developer specializing in ReactJS, NextJS, and React Native. Explore creative projects and optimized user interface solutions.",
//   keywords: [
//     "ReactJs",
//     "NodeJs",
//     "NestJs",
//     "React native",
//     "front-end",
//     "front-end developer",
//     "back-end developer",
//     "fullStack",
//     "Nhatloi",
//     "Phan Nhat Loi",
//     "Nhat Loi",
//   ],
//   applicationName: "Portfolio",
//   viewport: "width=device-width, initial-scale=1",
//   robots: "/robots.txt",
//   icons: "/favicon.ico",
//   alternates: {
//     canonical: "/",
//   },
//   verification: {
//     google: "329PkCOAlB8JapopchbQVBteUsSWNRZv9L95pITSESI",
//   },
// };

type Props = {
  seoProps?: NextSeoProps;
};
function NextHeader(props: Props) {
  const { seoProps = {} } = props;
  // const router = useRouter();
  // const currentPage = router.asPath.replace("/", "").split("/");
  // const title = router.asPath === "/" ? "Home page" : currentPage.join(" - ");

  const defaultProps: NextSeoProps = {
    title: `Hai Sam landing page`,
    canonical: SITE_URL,
    description: "Hai Sam landing page description",
    openGraph: {
      type: "website",
      locale: "vi_VN",
      url: SITE_URL,
      siteName: "Hai Sam",
    },
  };

  return (
    <>
      <NextSeo
        additionalLinkTags={[
          {
            rel: "shortcut icon",
            href: "/images/logo.png",
          },
        ]}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Jane Doe",
          },
          {
            name: "google-site-verification",
            content: "329PkCOAlB8JapopchbQVBteUsSWNRZv9L95pITSESI",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
        {...defaultProps}
        {...seoProps}
      />

      {/* <h1>Hai Sam landing page</h1> */}
    </>
  );
}

export default NextHeader;
