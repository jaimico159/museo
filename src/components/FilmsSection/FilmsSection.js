import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { gallery_images } from "../../constants/constants";
import React, { useState } from "react";
import FilmCard from "./FilmCard";
import AliceCarousel from "react-alice-carousel";

const filmsContainerStyles = {
  maxWidth: 1600,
};

function FilmsSection() {
  const items = [
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
    <FilmCard />,
  ];
  return (
    <Container style={filmsContainerStyles}>
      <AliceCarousel
        autoWidth={true}
        disableButtonsControls={true}
        items={items}
      />
    </Container>
  );
}

export default FilmsSection;
