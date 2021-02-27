import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { gallery_images } from "../../constants/constants";
import React, { useState } from "react";
import FilmCard from "./FilmCard";
import AliceCarousel from "react-alice-carousel";
import Slider from "react-slick";
import SquareButton from "../../shared/SquareButton";
import Title from "../../shared/Title";

const filmsContainerStyles = {
  maxWidth: 1600,
  width: "85%",
};

const mainContainer = {
  width: "100%",
  background: "rgb(248,247,245)",
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
  return (
    <Container style={mainContainer}>
      <Container style={filmsContainerStyles}>
        <Title text="Videos" />
        <Slider {...settings}>
          {gallery_images.map((url) => {
            return <FilmCard src={url} />;
          })}
        </Slider>
      </Container>
    </Container>
  );
}

export default FilmsSection;
