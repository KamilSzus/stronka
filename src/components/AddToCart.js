import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";


function AddToCart() {
    const [itemCount, setItemCount] = React.useState(0);
    return (
        <div style={{ display: "block", padding: 30 }}>
            <div>
                <Badge color="secondary" badgeContent={itemCount}>
                    <ShoppingCartIcon />{" "}
                </Badge>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}
                    >
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        onClick={() => {
                            setItemCount(itemCount + 1);
                        }}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default AddToCart