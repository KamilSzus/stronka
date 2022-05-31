import '../../App.css'
import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Cart() {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/items/books/pageNumber1/NumberOfItems${12}`
        )
            .then(res => res.json())
            .then((result) => {
                    setbooks(result);
                }
            )
    }, [])

    function deleteRow (email) {
        console.log(email)
        fetch(`http://localhost:8080/books/deleteUser/${email}`,
            {method: 'DELETE'})
            .then(() => this.setState({status: 'Delete successful'}));
        setbooks(books.filter(item => item.email !== email));
    }
return(
    <>
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Icon</th>
                    <th>Title</th>
                    <th>UserType</th>
                    <th>Price</th>
                </tr>
                </thead>
                {books.map((object) => {
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
                                <Button onClick={() => deleteRow(object.email)}>
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
                            <td>object.price</td>
                            <td>
                                <Button onClick={() => console.log("kupione")}>
                                    BUY
                                </Button>
                            </td>
                        </tr>
                        </tbody>
            </Table>
        </>
    </>
    )
}
export default Cart;