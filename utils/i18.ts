// utils/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEn from "../public/locales/en/common.json";
import commonMn from "../public/locales/mn/common.json";

i18n
  .use(initReactI18next) // Connects i18next with React
  .init({
    resources: {
      en: {
        common: commonEn,
      },
      mn: {
        common: commonMn,
      },
    },
    lng: "en", // Default language
    fallbackLng: "mn", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes XSS
    },
    ns: ["common"], // Namespaces used
    defaultNS: "common", // Default namespace
  });

export default i18n;
