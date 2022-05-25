import Table from 'react-bootstrap/Table'
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";

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

    return (
        <>
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
                                <Button>
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