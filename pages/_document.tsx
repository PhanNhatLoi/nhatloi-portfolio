import { SITE_URL } from "@/src/configs/config";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <link rel="alternate" href={`${SITE_URL}en`} hrefLang="en" />
        <link rel="alternate" href={`${SITE_URL}vi`} hrefLang="vi" />
        <link rel="alternate" href={`${SITE_URL}zh`} hrefLang="zh" />
        <link rel="alternate" href={`${SITE_URL}`} hrefLang="x-default" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
