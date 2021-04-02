import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { Fragment } from "react";
import { colors, gallery_images } from "../../constants/constants";
import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Title from "../../shared/Title";
import { useTranslation } from "next-i18next";
import ImageCard from "./ImageCard";

const GalleryContainer = styled.div`
  width: 100%;
  max-width: 2600px,
  margin: auto;
  background-color: white;
  padding: 100px 0;
`;

const SliderContainer = styled.div`
  max-width: 1600px;
  width: 90%;
  margin: 0 auto;
`;

const settings = {
  className: "center",
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  // slidesToScroll: 1,
  variableWidth: true,
  dots: true,
  arrows: true,
  accessibility: true,
  nextArrow: <ArrowForwardIosIcon color="primary" fontSize="large" />,
  prevArrow: <ArrowBackIosIcon color="primary" fontSize="large" />,
};

function Gallery() {
  const { t, i18n } = useTranslation();

  return (
    <GalleryContainer>
      <SliderContainer>
        <Title marginBottom={30} style={{ marginLeft: 28 }}>
          {t("gallery.title")}
        </Title>
        <Slider {...settings} style={{ padding: "0 20px" }}>
          {gallery_images.map((url) => {
            return <ImageCard src={url} />;
          })}
        </Slider>
      </SliderContainer>
    </GalleryContainer>
  );
}

export default Gallery;
