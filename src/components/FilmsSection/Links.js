import React, { useState } from "react";

const footerStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  leftLink: {
    display: "flex",
    justifyContent: "flex-start",
    flexGrow: 1,
  },
  rightLink: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
};

function Links() {
  return (
    <div style={footerStyles.container}>
      <div style={footerStyles.leftLink}>English</div>
      <div style={footerStyles.rightLink}>Español</div>
    </div>
  );
}

export default Links;
