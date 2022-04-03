import React from 'react'
import "./Gallery.css"
import {Box, Card, CardActionArea, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";

function GalleryImage(props) {
    return ((
            <div>
                <Grid container columns={{xs: 4, md: 12}}>
                    <Card className="card" variant="outlined" square>
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
                                    src={props.src}
                                    className="media"
                                    alt={'ff'}/>
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
                </Grid>
            </div>
        )
    )
}
export default GalleryImage;

//props.items &&
//props.items.length > 0 &&
//props.items.map((item) =>