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
  width: "85%",
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

const museumsContent = [
  {
    title: "Museo de la Catedral de Arequipa",
    src: "/images/museums/museo-1.jpg",
    description:
      "Atesora y expone valiosos objetos, que hablan al presente de la historia de más de 400 años.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Museo de la Catedral de Arequipa",
    src: "/images/museums/museo-2.jpg",
    description:
      "Atesora y expone valiosos objetos, que hablan al presente de la historia de más de 400 años.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Museo de la Catedral de Arequipa",
    src: "/images/museums/museo-3.jpg",
    description:
      "Atesora y expone valiosos objetos, que hablan al presente de la historia de más de 400 años.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Museo de la Catedral de Arequipa",
    src: "/images/museums/museo-4.jpg",
    description:
      "Atesora y expone valiosos objetos, que hablan al presente de la historia de más de 400 años.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Museo de la Catedral de Arequipa",
    src: "/images/museums/museo-5.jpg",
    description:
      "Atesora y expone valiosos objetos, que hablan al presente de la historia de más de 400 años.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Museo de la Catedral de Arequipa",
    src: "/images/museums/museo-6.jpg",
    description:
      "Atesora y expone valiosos objetos, que hablan al presente de la historia de más de 400 años.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Museo de la Catedral de Arequipa",
    src: "/images/museums/museo-7.jpg",
    description:
      "Atesora y expone valiosos objetos, que hablan al presente de la historia de más de 400 años.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
];

function Museums() {
  const { t, i18n } = useTranslation();
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
