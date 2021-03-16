import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: (props) => ({
    fontFamily: "MOD20",
    letterSpacing: props.space,
    marginBottom: props.marginBottom,
  }),
});

function Title({ color, variant, space, marginBottom, children }) {
  const props = {
    space: space || 0,
    marginBottom: marginBottom || 0,
  };
  const classes = useStyles(props);

  return (
    <Typography
      variant={variant || "h4"}
      color={color}
      classes={{ root: classes.root }}
    >
      {children}
    </Typography>
  );
}

export default Title;
