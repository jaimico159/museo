import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { colors, gallery_images } from "../../constants/constants";
import React, { useState } from "react";
import Slider from "react-slick";
import Title from "../../shared/Title";

const SliderContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: white;
  padding: 100px 0;
`;

const settings = {
  className: "center",
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
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
        style={{
          height: 300,
          cursor: "pointer",
          padding: "8px 4px",
          backgroundColor: colors.CUSTOM_GRAY,
        }}
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
  return (
    <SliderContainer>
      <Title style={{ marginLeft: "100px" }} marginBottom={30}>
        Galería de Imágenes
      </Title>
      <Slider {...settings}>
        {gallery_images.map((url) => {
          return <ClickableImage src={url} />;
        })}
      </Slider>
    </SliderContainer>
  );
}

export default Gallery;
