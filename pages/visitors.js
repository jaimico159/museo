import Head from "next/head";
import "fontsource-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import Footer from "../src/components/Footer";
import Topnav from "../src/components/Topnav";
import Visitors from "../src/components/Visitors";
import VisitorsBanner from "../src/components/Visitors/VisitorsBanner";
import styled from "styled-components";

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
      <Visitors></Visitors>
      <Footer></Footer>
    </Fragment>
  );
}
