import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Fragment } from "react";
import { gallery_images } from "../../constants/constants";
import React, { useState } from "react";
import Links from "./Links";
import { colors } from "../../constants/constants";
import Title from "../../shared/Title";
import SimpleText from "../../shared/SimpleText";

const useStyles = makeStyles({
  root: {
    width: 400,
    border: "solid 2px",
    borderColor: colors.BORDER_GRAY,
    margin: "0 10px",
  },
  media: {
    height: 250,
  },
  contentRoot: {
    overflow: "scroll",
  },
});

function FilmCard({ src }) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.root }}>
      <CardContent>
        <Title variant="h6" marginBottom={15}>
          Ejemplo de Video
        </Title>
        <SimpleText classes={{ root: classes.contentRoot }}>
          Esta es una breve descripción del video que se va a mostrar
        </SimpleText>
      </CardContent>
      <CardMedia className={classes.media} image={src} component="img" />
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default FilmCard;
