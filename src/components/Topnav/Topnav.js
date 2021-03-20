import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import VerticalLine from "../../shared/VerticalLine";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconFlagES, IconFlagUS } from "material-ui-flags";

const useStyles = makeStyles({
  root: {
    position: "fixed",
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
        <Link href={router.asPath} locale="en">
          <IconButton>
            <IconFlagUS />
          </IconButton>
        </Link>
        <Link href={router.asPath} locale="es">
          <IconButton>
            <IconFlagES />
          </IconButton>
        </Link>
        <Link href="/" locale={router.locale}>
          <Button color="secondary" classes={{ root: classes.buttonRoot }}>
            {t("topnav.home")}
          </Button>
        </Link>
        <VerticalLine height={30} />
        <Link href="/visitors" locale={router.locale}>
          <Button color="secondary" classes={{ root: classes.buttonRoot }}>
            {t("topnav.visitors")}
          </Button>
        </Link>
        <VerticalLine height={30} />
        <Link href="/liturgic_calendar" locale={router.locale}>
          <Button color="secondary" classes={{ root: classes.buttonRoot }}>
            {t("topnav.calendar")}
          </Button>
        </Link>
        <VerticalLine height={30} />
        <Link href="/congregation" locale={router.locale}>
          <Button color="secondary" classes={{ root: classes.buttonRoot }}>
            {t("topnav.fran-order")}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Topnav;
