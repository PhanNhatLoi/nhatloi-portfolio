import { useState, useEffect } from "react";
import { menuList, menuListHeaderTop } from "@/src/configs/config";
import CloseIcon from "@mui/icons-material/Close";
import HeaderFixedMobile from "./HeaderFixedMobile";
import IconPinSvg from "@/src/iconSvgs/IconPin";
import ScrollToTop from "./ScrollToTop";
import LanguagesSelection from "./Languages/Languages";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderSticky = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const goToPage = (path: string) => {
    const currentLocale = locale === "vi" ? "" : `/${locale}`;
    router.push(`${currentLocale}${path}`);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuSelection, setMenuSelection] = useState<keyof typeof menuList>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full text-white">
      {/* desktop Menu */}
      <header
        className={`hidden md:flex fixed z-50 top-0 right-0 left-0 transition-[height] duration-500 ease-out bg-primary-100 justify-center items-center ${
          isScrolled ? "h-[66px]" : "h-[120px]"
        }`}
      >
        <div className="container-ct relative py-auto">
          {/* Topbar */}
          <div
            className={`w-full text-[13px] relative transition-[height,padding,border-bottom,opacity] duration-500 ease-out flex border-white/50 border-b-2 
            ${
              isScrolled
                ? "h-0 pt-0 pb-0 opacity-0"
                : "h-[64px] pt-8 pb-[10px] opacity-100"
            }
          `}
          >
            <div
              className={`flex space-x-2 mr-6 items-center ${
                isScrolled ? "hidden" : ""
              }`}
            >
              <IconPinSvg color={"white"} />
              <span className="hover:underline">{t("locale")}</span>
            </div>
            <div className={`font-bold mr-6 ${isScrolled ? "hidden" : ""}`}>
              <LanguagesSelection />
            </div>
            <div
              className={`flex items-center space-x-6 pl-6 border-l-[1px] border-white ${
                isScrolled ? "hidden" : ""
              }`}
            >
              {menuListHeaderTop.map((menu) => {
                return (
                  <a key={menu.id} href={menu.path} className="hover:underline">
                    {t(menu.label)}
                  </a>
                );
              })}
            </div>
          </div>
          <div
            onClick={() => goToPage("/")}
            className={`absolute top-[16px] right-[15px]`}
          >
            <Link href={"/"} className="font-bold text-white text-3xl">
              PORTFOLIO
            </Link>
          </div>
          {/* Navbar */}
          <div className={`text-white flex w-full items-center`}>
            {/* Navigation */}
            <nav
              className={`space-x-6 mr-[20px] ${
                isScrolled ? "text-sm" : "text-base"
              }`}
            >
              {Object.keys(menuList).map((menuId: any) => {
                const menu = menuList[menuId as keyof typeof menuList];
                return (
                  <a
                    onClick={() => {
                      goToPage(menu.path);
                    }}
                    key={menu.id}
                    className={`cursor-pointer inline-block h-full leading-[55px] relative transition-opacity duration-500 ease-out text-white uppercase no-underline border-t-[5px] border-transparent hover:border-white`}
                  >
                    {t(menu.label).toUpperCase()}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
      {/* expand menu */}
      {menuSelection && (
        <div
          className={`md:flex z-10 hidden fixed h-screen w-screen bg-primary-100 transition-[top] duration-500 ease-out justify-center ${
            isScrolled ? "top-[66px]" : "top-[120px]"
          }`}
        >
          <div className="flex h-5/6 container-ct overflow-y-auto overflow-x-hidden">
            <div className="w-full h-full flex-row bg-white flex flex-row py-[15px] px-[15px] relative">
              <div
                onClick={() => {
                  setMenuSelection(undefined);
                }}
                className="absolute top-[15px] right-[15px] text-black cursor-pointer"
              >
                <CloseIcon />
              </div>
              <div className="w-1/3 h-full px-[30px] pt-12">
                {menuSelection && (
                  <div className="">
                    <strong className="text-primary-200 mt-[7px] font-bold text-[32px] uppercase">
                      {t(menuList[menuSelection].label)}
                    </strong>
                    <p className="text-[#4d4d4d] text-base hyphens-auto">
                      {t(menuList[menuSelection].description)}
                    </p>
                    <div className="mt-5">
                      <a
                        className="uppercase text-[#014698] border-[2px] border-[#014698] min-h-[48px] font-bold py-[13px] px-10"
                        href={menuList[menuSelection].path}
                      >
                        More
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* expand menu */}
      {/* desktop Menu */}
      {/* Mobile Menu */}
      <HeaderFixedMobile />
      {/* Mobile Menu */}
      <ScrollToTop />
    </div>
  );
};

export default HeaderSticky;
