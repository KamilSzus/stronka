import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import GalleryGrid, {GalleryImage} from "../Gallery";
function Items() {
    return(
        <>
            <GalleryGrid cols={4}>
                <GalleryImage src='images/img-9.jpg' title="1 Lorem ipsum dolor sit amet" />
                <GalleryImage src='images/img-9.jpg' title="2 Lorem ipsum dolor sit amet" />
                <GalleryImage src='images/img-9.jpg' title="2 Lorem ipsum dolor sit amet" />
                <GalleryImage src='images/img-9.jpg' title="2 Lorem ipsum dolor sit amet" />
                <GalleryImage src='images/img-9.jpg' title="2 Lorem ipsum dolor sit amet" />
                <GalleryImage src='images/img-9.jpg' title="2 Lorem ipsum dolor sit amet" />
                <GalleryImage src='images/img-9.jpg' title="2 Lorem ipsum dolor sit amet" />
                <GalleryImage src='images/img-9.jpg' title="2 Lorem ipsum dolor sit amet" />
            </GalleryGrid>

        </>
    )
}

export default Items;