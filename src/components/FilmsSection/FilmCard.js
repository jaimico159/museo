import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { colors } from "../../constants/constants";
import Title from "../../shared/Title";
import SimpleText from "../../shared/SimpleText";
import FilmCardModal from "./FilmCardModal";
import LaunchIcon from "@material-ui/icons/Launch";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    width: 250,
    border: "solid 2px",
    borderColor: colors.BORDER_GRAY,
    margin: "0 10px",
    position: "relative",
  },
  media: {
    height: 160,
  },
  contentRoot: {
    overflow: "scroll",
  },
});

function FilmCard({ src, title, content }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Card classes={{ root: classes.root }}>
      <IconButton
        style={{ position: "absolute", left: 200, top: 0 }}
        onClick={() => setOpen(true)}
      >
        <LaunchIcon />
      </IconButton>
      <CardContent>
        <Box overflow="auto" style={{ height: 70, width: 200 }}>
          <Title variant="h6" marginBottom={15}>
            {title}
          </Title>
        </Box>
        {/* <Box overflow="auto" style={{ height: 200 }}>
          <SimpleText classes={{ root: classes.contentRoot }}>
            {content}
          </SimpleText>
        </Box> */}
      </CardContent>
      <CardMedia
        className={classes.media}
        image={src}
        component="video"
        height="140"
        // controls
        // controlsList="nodownload"
        // disablePictureInPicture
      />
      <FilmCardModal
        src={src}
        title={title}
        content={content}
        open={open}
        setOpen={setOpen}
      />
    </Card>
  );
}

export default FilmCard;
