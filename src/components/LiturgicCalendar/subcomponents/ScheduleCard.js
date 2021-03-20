import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Title from "../../../shared/Title";
import SimpleText from "../../../shared/SimpleText";
import { Box, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ScheduleCardModal from "./ScheduleCardModal";
import { useState } from "react";

function CardTitle({ children }) {
  return (
    <Title
      style={{
        fontSize: 17,
        position: "absolute ",
        zIndex: 2,
        backgroundColor: "#957223",
        width: 125,
        height: 18,
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
    height: 320,
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

function ScheduleCard({ title, items, src }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <CardTitle>{title}</CardTitle>
      <Card classes={{ root: classes.root }}>
        <CardHeader
          classes={{ root: classes.header }}
          style={{ backgroundImage: `url('${src}')` }}
        />
        <Box component="div" overflow="hidden" style={{ height: 185 }}>
          {items &&
            items.map((item, index) => {
              return <CardLine item={item} key={index}></CardLine>;
            })}
        </Box>
        <IconButton
          aria-label="share"
          style={{ width: "100%", height: 5 }}
          onClick={() => setOpen(true)}
        >
          <MoreHorizIcon />
        </IconButton>
      </Card>
      <ScheduleCardModal
        open={open}
        setOpen={setOpen}
        title={title}
        items={items}
        src={src}
      ></ScheduleCardModal>
    </div>
  );
}

export default ScheduleCard;
