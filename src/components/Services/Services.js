import Container from "react-bootstrap/Container";
import { museum_images, colors } from "../../constants/constants";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import Slider from "react-slick";
import Title from "../../shared/Title";
import { useTranslation } from "next-i18next";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const serviceContainerStyles = {
  maxWidth: 1600,
  width: "85%",
};

const mainContainer = {
  width: "100%",
  background: colors.CUSTOM_GRAY,
  maxWidth: 2600,
  height: 580,
  paddingTop: 50,
  paddingBottom: 50,
};

const settings = {
  infinite: true,
  dots: true,
  // centerMode: true,
  slidesToShow: 1,
  variableWidth: true,
  arrows: true,
  accessibility: true,
  nextArrow: <ArrowForwardIosIcon color="primary" fontSize="large" />,
  prevArrow: <ArrowBackIosIcon color="primary" fontSize="large" />,
};

const servicesContent = [
  {
    srcImage: "/images/services/victoria-picanteria.png",
    srcLogo: "/images/services/victoria-picanteria-logo.png",
    phone: "966714119",
  },
  {
    srcImage: "/images/services/McDonalds.png",
    srcLogo: "/images/services/McDonalds-logo.png",
    phone: "(054) 212774",
  },
  {
    srcImage: "/images/services/starbucks.png",
    srcLogo: "/images/services/starbucks-logo.png",
    phone: "(01) 5055000",
  },
  {
    srcImage: "/images/services/pizza-hut.jpg",
    srcLogo: "/images/services/pizza-hut.-logo.png",
    phone: "(054) 257777",
  },
  {
    srcImage: "/images/services/policia-de-turismo.jpg",
    srcLogo: "/images/services/policia-de-turismo-logo.png",
    phone: "988888888",
  },
  {
    srcImage: "/images/services/interbank.jpg",
    srcLogo: "/images/services/interbank",
    phone: "(01) 3119000",
  },
  {
    srcImage: "/images/services/bcp.jpg",
    srcLogo: "/images/services/bcp-logo.png",
    phone: "(01) 3119000",
  },
  {
    srcImage: "/images/services/inkafarma.jpg",
    srcLogo: "/images/services/inkafarma-logo.png",
    phone: "988888888",
  },
  {
    srcImage: "/images/services/megatur.png",
    srcLogo: "/images/services/megatur-logo.png",
    phone: "(054) 404040",
  },
  {
    srcImage: "/images/services/lavanderia.jpg",
    srcLogo: "/images/services/lavanderia-logo.png",
    phone: "988888888",
  },
];

function Services() {
  const { t, i18n } = useTranslation();
  return (
    <Container style={mainContainer}>
      <Container style={serviceContainerStyles}>
        <Title marginBottom={30}>{t("services.title")}</Title>
        <Slider {...settings} style={{ padding: "0 20px" }}>
          {servicesContent.map((el, index) => {
            return (
              <ServiceCard
                srcImage={el.srcImage}
                key={index}
                srcLogo={el.srcLogo}
                phone={el.phone}
              />
            );
          })}
        </Slider>
      </Container>
    </Container>
  );
}

export default Services;
