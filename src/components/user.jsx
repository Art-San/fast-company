import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import api from '../api';


let Users = () => {
    // console.log(api.users.fetchAll());
   let allUsers = api.users.fetchAll()

   return (
      <>
      <Container className="mt-3">
      User Table
      <pre>{JSON.stringify(allUsers)}</pre>
          <Row>
              <Col>
              <h3 className='text-primary'>12 человек тусанет с тобой сегодня</h3>
              </Col>
          </Row>
          <Row>
              <Col>
                  <Table striped bordered hover className="shadow-lg">
                     <thead>
                          <tr>
                              
                              <th>Имя</th>
                              <th>Качества</th>
                              <th>Првфесия</th>
                              <th>Встреч</th>
                              <th>Оценка</th>
                              <th>Кнопка</th>
                          </tr>
                     </thead>
                     <tbody>
                        {
                          allUsers.length > 0 &&
                          allUsers.map(user => {
                              return (
                                  <tr key={user._id}>
                                      
                                      <td>{user.name}</td>
                                      <td>{user.qualities._name}</td>
                                      <td>{user.profession.name}</td>
                                      <td>{user.completedMeetings}</td>
                                      <td>{user.rate}</td>
                                      
                                  </tr>
                              )
                          })
                        }
                     </tbody>
                      
                  </Table>
              </Col>
          </Row>
      </Container>
      
  </>
  )
   
};






export default Users;