import '../../App.css'
import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {wait} from "@testing-library/user-event/dist/utils";

let price = 0;

function calPrice() {
    window.cart.map((object) => {
        price += object.price
    });
    return Math.round(price * 100) / 100;
}

function buyBooks() {
    window.cartArray = []
    window.location.reload(false);
}


function deleteRow(book) {
    window.cartArray = window.cartArray.filter(item => item !== book);
    this.forceUpdate();
}

class Cart extends React.Component {

    getBooksFromDataBase = () => {
        return new Promise(resolve => {
            let cartDownload = []
            window.cartArray.forEach((element) => {
                fetch(`http://localhost:8080/items/books/${element}`)
                    .then(res => res.json())
                    .then((result) => {
                        cartDownload.push(result[0])
                    })
            })
            resolve(cartDownload)
        })
    }

    constructor(props) {
        super(props);
        price = 0;
        this.state = {
            data: null
        };
        this.getBooksFromDataBase().then(result => window.cart = result)
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let cartDownload = []
        window.cartArray.forEach((element) => {
            fetch(`http://localhost:8080/items/books/${element}`)
                .then(res => res.json())
                .then((result) => {
                    cartDownload.push(result[0])
                    price = 0;
                    this.setState({
                        data: cartDownload
                    });
                })
        })
    }

    render() {
        if (!this.state.data) {
            return <div/>
        }
        return (
            <>
                <>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Icon</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        {window.cart.map((object) => {
                            return (
                                <tbody>
                                <tr>
                                    <td>{object.id}</td>
                                    <td>
                                        <img src={object.cover} width="100" height="100"/>
                                    </td>
                                    <td>{object.title}</td>
                                    <td>{object.price}</td>
                                    <td>
                                        <Button onClick={() => deleteRow(object.title)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                                </tbody>
                            )
                        })}
                    </Table>
                    <Table striped bordered hover variant="dark">
                        <tbody>
                        <tr>
                            <td>Cena całkowita: {calPrice()} zł</td>
                            <td>
                                <Button onClick={() => buyBooks()}>
                                    KUP
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </>
            </>
        )
    }
}

export default Cart;