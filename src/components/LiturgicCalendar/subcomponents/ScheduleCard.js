import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import Title from "../../../shared/Title";
import SimpleText from "../../../shared/SimpleText";
import { Box } from "@material-ui/core";

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
    height: 300,
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
    <div style={{ position: "relative" }}>
      <CardTitle>{title}</CardTitle>
      <Card classes={{ root: classes.root }}>
        <CardHeader classes={{ root: classes.header }} />
        <Box component="div" overflow="auto" style={{ height: 185 }}>
          {items &&
            items.map((item) => {
              return <CardLine item={item}></CardLine>;
            })}
        </Box>
      </Card>
    </div>
  );
}

export default ScheduleCard;
