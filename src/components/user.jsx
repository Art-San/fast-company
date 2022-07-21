import React, {useState} from "react";
import { Container, Row, Table } from "react-bootstrap";
import api from '../api';
// let allUsers = api.users.fetchAll()




let UserTable = () => {
    
    const [table, setTable] = useState (api.users.fetchAll());

    let handleDelete = (id) => {
        console.log('handle delete', id);
        let newListUsers = table.filter(u => u._id !== id);
        console.log('newListUsers', newListUsers);
        setTable(newListUsers)
    };

    let message = 
            table.length === 2 || 
            table.length === 3 || 
            table.length === 4 
            ? 'человека тусанут' 
            : 'человек тусанет';

    // const message = () => {
    //     return table.length === 2 || 
    //     table.length === 3 || 
    //     table.length === 4 
    //     ? 'человека тусанут' 
    //     : 'человек тусанет';
    // };

    let header = 
            table.length === 0 
            ? <span className="badge bg-danger">Никто не тусанет с тобой</span> 
            : <span className="badge bg-primary">{table.length} {message} с тобой сегодня</span>;
    
    // const header = () => {
    //     return table.length === 0 
    //     ? <span className="badge bg-danger">Никто не тусанет с тобой</span> 
    //     : <span className="badge bg-primary">{table.length} {messag()} с тобой сегодня</span>;
    // };

    const renderTableHeader = () => {
        if(table.length===0) return ""
        return (
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Првфесия</th>
                <th scope="col">Встреч</th>
                <th scope="col">Оценка</th>
                <th scope="col">Кнопка</th>
            </tr>
        )
    };

    return (
        <>
        <Container className="mt-3">
                <Row>
                    <div>
                        <h1 className='text-primary'>{header}</h1>;
                    </div>
                </Row>
            <Table className="table">
                <thead>
                    {renderTableHeader()}

                </thead>
                <tbody>
                    {
            
                    table.map(user => {
                       
                        return (
                            <tr key={user._id}>
                                <td>{user.name}</td>

                                <td>{user.qualities.map(job => {
                                    return <span className={`badge bg-${job.color} m-1`} key={job._id}>{job.name}</span>;
                                    
                                })}</td>

                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate} /5</td>
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