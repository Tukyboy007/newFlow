import Head from "next/head";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Masthead from "@/components/masthead";
import Introduction from "@/components/introduction";
import Vision from "@/components/vision";
import Values from "@/components/values";
import PartnersSection from "@/components/partner";
import ContactPage from "@/components/contact";
import Navbar from "@/components/navbar";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const buttons = [t("home"), t("about"), t("partners"), t("contact")];
  const missionBody = t("missionBody"); // Should return string
  const visionBody = t("visionBody"); // Should return string
  const principlesBody = t("principlesBody", { returnObjects: true }); // Ensure it returns an array

  const cardData = [
    {
      title: t("mission"),
      text: missionBody,
      image: "/assets/mission.svg", // Corrected image path
    },
    {
      title: t("vision"),
      text: visionBody,
      image: "/assets/vision.svg", // Corrected image path
    },
    {
      title: t("principles"),
      text: Array.isArray(principlesBody) ? principlesBody : [principlesBody],
      image: "/assets/principles.svg", // Corrected image path
    },
  ];

  const valuesData = [
    {
      title: t("values1"),
      icon: "/assets/guard.svg", // Use 'icon' instead of 'img'
    },
    {
      title: t("values2"),
      icon: "/assets/hammer.svg",
    },
    {
      title: t("values3"),
      icon: "/assets/jinluur.svg",
    },
    {
      title: t("values4"),
      icon: "/assets/people.svg",
    },
  ];

  const cards = [
    {
      text: t("productsBody1"),
      img: "/assets/box.svg",
    },
    {
      text: t("productsBody2"),
      img: "/assets/shipment.svg",
    },
  ];

  const partners = [
    {
      name: "Sembel Khishig LLC",
      logo: "/assets/sponsor1.svg",
    },
    {
      name: "Europharma LLC",
      logo: "/assets/sponsor2.svg",
    },
    {
      name: "Mirae Well Life Co.,Ltd",
      logo: "/assets/sponsor3.svg",
    },
  ];

  const contactData = [t("contactBody1"), t("contactBody2"), t("contactBody3")];
  return (
    <div className="!scroll-smooth">
      <Head>
        <title>Caravan</title>
        <meta name="CARAVAN" content="TMB TRADE LLC" />
        <link rel="icon" href="/assets/logo3.svg" />
      </Head>
      <Navbar buttons={buttons} />
      <div id="home">
        <Masthead buttons={[]} />
      </div>
      <div id="about">
        <Introduction
          title={t("intro")}
          text1={t("introBody1")}
          text2={t("introBody2")}
        />
      </div>
      <Vision cardData={cardData} />
      <Values cardData={valuesData} title={t("values")} cards={cards} />
      <div id="services">
        <PartnersSection
          title={t("partnersBody")}
          partners={partners}
          img={"/assets/profile.svg"}
        />
      </div>
      <div id="contact">
        <ContactPage data={contactData} />
      </div>
    </div>
  );
};

export default Home;
