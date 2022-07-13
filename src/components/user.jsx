import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import api from '../api';

const Users = () => {
    console.log(api.users.fetchAll());
    return <>
    <Container className="mt-3">
    User Table
    {/* <pre>{JSON.stringify(state.users)}</pre> */}
        <Row>
            <Col>
            <h3 className='text-primary'>User list</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga libero voluptates hic vitae amet sapiente iste velit ab laborum perspiciatis, tenetur consequatur quas optio dolorum provident recusandae totam nulla beatae.</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table striped bordered hover className="shadow-lg text-center">
                   <thead>
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Company</th>
                            <th>Адрес</th>
                        </tr>
                   </thead>
                   <tbody>
                      {/* {
                        state.users.length > 0 && 
                        state.users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>{user.company.name}</td>
                                    <td>{user.address.city}</td>
                                    
                                </tr>
                            )
                        })
                      } */}
                   </tbody>
                    
                </Table>
            </Col>
        </Row>
    </Container>
    
</>
    
};

export default Users;