import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { SITE_URL } from "@/src/configs/config";

type Props = {
  seoProps?: NextSeoProps;
};
function NextHeader(props: Props) {
  const { seoProps = {} } = props;

  const defaultProps: NextSeoProps = {
    title: `Nhat Loi`,
    canonical: SITE_URL,
    description: "Software Engineer",
    openGraph: {
      type: "website",
      locale: "vi_VN",
      url: SITE_URL,
      siteName: "Nhatloi",
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
            content: "Nhat loi",
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
    </>
  );
}

export default NextHeader;
