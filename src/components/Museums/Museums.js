import Container from "react-bootstrap/Container";
import { museum_images, colors } from "../../constants/constants";
import React, { useState } from "react";
import MuseumCard from "./MuseumCard";
import Slider from "react-slick";
import Title from "../../shared/Title";
import { useTranslation } from "next-i18next";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const museumContainerStyles = {
  maxWidth: 1600,
  width: "90%",
};

const mainContainer = {
  width: "100%",
  background: colors.CUSTOM_GRAY,
  maxWidth: 2600,
  height: 680,
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

function Museums() {
  const { t, i18n } = useTranslation();
  const museumsContent = [
    {
      title: t("museums.catedral-name"),
      src: "/images/museums/museo-1.jpg",
      description: t("museums.catedral-description"),
      location: t("museums.catedral-location"),
      hours: t("museums.catedral-hours"),
    },
    {
      title: t("museums.catalina-name"),
      src: "/images/museums/museo-2.jpg",
      description: t("museums.catalina-description"),
      location: t("museums.catalina-location"),
      hours: t("museums.catalina-hours"),
    },
    {
      title: t("museums.house-name"),
      src: "/images/museums/museo-3.jpg",
      description: t("museums.house-description"),
      location: t("museums.house-location"),
      hours: t("museums.house-hours"),
    },
    {
      title: t("museums.monastery-name"),
      src: "/images/museums/museo-4.jpg",
      description: t("museums.monastery-description"),
      location: t("museums.monastery-location"),
      hours: t("museums.monastery-hours"),
    },
    {
      title: t("museums.shrines-name"),
      src: "/images/museums/museo-5.jpg",
      description: t("museums.shrines-description"),
      location: t("museums.shrines-location"),
      hours: t("museums.shrines-hours"),
    },
    {
      title: t("museums.recoleta-name"),
      src: "/images/museums/museo-6.jpg",
      description: t("museums.recoleta-description"),
      location: t("museums.recoleta-location"),
      hours: t("museums.recoleta-hours"),
    },
    {
      title: t("museums.llosa-house-name"),
      src: "/images/museums/museo-7.jpg",
      description: t("museums.llosa-house-description"),
      location: t("museums.llosa-house-location"),
      hours: t("museums.llosa-house-hours"),
    },
  ];
  return (
    <Container style={mainContainer}>
      <Container style={museumContainerStyles}>
        <Title marginBottom={30}>{t("museums.title")}</Title>
        <Slider {...settings} style={{ padding: "0 20px" }}>
          {museumsContent.map((el, index) => {
            return (
              <MuseumCard
                src={el.src}
                key={index}
                title={el.title}
                description={el.description}
                location={el.location}
                hours={el.hours}
              />
            );
          })}
        </Slider>
      </Container>
    </Container>
  );
}

export default Museums;
