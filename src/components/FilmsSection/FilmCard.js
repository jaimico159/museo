import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
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

function FilmCard({ src, title, content }) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.root }}>
      <CardContent>
        <Box overflow="auto" style={{ height: 70 }}>
          <Title variant="h6" marginBottom={15}>
            {title}
          </Title>
        </Box>
        <Box overflow="auto" style={{ height: 200 }}>
          <SimpleText classes={{ root: classes.contentRoot }}>
            {content}
          </SimpleText>
        </Box>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={src}
        component="video"
        height="140"
        controls
        controlsList="nodownload"
        disablePictureInPicture
      />
    </Card>
  );
}

export default FilmCard;
