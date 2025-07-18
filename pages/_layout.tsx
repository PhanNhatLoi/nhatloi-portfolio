import FooterCard from "@/src/Footer";
import HeaderSticky from "@/src/HeaderPage";
import NextHeader from "@/src/NextHeader";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div
      className={`bg-background items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <NextHeader />
      <HeaderSticky />
      <main className="min-h-screen min-w-screen flex flex-col items-center bg-background">
        {children}
      </main>

      <FooterCard />
    </div>
  );
}
