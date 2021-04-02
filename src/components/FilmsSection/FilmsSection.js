import Container from "react-bootstrap/Container";
import { colors } from "../../constants/constants";
import React from "react";
import FilmCard from "./FilmCard";
import Slider from "react-slick";
import Title from "../../shared/Title";
import { useTranslation } from "next-i18next";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const filmsContainerStyles = {
  maxWidth: 1600,
  width: "90%",
};

const mainContainer = {
  width: "100%",
  background: colors.CUSTOM_GRAY,
  maxWidth: 2600,
  height: 500,
  paddingTop: 50,
  paddingBottom: 50,
};

const settings = {
  infinite: true,
  dots: true,
  slidesToShow: 1,
  variableWidth: true,
  arrows: true,
  accessibility: true,
  nextArrow: <ArrowForwardIosIcon color="primary" fontSize="large" />,
  prevArrow: <ArrowBackIosIcon color="primary" fontSize="large" />,
};

function FilmsSection() {
  const { t } = useTranslation();
  const filmsContent = [
    {
      title: t("films.chap-room-name"),
      src: "/videos/sala-capitular.webm",
      content: t("films.chap-room-description"),
    },
    {
      title: t("films.cell-father-name"),
      src: "/videos/celda-padre.mp4",
      content: t("films.cell-father-description"),
    },
    {
      title: t("films.duns-room-name"),
      src: "/videos/sala-duns-scotto.webm",
      content: t("films.duns-room-description"),
    },
    {
      title: t("films.art-gallery-name"),
      src: "/videos/pinacoteca.webm",
      content: t("films.art-gallery-description"),
    },
    {
      title: t("films.choir-name"),
      src: "/videos/francisco-solano.webm",
      content: t("films.choir-description"),
    },
    {
      title: t("films.covenant-name"),
      src: "/videos/arquitectura-convento.webm",
      content: t("films.covenant-description"),
    },
  ];
  return (
    <Container style={mainContainer}>
      <Container style={filmsContainerStyles}>
        <Title marginBottom={30}>{t("films.title")}</Title>
        <Slider {...settings} style={{ padding: "0 20px" }}>
          {filmsContent.map((el, index) => {
            return (
              <FilmCard
                src={el.src}
                key={index}
                title={el.title}
                content={el.content}
              />
            );
          })}
        </Slider>
      </Container>
    </Container>
  );
}

export default FilmsSection;
