// i18n.ts
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";

import translationEN from "@/public/locales/en/common.json";
import translationVI from "@/public/locales/vi/common.json";

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export function useTranslation(ns?: string, options = {}) {
  const ret = useTranslationOrg(ns, options);
  return ret;
}
