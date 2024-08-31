import React, { useState, useEffect } from 'react'
import FacultyService from '../../services/FacultyService';
import { useHistory } from 'react-router-dom';
import Header from '../Navbar/Header';
import './Faculty_main.css'

function Faculty_main() {
    const [Faculties, setFaculties] = useState([])

    useEffect(() => {
        getAllFaculties()
    }, [])

    const getAllFaculties = () => {
        FacultyService.getAllFaculties()
            .then((res) => {
                setFaculties(res.data)
                console.log(res.data)
            });
        
    };

    const editFaculty = (id) => {
        history.push(`/add-faculty/${id}`);
    }

    const deleteFaculty = (id) => {
        FacultyService.deleteFaculty(id)
            .then(res => {
                setFaculties(Faculties.filter(facul => facul.id !== id))
            })
    }

    const viewFaculty = (id) => {
        history.push(`/view-faculty/${id}`)
    }

    const history = useHistory();
    const handleClick = () => history.push('/add-faculty/_add');
  return (
    <div className="container1">
        <Header/>
       <div className="container">
            <h1 className="text-center">Faculty List</h1>

            <div className="row">
                <button style={{ width: 150 }} className="btn btn-primary" onClick={handleClick}>Add Faculty</button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Faculty Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Faculties.map((facul) =>
                            <tr key={facul.id}>
                                <td>{facul.id}</td>
                                <td>{facul.firstName}</td>
                                <td>{facul.lastName}</td>
                                <td>{facul.email}</td>
                                <td>
                                    <button onClick={() => editFaculty(facul.id)}
                                        className="btn btn-info"> Update </button>
                                    <button style={{marginLeft: "10px"}} onClick={() => deleteFaculty(facul.id)}
                                        className="btn btn-danger"> Delete </button>
                                    <button style={{marginLeft: "10px" , width:"140px"}} onClick={() => viewFaculty(facul.id)}
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

export default Faculty_main
