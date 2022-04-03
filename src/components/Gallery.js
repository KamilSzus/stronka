import React from 'react'
import "./Gallery.css"
import {Box, Card, CardActionArea, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";

export class GalleryImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            src: null,
            title: '',
            fullScreen: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(() => ({
            fullScreen: !this.state.fullScreen
        }))
        console.log('You clicked ' + this.state.title)
    }

    render() {
        return (
            <div>
                <Grid container columns={{ xs: 4, md: 12 }}>
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
                                src={this.props.src}
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
    }
}
export class GalleryView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            src: null,
            title: '',
            fullScreen: false
        }
        return (
            props.items &&
            props.items.length > 0 &&
            props.items.map((item) => (
                <Grid key={this.props.title} className="item" item>
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
                                    src={this.props.src}
                                    className="media"
                                    alt={item.title}
                                />
                            </Box>
                            <div className="details">
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
                                        {'item.price.currency'} {'item.price.value'}
                                    </Typography>
                                </CardContent>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))
        );
    }
}
