import { useScrollTrigger, Slide, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const goToContactPage = () => {
    router.push(`/${locale}/contact-us`);
  };

  return (
    <div>
      <div className="fixed right-0 lg:bottom-[40%] bottom-0 flex lg:flex-col flex-row gap-[2px] z-50">
        <div
          onClick={goToContactPage}
          className="cursor-pointer text-white lg:h-[80px] h-[50px] w-[50vw] md:w-[80px] flex flex-col justify-center items-center bg-primary-300"
        >
          <ContactMailIcon />
          <span className="text-[11px]">{t("contact")}</span>
        </div>
        <a
          href="tel:+84367740971"
          className="cursor-pointer text-white lg:h-[80px] h-[50px] w-[50vw] md:w-[80px] flex flex-col justify-center items-center bg-primary-300"
        >
          <LocalPhoneIcon />
          <span className="text-[11px]">{t("phone_to_me")}</span>
        </a>
      </div>
      <Slide direction={"up"} in={trigger}>
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          sx={{
            position: "fixed",
            background: "white",
            borderRadius: 0,
            height: "40px",
            width: "60px",
            color: "black",
          }}
          className="lg:bottom-0 bottom-[60px] lg:right-[100px] right-[10px]"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Slide>
    </div>
  );
}
