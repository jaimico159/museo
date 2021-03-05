import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    background: "transparent",
    height: 50,
  },
  toolbarRoot: {
    display: "flex",
    justifyContent: "flex-end",
    height: 50,
    minHeight: 50,
  },
  buttonRoot: {
    borderRight: "1px solid white",
    borderRadius: 0,
    paddingRight: 20,
    paddingLeft: 20,
    height: 20,
  },
  actionRoot: {
    fontSize: 12,
    color: "white",
    borderRight: "1px solid white",
  },
  actionSelected: {
    background: "white",
    color: "black",
    fontSize: 12,
  },
  actionLabel: {
    fontSize: 12,
  },
  actionWrapper: {
    width: 100,
  },
});

function Topnav() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <AppBar
      position="static"
      classes={{ root: classes.root }}
      color="secondary"
    >
      <Toolbar classes={{ root: classes.toolbarRoot }}>
        <Button color="secondary" classes={{ root: classes.buttonRoot }}>
          INICIO
        </Button>
        <Button color="secondary" classes={{ root: classes.buttonRoot }}>
          VISITANTES
        </Button>
        <Button color="secondary" classes={{ root: classes.buttonRoot }}>
          CALENDARIO LITURGICO
        </Button>
        <Button color="secondary" classes={{ root: classes.buttonRoot }}>
          LA ORDEN FRANCISCANA
        </Button>
      </Toolbar>
    </AppBar>
    // <BottomNavigation
    //   color="secondary"
    //   value={value}
    //   onChange={(event, newValue) => {
    //     setValue(newValue);
    //   }}
    //   showLabels
    //   classes={{ root: classes.root }}
    // >
    //   <BottomNavigationAction
    //     color="secondary"
    //     disableTouchRipple
    //     disableRipple
    //     label="INICIO"
    //     classes={{
    //       root: classes.actionRoot,
    //       label: classes.actionLabel,
    //       selected: classes.actionSelected,
    //       wrapper: classes.actionWrapper,
    //     }}
    //     style={{ width: 200 }}
    //   />
    //   <BottomNavigationAction
    //     disableTouchRipple
    //     disableRipple
    //     label="VISITANTES"
    //     classes={{
    //       root: classes.actionRoot,
    //       label: classes.actionLabel,
    //       selected: classes.actionSelected,
    //     }}
    //   />
    //   <BottomNavigationAction
    //     disableTouchRipple
    //     disableRipple
    //     label="CALENDARIO LITURGICO"
    //     classes={{
    //       root: classes.actionRoot,
    //       label: classes.actionLabel,
    //       selected: classes.actionSelected,
    //     }}
    //   />
    //   <BottomNavigationAction
    //     disableTouchRipple
    //     disableRipple
    //     label="LA ORDEN FRANCISCANA"
    //     classes={{
    //       root: classes.actionRoot,
    //       label: classes.actionLabel,
    //       selected: classes.actionSelected,
    //     }}
    //   />
    // </BottomNavigation>
  );
}

export default Topnav;
