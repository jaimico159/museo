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
    srcImage: "/images/services/victoria-picanteria-1.png",
    srcLogo: "/images/services/victoria-picanteria-logo.png",
    phone: "966714119",
  },
  {
    srcImage: "/images/services/",
    srcLogo: "/images/services/",
    phone: "",
  },
  {
    srcImage: "/images/services/",
    srcLogo: "/images/services/",
    phone: "",
  },
  {
    srcImage: "/images/services/",
    srcLogo: "/images/services/",
    phone: "",
  },
  {
    srcImage: "/images/services/",
    srcLogo: "/images/services/",
    phone: "",
  },
  {
    srcImage: "/images/services/",
    srcLogo: "/images/services/",
    phone: "",
  },
  {
    srcImage: "/images/services/",
    srcLogo: "/images/services/",
    phone: "",
  },
  {
    srcImage: "/images/services/",
    srcLogo: "/images/services/",
    phone: "",
  },

  {
    srcImage: "/images/services/",
    srcLogo: "/images/services/",
    phone: "",
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
