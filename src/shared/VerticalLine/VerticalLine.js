import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: (props) => ({
    background: props.color,
    height: props.height,
  }),
});

function VerticalLine({ height, color }) {
  const props = { height: height || 40, color: color || "white" };
  const classes = useStyles(props);
  return <Divider orientation="vertical" classes={{ root: classes.root }} />;
}

export default VerticalLine;
