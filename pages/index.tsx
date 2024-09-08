import Head from "next/head";
import type { NextPage } from "next";
import LanguageSwitcher from "@/components/lang";
import { useTranslation } from "react-i18next";
import Masthead from "@/components/masthead";
import Introduction from "@/components/introduction";
import Vision from "@/components/vision";

const Home: NextPage = () => {
  const { t } = useTranslation();

  const missionBody = t("missionBody");  // Should return string
  const visionBody = t("visionBody");    // Should return string
  const principlesBody = t("principlesBody", { returnObjects: true });  // Ensure it returns an array

  const cardData = [
    {
      title: t("mission"),
      text: missionBody,
      image: "/assets/mission.svg"  // Corrected image path
    },
    {
      title: t("vision"),
      text: visionBody,
      image: "/assets/vision.svg"  // Corrected image path
    },
    {
      title: t("principles"),
      text: Array.isArray(principlesBody) ? principlesBody : [principlesBody],
      image: "/assets/principles.svg"  // Corrected image path
    }
  ];


  return (
    <div>
      <Head>
        <title>newFlow</title>
        <meta name="newname" content="Generated by newflow" />
      </Head>
      <Masthead />
      <Introduction
        title={t("intro")}
        text1={t("introBody1")}
        text2={t("introBody2")}
      />
      <Vision cardData={cardData} />
    </div>
  );
};

export default Home;
