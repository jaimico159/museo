import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
  },
  outlined: {
    borderWidth: 2,
  },
});

function SquareButton({ variant, colorVariant, children }) {
  const classes = useStyles();

  return (
    <Button
      variant={variant || "outlined"}
      color={colorVariant || "secondary"}
      classes={{ root: classes.root, outlined: classes.outlined }}
    >
      {children}
    </Button>
  );
}

export default SquareButton;
