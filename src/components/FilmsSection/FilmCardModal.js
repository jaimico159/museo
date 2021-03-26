import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CardMedia from "@material-ui/core/CardMedia";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { colors } from "../../constants/constants";
import { Box } from "@material-ui/core";
import Title from "../../shared/Title";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const styles = {
  main: {
    height: 500,
    width: 1000,
    borderColor: colors.BORDER_GRAY,
    borderRadio: 5,
    borderWeight: 10,
    borderStyle: "solid",
    display: "flex",
    background: "white",
    padding: 5,
    alignItems: "center",
  },
  video: {},
  content: {},
};

function BigFilmCard({ src, title, content }) {
  return (
    <div style={styles.main}>
      <div style={{ width: 800, display: "flex", alignItems: "center" }}>
        <CardMedia
          image={src}
          component="video"
          height="430"
          controls
          controlsList="nodownload"
          disablePictureInPicture
        />
      </div>
      <Box
        style={{
          padding: 40,
          width: 400,
          height: 500,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title marginBottom={30}>{title}</Title>
        <Box overflow="auto">{content}</Box>
      </Box>
    </div>
  );
}

export default function FilmCardModal({ open, setOpen, title, content, src }) {
  const classes = useStyles();

  const handleClose = () => {
    console.log("CLOSING");
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <BigFilmCard title={title} content={content} src={src}></BigFilmCard>
        </Fade>
      </Modal>
    </div>
  );
}
