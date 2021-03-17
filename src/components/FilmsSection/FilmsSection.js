import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { gallery_images, colors } from "../../constants/constants";
import React, { useState } from "react";
import FilmCard from "./FilmCard";
import AliceCarousel from "react-alice-carousel";
import Slider from "react-slick";
import Title from "../../shared/Title";
import { useTranslation } from "next-i18next";

const filmsContainerStyles = {
  maxWidth: 1600,
  width: "85%",
};

const mainContainer = {
  width: "100%",
  background: colors.CUSTOM_GRAY,
  maxWidth: 2600,
  height: 700,
  paddingTop: 50,
  paddingBottom: 50,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

function FilmsSection() {
  const { t, i18n } = useTranslation();
  return (
    <Container style={mainContainer}>
      <Container style={filmsContainerStyles}>
        <Title marginBottom={30}>{t("films.title")}</Title>
        <Slider {...settings}>
          {gallery_images.map((url, index) => {
            return <FilmCard src={url} key={index} />;
          })}
        </Slider>
      </Container>
    </Container>
  );
}

export default FilmsSection;
