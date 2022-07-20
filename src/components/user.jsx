//  Не смог доконца


import React, {useState} from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import api from '../api';
// let allUsers = api.users.fetchAll();


let UserTable = () => {
    
    const [table, setTable] = useState (api.users.fetchAll());

    let handleDelete = (id) => {
        console.log('handle delete', id);
        let newListUsers = table.filter(u => u._id !== id);
        console.log('newListUsers', newListUsers);
        setTable(newListUsers)
    };

    let message = table.length === 2 || 
                      table.length === 3 || 
                      table.length === 4
                      ? 'человека тусанут' 
                      : 'человек тусанет'


    return (
        <>
        <Container className="mt-3">
                <Row>
                    <Col>
                        <h3 className='text-primary'> {table.length} {message} с тобой сегодня </h3>
                    </Col>
                </Row>
            <Table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Првфесия</th>
                        <th scope="col">Встреч</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Кнопка</th>
                    </tr>

                </thead>
                <tbody>
                    {
                    table.map(user => {
                        return (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.qualities._name}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}</td>
                                <td><button 
                                    className="btn btn-danger btn-sm m-2" 
                                    onClick={() => handleDelete(user._id)}
                                    >
                                        Delete
                                    </button></td> 
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </Container>
        </>
    )
};


export default UserTable;
