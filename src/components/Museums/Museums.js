import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { museum_images, colors } from "../../constants/constants";
import React, { useState } from "react";
import MuseumCard from "./MuseumCard";
import AliceCarousel from "react-alice-carousel";
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
  height: 750,
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

const museumsContent = [
  {
    title: "t('museums.catedral-name')",
    src: "/images/museums/museo-1.jpg",
    description:
      "Atesora y expone valiosos objetos, que hablan al presente de la historia de más de 400 años.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Celda del Padre Jose de Guadalupe Mojica",
    src: "/images/museums/museo-2.jpg",
    description:
      "Fray José de Guadalupe Mojica fue un autor y cantante mexicano, y uno de los más reconocidos franciscanos en Perú, nacido en San Gabriel en el año de 1895 y falleciendo en Lima en el año de 1974. El fray Mojica, mucho antes de dedicarse a una vida religiosa, participo en películas como “El precio de un beso” en 1930, seguido de una serie de comedias y melodramas de aventuras románticos irán convirtiéndolo en uno de los rostros hispanos más reconocibles en Hollywood. Como cantante fue un tenor en la compañía de ópera de Chicago.  Finalmente, el último cambio de su vida fue dejar el lujo, la fama y su país natal, para convertirse en un fray de la orden Franciscana en el Perú. En 1952 publicó su libro de memorias “Yo pecador”, en el que relata su vida mundana y su conversión de fe. El texto inspiró la película de 1959 en la que Mojica aparecía ya con su nombre dentro de la orden. Fray José de Guadalupe Mojica. José Mojica falleció en Lima en 1974, apenas seis días después de haber cumplido los 79 años. Una vida de leyenda y que se atesora en nuestro país como parte de su acervo cultural.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Sala Duns Scotto",
    src: "/images/museums/museo-3.jpg",
    description:
      "La sala Capitular era generalmente usada para celebrar los “Capítulos”, de ahí proviene su nombre de “Capitular”, en la reunión se recordaban las escrituras de la regla adoptada y conversar sobre asuntos concernientes al convento y sus habitantes.La sala resguarda en sus muros el árbol genealógico de la Orden Franciscana, la pintura más grande que se puede hallar en la ciudad de Arequipa, junto a otras pinturas que fueron pintadas por el pintor Arequipeño Antonio Guzmán. La habitacion esta amueblada con sillones del siglo XIX, estos decorados con el escudo de la orden franciscana.La sala también es usada como recepción post misa con previo alquiler.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Pinacoteca Inmaculada Concepción",
    src: "/images/museums/museo-4.jpg",
    description:
      "La sala Capitular era generalmente usada para celebrar los “Capítulos”, de ahí proviene su nombre de “Capitular”, en la reunión se recordaban las escrituras de la regla adoptada y conversar sobre asuntos concernientes al convento y sus habitantes.La sala resguarda en sus muros el árbol genealógico de la Orden Franciscana, la pintura más grande que se puede hallar en la ciudad de Arequipa, junto a otras pinturas que fueron pintadas por el pintor Arequipeño Antonio Guzmán. La habitacion esta amueblada con sillones del siglo XIX, estos decorados con el escudo de la orden franciscana.La sala también es usada como recepción post misa con previo alquiler.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Coro San Francisco Lozano",
    src: "/images/museums/museo-5.jpg",
    description:
      "La sala Capitular era generalmente usada para celebrar los “Capítulos”, de ahí proviene su nombre de “Capitular”, en la reunión se recordaban las escrituras de la regla adoptada y conversar sobre asuntos concernientes al convento y sus habitantes.La sala resguarda en sus muros el árbol genealógico de la Orden Franciscana, la pintura más grande que se puede hallar en la ciudad de Arequipa, junto a otras pinturas que fueron pintadas por el pintor Arequipeño Antonio Guzmán. La habitacion esta amueblada con sillones del siglo XIX, estos decorados con el escudo de la orden franciscana.La sala también es usada como recepción post misa con previo alquiler.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Arquitectura del convento San Francisco y el Claustro",
    src: "/images/museums/museo-6.jpg",
    description:
      "La sala Capitular era generalmente usada para celebrar los “Capítulos”, de ahí proviene su nombre de “Capitular”, en la reunión se recordaban las escrituras de la regla adoptada y conversar sobre asuntos concernientes al convento y sus habitantes.La sala resguarda en sus muros el árbol genealógico de la Orden Franciscana, la pintura más grande que se puede hallar en la ciudad de Arequipa, junto a otras pinturas que fueron pintadas por el pintor Arequipeño Antonio Guzmán. La habitacion esta amueblada con sillones del siglo XIX, estos decorados con el escudo de la orden franciscana.La sala también es usada como recepción post misa con previo alquiler.",
    location: "Ubicación: Plaza de Armas",
    hours: "Lun-Sab.: 10:00–4:15 pm",
  },
  {
    title: "Arquitectura del convento San Francisco y el Claustro",
    src: "/images/museums/museo-7.jpg",
    description:
      "La sala Capitular era generalmente usada para celebrar los “Capítulos”, de ahí proviene su nombre de “Capitular”, en la reunión se recordaban las escrituras de la regla adoptada y conversar sobre asuntos concernientes al convento y sus habitantes.La sala resguarda en sus muros el árbol genealógico de la Orden Franciscana, la pintura más grande que se puede hallar en la ciudad de Arequipa, junto a otras pinturas que fueron pintadas por el pintor Arequipeño Antonio Guzmán. La habitacion esta amueblada con sillones del siglo XIX, estos decorados con el escudo de la orden franciscana.La sala también es usada como recepción post misa con previo alquiler.",
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
