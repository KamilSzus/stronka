import React, {useState} from 'react';
import 'react-slideshow-image/dist/styles.css'
import GalleryImage from "../Gallery";
import {Grid, TextField} from "@material-ui/core";
import List from "../Search";
import Data from "../ListData.json"
import ReactPaginate from "react-paginate";
import Paginate from "../Paginate";
    function Items() {

        const [inputText, setInputText] = useState("");
        let inputHandler = (e) => {
            //convert input text to lower case
            const lowerCase = e.target.value.toLowerCase();
            setInputText(lowerCase);
        };
        return (
            <>
                <div>
                        <h1>React Search</h1>
                        <div className="search">
                            <TextField
                                id="outlined-basic"
                                onChange={inputHandler}
                                variant="outlined"
                                fullWidth
                                label="Search"
                            />
                            <List input={inputText} myArray={Data}/>
                        </div>
                    <Grid container columns={{xs: 4, md: 12}}>
                        <GalleryImage input={inputText} myArray={Data}/>
                    </Grid>
                </div>
                <Paginate/>
            </>
        )
    }

export default Items;