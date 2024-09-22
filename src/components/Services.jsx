import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/Services.scss";

import image1 from "../assets/3.jpg";
import image2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel className=""
        infiniteLoop
        autoPlay={true}
        showIndicators={true}
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        interval={2000}
      >
        <div>
          <img src={image1} alt={"Image1"} />
        </div>
        <div>
          <img src={image2} alt={"Image2"} />
        </div>
      </Carousel>
    </div>
  )
}

export default Services