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

const VerticalCenteredModal = function ({ show, src, onHide }) {
  const handleClose = () => {
    onHide();
  };

  return (
    <Modal
      show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Image src={src} style={{ height: 480, margin: "0 180px" }}></Image>
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
  const { t, i18n } = useTranslation();
  return (
    <GalleryContainer>
      <SliderContainer>
        <Title marginBottom={30} style={{ marginLeft: 85 }}>
          {t("gallery.title")}
        </Title>
        <Slider {...settings} style={{ padding: "0 20px" }}>
          {gallery_images.map((url) => {
            return <ClickableImage src={url} />;
          })}
        </Slider>
      </SliderContainer>
    </GalleryContainer>
  );
}

export default Gallery;
