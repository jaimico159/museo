import Head from "next/head";
import "fontsource-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import LiturgicCalendarBanner from "../src/components/LiturgicCalendar/LiturgicCalendarBanner";
import Footer from "../src/components/Footer";
import Topnav from "../src/components/Topnav";
import Gallery from "../src/components/Gallery";
import FilmsSection from "../src/components/FilmsSection";
import Maps from "../src/components/Maps";
import Events from "../src/components/Events/Events";
import Feedback from "../src/components/Feedback";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ScheduleCard from "../src/components/LiturgicCalendar/subcomponents/ScheduleCard";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default function LiturgicCalendar() {
  return (
    <Fragment>
      <Topnav></Topnav>
      <LiturgicCalendarBanner></LiturgicCalendarBanner>
      <ScheduleCard
        items={[{ date: "23", text: "Virgen del Lourdes" }]}
      ></ScheduleCard>
      <ScheduleCard></ScheduleCard>
      <Footer></Footer>
    </Fragment>
  );
}
