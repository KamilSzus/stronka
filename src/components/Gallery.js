import React from 'react'
import "./Gallery.css"
import {Box, Card, CardActionArea, CardContent, Grid, Typography} from "@material-ui/core";

function GalleryImage(props) {
    return (props.myArray.map((object) => (

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
                            src={object.src}
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
                            {"item.title"}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {'item.price.currency'} {'item.price.value'}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    ))
}
export default GalleryImage;