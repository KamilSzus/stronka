import React from "react";
import {Link} from "react-router-dom";
import "./Cards.css"

function CardItem(props) {
    return(
        <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item_pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='Book Image'
                    className='cards__item__img'/>
                </figure>
            </Link>
        </li>
        </>
    );
}
export default CardItem;