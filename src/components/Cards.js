import React from "react";
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Najnowsza oferta</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/Beren.jpg'
                            text='TEEEEEEMP'
                            label='DRAGON'
                            path='/items'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards