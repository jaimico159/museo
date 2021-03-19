import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import Title from "../../../shared/Title";
import { Fragment } from "react";
import SimpleText from "../../../shared/SimpleText";

function CardTitle({ children }) {
  return (
    <Title
      style={{
        fontSize: 20,
        position: "absolute",
        zIndex: 2,
        backgroundColor: "#957223",
        width: 100,
        borderRadius: 5,
        margin: "8px 0 0 10px",
        paddingLeft: 10,
      }}
      color="secondary"
    >
      {children}
    </Title>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 210,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
  },
  header: {
    backgroundImage:
      "url('/images/liturgic_calendar/estatua-virgen-de-lourdes.jpg')",
    backgroundSize: "190px 100px",
    margin: "13px",
    height: 80,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
});

function CardLineContainer({ children }) {
  const style = {
    display: "flex",
    height: 37,
    alignItems: "center",
    justifContent: "center",
    width: "100%",
    marginBottom: 12,
  };
  return <div style={style}>{children}</div>;
}

function CardLineContent({ children }) {
  return (
    <SimpleText style={{ padding: "0 5px", maxWidth: 150, fontSize: 13 }}>
      {children}
    </SimpleText>
  );
}

function CardLineImage({ children }) {
  const style = {
    position: "relative",
    fontFamily: "ITCEDSCR",
    fontSize: 45,
    padding: 0,
    left: -10,
    top: -8,
  };

  const imageStyle = {
    backgroundImage: "url('/images/liturgic_calendar/church-icon.png')",
    height: 37,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minWidth: 65,
  };

  const textStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    fontFamily: "ITCEDSCR",
    fontSize: 45,
  };

  return (
    <div style={{ ...imageStyle, ...textStyle }}>{children}</div>
    // <div style={{ margin: "0 5px", display: "flex", maxWidth: 60 }}>
    //   <div style={imageStyle}>
    //     <div style={style}>
    //       <div style={textStyle}>31</div>
    //     </div>
    //   </div>
    // </div>
  );
}

function CardLine({ item }) {
  return (
    <CardLineContainer>
      <CardLineImage>{item.date}</CardLineImage>
      <CardLineContent>{item.text}</CardLineContent>
    </CardLineContainer>
  );
}

function ScheduleCard({ title, items }) {
  const classes = useStyles();

  return (
    <Fragment>
      <CardTitle>{title}</CardTitle>
      <Card classes={{ root: classes.root }}>
        <CardHeader classes={{ root: classes.header }} />
        {items &&
          items.map((item) => {
            return <CardLine item={item}></CardLine>;
          })}
      </Card>
    </Fragment>
  );
}

export default ScheduleCard;
