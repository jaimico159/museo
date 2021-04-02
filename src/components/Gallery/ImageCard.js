import Image from "react-bootstrap/Image";
import React, { useState, Fragment } from "react";
import { colors } from "../../constants/constants";
import ImageCardModal from "./ImageCardModal";

function ImageCard({ src }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Image
        src={src}
        onClick={() => {
          setOpen(true);
        }}
        style={{
          height: 300,
          cursor: "pointer",
          padding: "8px 4px",
          backgroundColor: colors.CUSTOM_GRAY,
        }}
      ></Image>
      <ImageCardModal open={open} setOpen={setOpen} src={src}></ImageCardModal>
    </Fragment>
  );
}

export default ImageCard;
