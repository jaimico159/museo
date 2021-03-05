import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: (props) => ({
    background: "white",
    height: props.height,
  }),
});

function VerticalLine({ height }) {
  const props = { height: height || 40 };
  const classes = useStyles(props);
  return <Divider orientation="vertical" classes={{ root: classes.root }} />;
}

export default VerticalLine;
