import FooterCard from "@/src/Footer";
import HeaderSticky from "@/src/HeaderPage";
import NextHeader from "@/src/NextHeader";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div
      className={`items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <NextHeader />
      <HeaderSticky />
      <main className="min-h-screen min-w-screen flex flex-col items-center">
        {children}
      </main>

      <FooterCard />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "vi", ["common"])),
    },
  };
};
