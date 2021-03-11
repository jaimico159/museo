import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { gallery_images } from "../../constants/constants";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Slider from "react-slick";
import Title from "../../shared/Title";

const filmsContainerStyles = {
  // maxWidth: 1600,
  // width: "85%",
  margin: 0,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
};

const VerticalCenteredModal = function ({ show, src, onHide }) {
  const handleClose = () => {
    onHide();
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={src} style={{ height: 200 }}></Image>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const ClickableImage = function ({ src }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <Image
        src={src}
        onClick={() => {
          setModalShow(true);
        }}
        style={{ height: 200, cursor: "pointer" }}
      ></Image>
      <VerticalCenteredModal
        src={src}
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></VerticalCenteredModal>
    </Fragment>
  );
};

function Gallery() {
  const images = gallery_images.map(function (item) {
    return <ClickableImage src={item}></ClickableImage>;
  });

  return (
    <Container style={filmsContainerStyles}>
      <Title text="Galería de Imágenes" style={{ marginLeft: 50 }} />
      <Slider {...settings}>
        {gallery_images.map((url) => {
          return <ClickableImage src={url} />;
        })}
      </Slider>
    </Container>
  );
}

export default Gallery;
