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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
  infinite: true,
  dots: true,
  centerMode: true,
  slidesToShow: 1,
  variableWidth: true,
  arrows: true,
  accessibility: true,
  nextArrow: <ArrowForwardIosIcon color="primary" fontSize="large" />,
  prevArrow: <ArrowBackIosIcon color="primary" fontSize="large" />,
};

const filmsContent = [
  {
    title: "title1",
    src: "src",
    content: "content",
  },
];

function FilmsSection() {
  return (
    <Container style={mainContainer}>
      <Container style={filmsContainerStyles}>
        <Title marginBottom={30}>Videos</Title>
        <Slider {...settings} style={{ padding: "0 20px" }}>
          {gallery_images.map((url, index) => {
            return <FilmCard src={url} key={index} />;
          })}
        </Slider>
      </Container>
    </Container>
  );
}

export default FilmsSection;
