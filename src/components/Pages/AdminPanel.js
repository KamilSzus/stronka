import Table from 'react-bootstrap/Table'
import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

function AdminPanel() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/users/getAllUser`
        )
            .then(res => res.json())
            .then((result) => {
                    setUsers(result);
                }
            )
    }, [])

    function checkStatus() {
        if (window.loginState !== "ADMIN") {
            return <Navigate to="/"/>
        }
    }

    function deleteRow(email) {
        console.log(email)
        fetch(`http://localhost:8080/users/deleteUser/${email}`,
            {method: 'DELETE'})
            .then(() => this.setState({status: 'Delete successful'}));
        setUsers(users.filter(item => item.email !== email));
    }

    return (
        <>
            {checkStatus()}
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>UserType</th>
                    <th>Action</th>
                </tr>
                </thead>
                {users.map((object) => {
                    return (
                        <tbody>
                        <tr>
                            <td>{object.id}</td>
                            <td>{object.email}</td>
                            <td>{object.name}</td>
                            <td>{object.role}</td>
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
        </>

    )
}

export default AdminPanel