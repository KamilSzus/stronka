import SimpleImageSlider from "react-simple-image-slider";
import React from "react";
import "./Slider.css";

const images = [
    { url: "images/img-1.jpg" },
    { url: "images/img-3.jpg" },
    { url: "images/img-2.jpg" },
];

function onClick() {

}
const Slider = () => {

    return (
        <div>
            <div className='Slider'>
                    <h1>Epic Adventure</h1>
                <div className='sliderContainer'>
                    <div className='sliderWrapper'>
                            <SimpleImageSlider
                                width={896}
                                height={504}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                                autoPlay={true}
                                onClick={onClick}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;