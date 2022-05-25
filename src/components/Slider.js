import SimpleImageSlider from "react-simple-image-slider";
import React from "react";
import "./Slider.css";

const images = [
    {url: "images/KrewElfów.jpg"},
    {url: "images/MalowanyCzłowiek.jpg"},
    {url: "images/Ogrody.jpg"},
];

function onClick() {

}

const Slider = () => {

    return (
        <div>
            <div className='Slider'>
                <h1>Polecane produkcje</h1>
                <div className='sliderContainer'>
                    <div className='sliderWrapper'>
                        <SimpleImageSlider
                            width={600}
                            height={400}
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