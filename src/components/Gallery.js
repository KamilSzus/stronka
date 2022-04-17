import React, {useEffect, useState} from 'react'
import "./Gallery.css"
import {Box, Card, CardActionArea, CardContent, Typography} from "@material-ui/core";

function GalleryImage(props) {

    const[books,setBooks]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/items/getAllBooks")
            .then(res=>res.json())
            .then((result)=>{
                    setBooks(result);
                }
            )
    },[])

    return (books.map((object) => (
            <Card className="card" variant="outlined">
                <CardActionArea
                    href={''}
                    target="_blank">
                    <Box
                        p={1}
                        style={{
                            height: 250,
                            textAlign: 'center'
                        }}>
                        <img
                            src={object.cover}
                            className="media"
                            alt={'coo'}/>
                    </Box>
                    <CardContent className="content">
                        <Typography
                            variant="body1"
                            color="textPrimary"
                            gutterBottom
                            style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical'
                            }}>
                            {object.title}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {object.price} zł
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    ))
}
export default GalleryImage;