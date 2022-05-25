import React, {useState} from 'react';
import 'react-slideshow-image/dist/styles.css'
import {Grid, TextField} from "@material-ui/core";
import List from "../nieuzywane/Search";
import Data from "../ListData.json"
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
                        <h1>Sprawdz czy książka istnieje</h1>
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
                </div>
                <Paginate/>
            </>
        )
    }

export default Items;