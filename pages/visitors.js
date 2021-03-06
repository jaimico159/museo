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

export default function Visitantes() {
  return (
    <Fragment>
      <Topnav></Topnav>
      <Visitors></Visitors>
      <Footer></Footer>
    </Fragment>
  );
}
