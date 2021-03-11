import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { gallery_images } from "../../constants/constants";
import React, { useState } from "react";
import Links from "./Links";
import { colors } from "../../constants/constants";

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

function FilmCard({ src }) {
  return (
    <Card
      style={{
        width: 400,
        height: 500,
        border: "solid 2px",
        borderColor: colors.BORDER_GREY,
      }}
    >
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Img as="div" variant="bottom">
        <Image src={src} style={{ maxHeight: 300, width: 396 }}></Image>
      </Card.Img>
      <Card.Footer className="text-muted">
        <Links />
      </Card.Footer>
    </Card>
  );
}

export default FilmCard;
