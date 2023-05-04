import React from "react";
import { Carousel } from "antd";

const ImageCarousel = () => {
  return (
    <Carousel autoplay autoplaySpeed={8000} className="carousel">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/bg_1.jpg`}
          alt="Promotional 1"
          style={{
            width: "100vw",
            height: "calc(100vh - 50px)",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/bg_2.jpeg`}
          alt="Promotional 2"
          style={{
            width: "100vw",
            height: "calc(100vh - 50px)",
            objectFit: "cover",
          }}
        />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
