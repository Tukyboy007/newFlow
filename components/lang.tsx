import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import i18n from "i18next";
import Flag from "react-world-flags";

const LanguageSwitcher: FC = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(router.locale || "en");

  useEffect(() => {
    setLanguage(router.locale || "en");
  }, [router.locale]);

  const changeLanguage = (newLanguage: string) => {
    i18n
      .changeLanguage(newLanguage)
      .then(() => {
        setLanguage(newLanguage);
        router.push(router.pathname, router.asPath, { locale: newLanguage });
      })
      .catch((error) => {
        console.error("Failed to change language:", error);
      });
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage(language === "en" ? "mn" : "en")}
        className="flex items-center space-x-2 p-2"
      >
        <Flag code={language === "en" ? "GB" : "MN"} alt={language === "en" ? "English" : "Mongolian"} width={30} height={20} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
