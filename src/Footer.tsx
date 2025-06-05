import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import ShapeCard from "./modules/Content_4/ShapeCard";

export default function FooterCard() {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  return (
    <ShapeCard>
      <footer className="w-full text-white py-6 px-4 pb-[100px] md:pb-10">
        <div className="container-ct w-full mx-auto">
          <a
            href={`/${locale}/contact-us`}
            className="text-lg font-semibold uppercase hover:underline"
          >
            {t("contact")}
          </a>
          <hr className="border-t border-white/50 my-2" />

          <div className="flex flex-wrap justify-start w-3/4 text-base text-white">
            <a
              href="mailto:phanloi971@gmail.com"
              className="hover:underline mt-6 mr-8 block w-full lg:w-auto lg:inline-block"
            >
              Gmail: Phanloi971@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nhatloi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline mt-6 mr-8 flex flex-row items-center w-full lg:w-auto"
            >
              <img
                src="/images/linkedIn.svg"
                alt="GitHub"
                className="w-6 h-6 mr-2"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/PhanNhatLoi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline mt-6 mr-8 flex flex-row items-center w-full lg:w-auto"
            >
              <img
                src="/images/github.svg"
                alt="GitHub"
                className="w-6 h-6 mr-2"
              />
              GitHub
            </a>
            <a
              href="tel:+84367740971"
              className="hover:underline mt-6 mr-8 block w-full lg:w-auto"
            >
              Phone: +84 367740971
            </a>
          </div>
        </div>
      </footer>
    </ShapeCard>
  );
}
