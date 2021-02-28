import Head from "next/head";
import "fontsource-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import { Fragment } from "react";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";
import Topnav from "../src/components/Topnav";
import Gallery from "../src/components/Gallery";
import FilmsSection from "../src/components/FilmsSection";
import Maps from "../src/components/Maps";
import Events from "../src/components/Events/Events";

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: {
      main: "#f5f5f5",
      light: "#ffffff",
      dark: "#c2c2c2",
      contrastText: "#000000",
    },
  },
});

export default function Home() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Topnav></Topnav>
        <Banner></Banner>
        <FilmsSection></FilmsSection>
        <Gallery></Gallery>
        <Maps></Maps>
        <Events></Events>
        <Footer></Footer>
      </ThemeProvider>
    </Fragment>
  );
}
