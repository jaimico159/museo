import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import { urls, banner_image_url } from "../../constants/constants";

function Banner() {
  return (
    <Fragment>
      <Carousel interval={3000} controls={false}>
        {/* {urls.map(function (item, index) {
          return ( */}
        <Carousel.Item>
          <img
            //className="d-block w-100"
            src={banner_image_url}
            alt="First slide"
            width="100%"
          />
          {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
        </Carousel.Item>
        {/* );
        })} */}
      </Carousel>
    </Fragment>
  );
}

export default Banner;
