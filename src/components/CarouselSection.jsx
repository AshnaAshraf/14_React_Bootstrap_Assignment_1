import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselSection() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/backgroundimg.jpg"
          alt="HTML Slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Master HTML</h3>
          <p>Learn to structure the web with semantic HTML elements.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/backgroundimg1.jpg"
          alt="CSS Slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Style with CSS</h3>
          <p>Create stunning designs and responsive layouts.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/backgroundimg2.jpg"
          alt="JavaScript Slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Power Up with JavaScript</h3>
          <p>Make your websites dynamic and interactive.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
