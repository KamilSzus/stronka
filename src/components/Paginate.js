import ReactPaginate from "react-paginate";
import React, {useEffect, useState} from "react";
import {Box, ButtonBase, Card, CardActionArea, CardContent, Grid, Typography} from "@material-ui/core";
import "./Gallery.css"

function Paginate() {

    const [items, setItems] = useState([]);

    const [pageCount, setPageCount] = useState(0);

    let itemsNumber = 18;

    useEffect(() => {
        fetch(`http://localhost:8080/items/books/pageNumber1/NumberOfItems${itemsNumber}`
        )
            .then(res => res.json())
            .then((result) => {
                    setItems(result);
                }
            )
    }, [])

    const fetchComments = async (pageNumber) => {
        const res = await fetch(
            `http://localhost:8080/items/books/pageNumber${pageNumber}/NumberOfItems${itemsNumber}`
        );
        return await res.json();
    };

    const handlePageClick = async (data) => {
        let pageNumber = data.selected + 1;
        const commentsFormServer = await fetchComments(pageNumber);
        setItems(commentsFormServer);
    };
    return (
        <div>
            <Grid container columns={{xs: 4, md: 12}}>
                {items.map((object) => {
                    return (
                        <Card className="card" variant="outlined">
                            <ButtonBase
                                onClick={() => {console.log(object.title)}}
                            >
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
                            </ButtonBase>
                        </Card>
                );
                })}
            </Grid>
            <ReactPaginate
                pageCount={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                nextClassName={'page-item'}
                activeClassName={'active'}
            />
        </div>
    )
}

export default Paginate