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
import VerticalLine from "../../shared/VerticalLine";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconFlagES, IconFlagUS } from "material-ui-flags";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    background: "black",
    height: 40,
    boxShadow: "none",
  },
  toolbarRoot: {
    display: "flex",
    justifyContent: "flex-end",
    height: 40,
    minHeight: 30,
    alignItems: "center",
  },
  buttonRoot: {
    //borderRight: "1px solid white",
    borderRadius: 0,
    paddingRight: 20,
    paddingLeft: 20,
    height: 30,
  },
  actionRoot: {
    fontSize: 12,
    color: "white",
    //borderRight: "1px solid white",
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
  const { t, i18n } = useTranslation();
  const router = useRouter();

  return (
    <AppBar
      position="static"
      classes={{ root: classes.root }}
      color="secondary"
    >
      <Toolbar classes={{ root: classes.toolbarRoot }}>
        <Link href="/" locale="en">
          <IconButton>
            <IconFlagUS />
          </IconButton>
        </Link>
        <Link href="/" locale="es">
          <IconButton>
            <IconFlagES />
          </IconButton>
        </Link>
        <Button color="secondary" classes={{ root: classes.buttonRoot }}>
          {t("topnav.home")}
        </Button>
        <VerticalLine height={30} />
        <Button
          color="secondary"
          classes={{ root: classes.buttonRoot }}
          href="/visitors"
        >
          VISITANTES
        </Button>
        <VerticalLine height={30} />
        <Button color="secondary" classes={{ root: classes.buttonRoot }}>
          CALENDARIO LITURGICO
        </Button>
        <VerticalLine height={30} />
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
