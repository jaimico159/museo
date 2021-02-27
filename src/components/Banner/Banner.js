import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import { urls } from "../../constants/constants";

function Banner() {
  return (
    <Fragment>
      <Carousel interval={3000} controls={false}>
        {urls.map(function (item, index) {
          return (
            <Carousel.Item key={index}>
              <img
                //className="d-block w-100"
                src={item}
                alt="First slide"
                height="500px"
                width="100%"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Fragment>
  );
}

export default Banner;
