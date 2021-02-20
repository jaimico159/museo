import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { gallery_images } from "../../constants/constants";
import React, { useState } from "react";

const VerticalCenteredModal = function ({ show, src, onHide }) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={src}></Image>
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
        height="300px"
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
    <Fragment>
      {gallery_images.map(function (item) {
        return <ClickableImage src={item}></ClickableImage>;
      })}
    </Fragment>
  );
}

export default Gallery;
