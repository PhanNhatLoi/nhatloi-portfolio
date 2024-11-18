import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nhatloi-portfolio.vercel.app/"),
  title: "Nhat Loi Portfolio",
  description:
    "Portfolio of a Front End Developer specializing in ReactJS, NextJS, and React Native. Explore creative projects and optimized user interface solutions.",
  keywords: [
    "ReactJs",
    "NodeJs",
    "NestJs",
    "React native",
    "front-end",
    "front-end developer",
    "back-end developer",
    "fullStack",
    "Nhatloi",
    "Phan Nhat Loi",
  ],
  applicationName: "Portfolio",
  viewport: "width=device-width, initial-scale=1",
  robots: "/robots.txt",
  icons: "/favicon.ico",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "329PkCOAlB8JapopchbQVBteUsSWNRZv9L95pITSESI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
