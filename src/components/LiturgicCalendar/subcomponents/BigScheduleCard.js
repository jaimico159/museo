import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import Title from "../../../shared/Title";
import SimpleText from "../../../shared/SimpleText";
import { Box, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ScheduleCardModal from "./ScheduleCardModal";
import { useState } from "react";

function CardTitle({ children }) {
  return (
    <div
      style={{
        position: "absolute ",
        zIndex: 2,
        width: "100%",
        height: 25,

        margin: "8px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title
        style={{
          fontSize: 20,
          backgroundColor: "#957223",
          padding: "0 10px",
          borderRadius: 5,
        }}
        color="secondary"
      >
        {children}
      </Title>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    width: 600,
    height: 600,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
  },
  header: {
    backgroundPosition: "center",
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
    height: "auto",
    alignItems: "center",
    justifContent: "center",
    width: "100%",
    marginBottom: 12,
  };
  return <div style={style}>{children}</div>;
}

function CardLineContent({ children }) {
  return (
    <SimpleText style={{ padding: "0 25px 0 0", maxWidth: 600, fontSize: 13 }}>
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
    minWidth: 100,
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
      <CardLineContent>{item.expandedText}</CardLineContent>
    </CardLineContainer>
  );
}

function BigScheduleCard({ title, items, src }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <CardTitle>{title}</CardTitle>
      <Card classes={{ root: classes.root }}>
        <CardHeader
          classes={{ root: classes.header }}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: 120,
          }}
        />
        <Box
          component="div"
          overflow="auto"
          style={{
            height: 400,
            overflowY: "scroll",
          }}
        >
          {items &&
            items.map((item, index) => {
              return <CardLine item={item} key={index}></CardLine>;
            })}
        </Box>
      </Card>
    </div>
  );
}

export default BigScheduleCard;
