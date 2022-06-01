import '../../App.css'
import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";

let price = 0;

class Cart extends React.Component {


    getBooksFromDataBase = () => {
        return new Promise(resolve => {
            let cartDownload = []
            window.cartArray.forEach((element) => {
                console.log(element)
                fetch(`http://localhost:8080/items/books/${element}`)
                    .then(res => res.json())
                    .then((result) => {
                        debugger
                        cartDownload.push(result[0])
                    })
            })
            resolve(cartDownload)
        })
    }


    constructor(props) {
        super(props);
        price = 0;
        this.getBooksFromDataBase().then(result => window.cart = result)
    }


    render() {

        function calPrice() {
            window.cart.map((object) => {
                price += object.price
            });
            return Math.round(price * 100) / 100;
        }

        function buyBooks() {
            window.cartArray = []
        }

        function deleteRow(book) {
            window.cartArray = window.cartArray.filter(item => item !== book);
        }
debugger
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
                            debugger
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