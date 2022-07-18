//  Не смог доконца




import { Component } from 'react'
import { Table, Container, Row, Col } from "react-bootstrap"
import api from '../api'

let allUsers = api.users.fetchAll()

export default class App extends Component {
    state = {
    rows: allUsers
    
    
    }

    spliceRow = (index) => {
    this.state.rows.splice(index, 1)
    this.setState({ rows: this.state.rows })
    }



    render() {
        let message = allUsers.length === 2 || 
                      allUsers.length === 3 || 
                      allUsers.length === 4
                      ? 'человека' 
                      : 'человек'
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h3 className='text-primary'> {allUsers.length} {message} тусанет с тобой сегодня! </h3>
                    </Col>
                    </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover className="shadow-lg">
                            <thead>
                                <tr>
                                    <th>Имя</th>
                                    <th>Качества</th>
                                    <th>Провфессия</th>
                                    <th>Встретился, раз</th>
                                    <th>Оценка</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.rows.map((row, index) => {
                                return (
                                <tr key={row._id}>
                                        <td>{row.name}</td>
                                        <td>{row.qualities._name}</td>
                                        <td>{row.profession.name}</td>
                                        <td>{row.completedMeetings}</td>
                                        <td>{row.rate}</td>

                                        <td>
                                        <button 
                                            className="btn btn-danger btn-sm m-2" 
                                            onClick={() => this.spliceRow(index)}>
                                            DEL
                                        </button>
                                        </td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
    }
}   