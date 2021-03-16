import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
  },
});

function SimpleText({ color, children }) {
  const classes = useStyles();
  return (
    <Typography
      variant="body1"
      color={color || "initial"}
      classes={{ root: classes.root }}
    >
      {children}
    </Typography>
  );
}

export default SimpleText;
