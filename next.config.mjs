/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["vi", "en", "zh"],
    defaultLocale: "vi",
    localeDetection: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
