import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import { icons } from "../../constants/constants";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { colors } from "../../constants/constants";
import SimpleText from "../../shared/SimpleText";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    width: 200,
    border: "solid 2px",
    borderColor: colors.BORDER_GRAY,
    margin: "0 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 330,
  },
  media: {
    height: 200,
    width: "100%",
  },
  media2: {
    height: 60,
    width: 150,
    margin: 8,
    backgroundSize: "contain",
  },
  contentRoot: {
    overflow: "scroll",
  },
});

const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 15px;
  margin-right: 5px;
`;

function MuseumCard({ srcImage, srcLogo, phone }) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.root }}>
      <CardMedia
        className={classes.media}
        image={srcImage}
        component="image"
        // height="140"
        controls
        controlsList="nodownload"
        disablePictureInPicture
      />
      <CardMedia
        className={classes.media2}
        image={srcLogo}
        component="image"
        height="140"
        controls
        controlsList="nodownload"
        disablePictureInPicture
      />
      <CardContent style={{ padding: 10 }}>
        <Box overflow="auto" style={{ height: 30 }}>
          <PhoneContainer>
            <Image src={icons.phone}></Image>
            <SimpleText> {phone} </SimpleText>
          </PhoneContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MuseumCard;
