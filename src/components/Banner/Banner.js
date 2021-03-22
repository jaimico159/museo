import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import { banner_image_url } from "../../constants/constants";

function Banner() {
  return (
    <Fragment>
      <Carousel interval={3000} controls={false}>
        <Carousel.Item>
          <img
            //className="d-block w-100"
            src={banner_image_url}
            alt="First slide"
            width="100%"
          />
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default Banner;
