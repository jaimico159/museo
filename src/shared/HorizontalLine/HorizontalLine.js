import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: (props) => ({
    background: props.color,
    width: props.width,
    marginLeft: props.marLeft,
    marginRight: props.marRight,
  }),
});

function HorizontalLine({ width, color, marLeft, marRight }) {
  const props = {
    width: width || 40,
    color: color || "white",
    marLeft: marLeft || 0,
    marRight: marRight || 0,
  };
  const classes = useStyles(props);
  return <Divider classes={{ root: classes.root }} />;
}

export default HorizontalLine;
