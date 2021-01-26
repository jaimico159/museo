import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";
import Topnav from "../src/components/Topnav";

export default function Home() {
  return (
    <Fragment>
      <Topnav></Topnav>
      <Banner></Banner>
      <Footer></Footer>
    </Fragment>
  );
}
