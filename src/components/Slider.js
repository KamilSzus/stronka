import React from "react";
import "./Slider.css";
import {Carousel} from "react-bootstrap";

const Slider = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="sliderContainer"
                    src="images/KrewElfów.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="sliderContainer"
                    src="images/MalowanyCzłowiek.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="sliderContainer"
                    src="images/Ogrody.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;