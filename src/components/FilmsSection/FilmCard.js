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

function FilmCard({ src, title, content }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Card classes={{ root: classes.root }}>
      <IconButton
        style={{ position: "absolute", left: 260, top: 0 }}
        onClick={() => setOpen(true)}
      >
        <LaunchIcon />
      </IconButton>
      <CardContent>
        <Box overflow="auto" style={{ width: "90%", height: 70 }}>
          <Title variant="h6">{title}</Title>
        </Box>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={src}
        component="video"
        height="140"
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
