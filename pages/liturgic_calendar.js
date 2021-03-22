import { Fragment } from "react";
import LiturgicCalendarBanner from "../src/components/LiturgicCalendar/LiturgicCalendarBanner";
import Footer from "../src/components/Footer";
import Topnav from "../src/components/Topnav";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CalendarSection from "../src/components/LiturgicCalendar/CalendarSection";
import TitleSection from "../src/components/LiturgicCalendar/TitleSection";
import ReservationSection from "../src/components/LiturgicCalendar/ReservationSection";

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
      <TitleSection></TitleSection>
      <CalendarSection></CalendarSection>
      <ReservationSection></ReservationSection>
      <Footer></Footer>
    </Fragment>
  );
}
