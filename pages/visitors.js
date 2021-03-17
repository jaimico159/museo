import Head from "next/head";
import "fontsource-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import Footer from "../src/components/Footer";
import Topnav from "../src/components/Topnav";
import Protocols from "../src/components/Visitors/Protocols";
import VisitorsBanner from "../src/components/Visitors/VisitorsBanner";
import styled from "styled-components";
import VisitorsInfo from "../src/components/Visitors/VisitorsInfo";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

const BlackContainer = styled.div`
  position: absolute;
  background: black;
  opacity: 0.3;
  width: 100%;
  height: 400px;
  z-index: 1;
`;

export default function Visitantes() {
  return (
    <Fragment>
      <Topnav></Topnav>
      <BlackContainer></BlackContainer>
      <VisitorsBanner></VisitorsBanner>
      <VisitorsInfo></VisitorsInfo>
      <Protocols></Protocols>
      <Footer></Footer>
    </Fragment>
  );
}
