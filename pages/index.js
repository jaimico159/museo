import { Fragment } from "react";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";
import Topnav from "../src/components/Topnav";
import Gallery from "../src/components/Gallery";
import FilmsSection from "../src/components/FilmsSection";
import Maps from "../src/components/Maps";
import Events from "../src/components/Events/Events";
import Feedback from "../src/components/Feedback";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default function Home() {
  return (
    <Fragment>
      <Topnav></Topnav>
      <Banner></Banner>
      <FilmsSection></FilmsSection>
      <Gallery></Gallery>
      <Maps></Maps>
      <Events></Events>
      <Feedback></Feedback>
      <Footer></Footer>
    </Fragment>
  );
}
