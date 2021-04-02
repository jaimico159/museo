import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Image from "react-bootstrap/Image";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, Fragment } from "react";
import { colors } from "../../constants/constants";
import Title from "../../shared/Title";
import SimpleText from "../../shared/SimpleText";
import ImageCardModal from "./ImageCardModal";
import LaunchIcon from "@material-ui/icons/Launch";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    width: 315,
    border: "solid 2px",
    borderColor: colors.BORDER_GRAY,
    margin: "0 10px",
    position: "relative",
  },
  media: {
    height: "100%",
    width: "100%",
  },
  contentRoot: {
    overflow: "scroll",
  },
});

function ImageCard({ src, title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Image
        src={src}
        onClick={() => {
          setOpen(true);
        }}
        style={{
          height: 300,
          cursor: "pointer",
          padding: "8px 4px",
          backgroundColor: colors.CUSTOM_GRAY,
        }}
      ></Image>
      <ImageCardModal open={open} setOpen={setOpen} src={src}></ImageCardModal>
    </Fragment>
  );
}

export default ImageCard;
