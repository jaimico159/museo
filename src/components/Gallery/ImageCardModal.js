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

export default function ImageCardModal({ open, setOpen, src }) {
  const classes = useStyles();

  const handleClose = () => {
    console.log("CLOSING");
  };

  return (
    <div>
      <Modal
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
          <img src={src} style={{ height: "80%" }}></img>
        </Fade>
      </Modal>
    </div>
  );
}
