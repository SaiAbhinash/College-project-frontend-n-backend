import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import StudentService from '../../services/StudentService';
import Header from '../Navbar/Header';


export default function Student_main() {

    const [Students, setStudents] = useState([])

    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = () => {
        StudentService.getAllStudents()
            .then((res) => {
                setStudents(res.data)
                console.log(res.data)
            });
       
    };

    const editStudent = (id) => {
        history.push(`/add-student/${id}`);
    }

    const deleteStudent = (id) => {
        StudentService.deleteStudent(id)
            .then(res => {
                setStudents(Students.filter(std => std.id !== id))
            })
    }

    const viewStudent = (id) => {
        history.push(`/view-student/${id}`)
    }

    const history = useHistory();
    const handleClick = () => history.push('/add-student/_add');

    return (
        <div>
            <Header/>
        <div className="container">
            <h1 className="text-center">Student List</h1>

            <div className="row">
                <button style={{ width: 150 }} className="btn btn-primary" onClick={handleClick}>Add Student</button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone No</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Students.map((std) =>
                            <tr key={std.id}>
                                <td>{std.id}</td>
                                <td>{std.firstName}</td>
                                <td>{std.lastName}</td>
                                <td>{std.phoneNo}</td>
                                <td>{std.address}</td>
                                <td>
                                    <button onClick={() => editStudent(std.id)}
                                        className="btn btn-info"> Update </button>
                                    <button style={{marginLeft: "10px" }} onClick={() => deleteStudent(std.id)}
                                        className="btn btn-danger"> Delete </button>
                                    <button style={{marginLeft: "10px", width:"140px" }} onClick={() => viewStudent(std.id)}
                                        className="btn btn-info"> View Details </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}