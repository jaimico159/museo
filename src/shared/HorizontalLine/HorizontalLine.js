import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: (props) => ({
    background: props.color,
    width: props.width,
  }),
});

function HorizontalLine({ width, color }) {
  const props = { width: width || 40, color: color || "white" };
  const classes = useStyles(props);
  return <Divider classes={{ root: classes.root }} />;
}

export default HorizontalLine;
