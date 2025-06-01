/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
