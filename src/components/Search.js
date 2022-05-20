import React, {useEffect, useState} from "react";
import "./Search.css"
import {Box, Card, CardActionArea, CardContent, Typography} from "@material-ui/core";

function List(props) {
    const[books,setBooks]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/items/getAllBooks")
            .then(res=>res.json())
            .then((result)=>{
                    setBooks(result);
                }
            )
    },[])
    const filteredData = books.filter((el) => {
        if (props.input === '') {
        } else {
            return el.title.toLowerCase().includes(props.input)
        }
    })
    return(
        <div className="searchList">
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
                                src={item.cover}
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