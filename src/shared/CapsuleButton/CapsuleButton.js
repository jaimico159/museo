import { Button } from "@material-ui/core";
import { Fragment } from "react";

const buttonStyle = {
  backgroundColor: "#c49000",
  color: "white",
  borderRadius: 25,
  height: 50,
  width: 500,
  fontSize: 12,
};

function CapsuleButton({ children, href, target }) {
  return (
    <Button
      variant="contained"
      color="primary"
      style={buttonStyle}
      href={href}
      target={target}
    >
      {children}
    </Button>
  );
}

export default CapsuleButton;
