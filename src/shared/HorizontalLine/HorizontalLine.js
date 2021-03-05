import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: (props) => ({
    background: "white",
    width: props.width,
  }),
});

function HorizontalLine({ width }) {
  const props = { width: width || 40 };
  const classes = useStyles(props);
  return <Divider classes={{ root: classes.root }} />;
}

export default HorizontalLine;
