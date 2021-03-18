import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    borderWidth: 2,
    "&:hover": {
      borderWidth: 2,
    },
  },
  outlined: {
    borderWidth: 2,
  },
  focusVisible: {
    borderWidth: 2,
  },
  label: {
    fontWeight: "bold",
  },
});

function SquareButton({ variant, colorVariant, children }) {
  const classes = useStyles();

  return (
    <Button
      variant={variant || "outlined"}
      color={colorVariant || "secondary"}
      classes={{
        root: classes.root,
        outlined: classes.outlined,
        focusVisible: classes.focusVisible,
        label: classes.label,
      }}
    >
      {children}
    </Button>
  );
}

export default SquareButton;
