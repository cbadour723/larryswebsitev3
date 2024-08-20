import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="C:\Users\caleb\larryswebsitev3\public\assets\images\bbq.jpg" alt="Slide 1" />
            </div>
            <div>
                <img src="public/assets/images/wings.jpg" alt="Slide 2" />
            </div>
            <div>
                <img src="C:\Users\caleb\larryswebsitev3\public\assets\images\sandwhich.jpg" alt="Slide 3" />
            </div>
        </Slider>
    );
};

export default Slideshow;
