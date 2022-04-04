import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import GalleryImage from "../Gallery";
import {Grid} from "@material-ui/core";

const myArray = [
    {
        number: 9,
        title: 'Users',
        src: 'images/img-9.jpg',
    },
    {
        number: 8,
        title: 'Users',
        src: 'images/img-8.jpg',
    },
    {
        number: 7,
        title: 'Users',
        src: 'images/img-7.jpg',
    },
    {
        number: 6,
        title: 'Users',
        src: 'images/img-6.jpg',
    },
    {
        number: 9,
        title: 'Users',
        src: 'images/img-9.jpg',
    },
    {
        number: 8,
        title: 'Users',
        src: 'images/img-8.jpg',
    },
    {
        number: 7,
        title: 'Users',
        src: 'images/img-7.jpg',
    },
    {
        number: 6,
        title: 'Users',
        src: 'images/img-6.jpg',
    },
]

function Items() {
    return (
        <>
            <div>
                <Grid container columns={{xs: 4, md: 12}}>
                    <GalleryImage myArray={myArray}/>
                </Grid>
            </div>
        </>
    )
}

export default Items;