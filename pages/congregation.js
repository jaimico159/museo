import "fontsource-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import LiturgicCalendarBanner from "../src/components/LiturgicCalendar/LiturgicCalendarBanner";
import Footer from "../src/components/Footer";
import Topnav from "../src/components/Topnav";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CalendarSection from "../src/components/LiturgicCalendar/CalendarSection";
import TitleSection from "../src/components/LiturgicCalendar/TitleSection";
import ReservationSection from "../src/components/LiturgicCalendar/ReservationSection";
import CongregationBanner from "../src/components/Congregation/CongregationBanner";
import InfoSection from "../src/components/Congregation/InfoSection";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default function Congregation() {
  return (
    <Fragment>
      <Topnav></Topnav>
      <CongregationBanner></CongregationBanner>
      <InfoSection></InfoSection>
      <Footer></Footer>
    </Fragment>
  );
}
