import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nhat Loi Portfolio",
  description: "Front End Developer(ReactJs, NextJs, React Native)",
  keywords: [
    "ReactJs",
    "React native",
    "front-end",
    "front-end developer",
    "Nhatloi",
    "Phan Nhat Loi",
  ],
  applicationName: "Portfolio",
  viewport: "width=device-width, initial-scale=1",
  // robots:'',
  icons: "/favicon.ico",
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
