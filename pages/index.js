import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { Fragment } from "react";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";
import Topnav from "../src/components/Topnav";
import Gallery from "../src/components/Gallery";
import Maps from "../src/components/Maps";

export default function Home() {
  return (
    <Fragment>
      <Topnav></Topnav>
      <Banner></Banner>
      <Gallery></Gallery>
      <Maps></Maps>
      <Footer></Footer>
    </Fragment>
  );
}
