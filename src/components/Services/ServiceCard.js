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
    width: 231,
    border: "solid 2px",
    borderColor: colors.BORDER_GRAY,
    margin: "0 10px",
  },
  media: {
    height: 180,
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
  height: 3px;
  margin: 5px;
`;

function MuseumCard({ srcImage, srcLogo, phone }) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.root }}>
      <CardMedia
        className={classes.media}
        image={srcImage}
        component="image"
        height="140"
        controls
        controlsList="nodownload"
        disablePictureInPicture
      />
      <CardMedia
        className={classes.media}
        image={srcLogo}
        component="image"
        height="140"
        controls
        controlsList="nodownload"
        disablePictureInPicture
      />
      <CardContent>
        <Box overflow="auto" style={{ height: 165 }}>
          <PhoneContainer>
            <Image src={icons.telefono}></Image>
            <SimpleText> {phone} </SimpleText>
          </PhoneContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MuseumCard;
