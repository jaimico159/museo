import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { gallery_images } from "../../constants/constants";
import React, { useState } from "react";

const styledCardImg = () => {};

const footerStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  leftLink: {
    display: "flex",
    justifyContent: "flex-start",
    flexGrow: 1,
  },
  rightLink: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
};

function FilmCard() {
  return (
    <Card style={{ width: 500, height: 600 }}>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={gallery_images[0]} />
      <Card.Footer className="text-muted">
        <div style={footerStyles.container}>
          <div style={footerStyles.leftLink}>Habla</div>
          <div style={footerStyles.rightLink}>Causa</div>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default FilmCard;
