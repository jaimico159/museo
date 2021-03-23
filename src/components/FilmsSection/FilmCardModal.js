import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CardMedia from "@material-ui/core/CardMedia";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { colors } from "../../constants/constants";

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
    width: 800,
    borderColor: colors.BORDER_GRAY,
    borderRadio: 5,
    display: "flex",
  },
  video: {},
  content: {},
};

function BigFilmCard() {
  return (
    <div style={styles.main}>
      <div>
        <CardMedia
          className={classes.media}
          image={src}
          component="video"
          height="140"
          // controls
          // controlsList="nodownload"
          // disablePictureInPicture
        />
      </div>
      <div>HELLo</div>
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
