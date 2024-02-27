import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nhat Loi Profilio",
  description: "Front End Developer(ReactJs, NextJs, React Native)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo_2.jpeg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
