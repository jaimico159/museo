import Button from "react-bootstrap/Button";
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

const useStyles = makeStyles({
  root: {
    justifyContent: "flex-end",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    background: "transparent",
    height: 40,
    paddingRight: 100,
    color: "grey",
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
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      classes={{ root: classes.root }}
    >
      <BottomNavigationAction
        disableTouchRipple
        disableRipple
        label="INICIO"
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.actionSelected,
          wrapper: classes.actionWrapper,
        }}
        style={{ width: 200 }}
      />
      <BottomNavigationAction
        disableTouchRipple
        disableRipple
        label="VISITANTES"
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.actionSelected,
        }}
      />
      <BottomNavigationAction
        disableTouchRipple
        disableRipple
        label="CALENDARIO LITURGICO"
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.actionSelected,
        }}
      />
      <BottomNavigationAction
        disableTouchRipple
        disableRipple
        label="LA ORDEN FRANCISCANA"
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.actionSelected,
        }}
      />
    </BottomNavigation>
  );
}

export default Topnav;
