import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconPinSvg from "@/src/iconSvgs/IconPin";
import { menuList, menuListHeaderTop } from "@/src/configs/config";
import LanguagesSelection from "./Languages/Languages";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const HeaderFixedMobile = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const goToHomePage = () => {
    router.push(`/${locale}`);
  };
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="md:hidden block">
      <div className="md:hidden fixed z-50 top-0 right-0 left-0 h-[48px] bg-primary-100 flex justify-center">
        <div className="z-50 bg-primary-300 h-full relative lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full px-[15px] py-auto flex items-center justify-between">
          <div className="flex">
            {isMenuOpen ? (
              <div
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <CloseIcon />
              </div>
            ) : (
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon />
              </div>
            )}
          </div>
          <div
            onClick={goToHomePage}
            className={`absolute top-[-1px] right-[15px] h-full flex items-center`}
          >
            <div className="font-bold text-white text-xl cursor-pointer">
              Nhat Loi
            </div>
          </div>
        </div>
      </div>
      {/* menu lv1 */}
      <div className="relative">
        <div
          className={`pt-[135px] fixed top-0 left-0 h-full w-screen bg-white transform ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } transition-[transform,opacity] duration-500 ease-out z-10`}
        >
          <div>
            <ul className="flex flex-col">
              {Object.values(menuList).map((menu) => {
                return (
                  <div
                    key={menu.id}
                    className="w-full block py-[15px] border-b-[2px] border-[#cce0ee] text-[#8B008B] flex justify-center"
                  >
                    <div
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(menu.path);
                      }}
                      className="lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] px-[30px] sm:px-0 w-full flex justify-between"
                    >
                      <span>{t(menu.label).toUpperCase()}</span>
                    </div>
                  </div>
                );
              })}
            </ul>
            <div className="w-full h-[100px] text-xs pt-[45px] px-[30px] flex justify-center gap-6">
              {menuListHeaderTop.map((menu) => {
                return (
                  <a
                    target={menu.type === "_blank" ? "_blank" : "_self"}
                    key={menu.id}
                    href={menu.path}
                    className="hover:underline text-[#8B008B]"
                  >
                    {t(menu.label)}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* menu lv1 */}

      <div
        className={`fixed top-[48px] left-0 w-full h-[48px] bg-[rgba(233,241,247,.9)] transform ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-[48px] opacity-0"
        } transition-[transform,opacity] duration-500 z-10 flex justify-center`}
      >
        <div className="lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full px-[15px] py-auto flex items-center text-[#8B008B] justify-between">
          <div className={`flex space-x-2 mr-6`}>
            <IconPinSvg />
            <span className="hover:underline">{t("locale")}</span>
          </div>
          <div className="flex items-center cursor-pointer font-bold mr-6">
            <LanguagesSelection arrow={false} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderFixedMobile;
