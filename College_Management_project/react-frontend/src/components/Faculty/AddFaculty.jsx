import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import FacultyService from '../../services/FacultyService';
import './AddFaculty.css';
import Header from '../Navbar/Header';

function AddFaculty() {
    const params = useParams()
    const history = useHistory();

    useEffect(() => {
        if (params.id === "_add") {
            return;
        }
        else {
            getFacultyById();
        }
    }, [])

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value)
    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value)
    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value)
    }

    const getFacultyById = () => {
        FacultyService.getFacultyById(params.id)
            .then(res => {
                let facul = res.data;
                setFirstName(facul.firstName);
                setLastName(facul.lastName);
                setEmail(facul.email);
            })
    };

    const saveHandler = (e) => {
        e.preventDefault();
        let facul = { firstName: firstName, lastName: lastName, email: email };

        if (params.id === "_add") {
            FacultyService.addFaculty(facul)
                .then(res => {
                    history.push('/faculty');
                })
        }
        else {
            FacultyService.updateFaculty(facul, params.id)
                .then(res => {
                    history.push('/faculty');
                })
        }
    }

    const cancelHandler = () => {
        history.push('/faculty');
    }

    const getTitle = () => {
        if (params.id === "_add") {
            return <h3 className="text-center">Add Faculty</h3>
        }
        else {
           return <h3 className="text-center">Update Faculty</h3>
        }
    }
  return (
    <div className="hell">
       <Header/>
       <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={changeFirstNameHandler}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={changeLastNameHandler}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email: </label>
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={changeEmailHandler}
                                        required
                                    />
                                </div>
                                <br />
                                <button className="btn btn-success"
                                    onClick={saveHandler} style={{ marginLeft: "10px" }}>Save</button>
                                <button className="btn btn-danger"
                                    onClick={cancelHandler}
                                    style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddFaculty