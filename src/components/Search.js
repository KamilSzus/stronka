import React from "react";
import "./Search.css"
import data from "./ListData.json"
import {Box, Card, CardActionArea, CardContent, Typography} from "@material-ui/core";

function List(props) {
    const filteredData = props.myArray.filter((el) => {
        if (props.input === '') {
        } else {
            return el.title.toLowerCase().includes(props.input)
        }
    })
    return(
        <div className="test">
            {filteredData.map((item) => (
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
                                src={item.src}
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
                                {item.title}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                {item.price} zł
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    )
}

export default List