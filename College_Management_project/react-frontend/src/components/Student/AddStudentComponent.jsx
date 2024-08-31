import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import StudentService from '../../services/StudentService';
import Header from '../Navbar/Header';
import './AddStudentComponent.css'

export default function AddStudentComponent() {

    const params = useParams()
    const history = useHistory();

    useEffect(() => {
        if (params.id === "_add") {
            return;
        }
        else {
            getStudentById();
        }
    }, [])

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNo,setPhoneNo] = useState('')
    const [address, setAddress] = useState('')

    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value)
    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value)
    }

    const changePhoneNoHandler = (event) => {
        setPhoneNo(event.target.value)
    }
    const changeAddressHandler = (event) => {
        setAddress(event.target.value)
    }

    const getStudentById = () => {
        StudentService.getStudentById(params.id)
            .then(res => {
                let std = res.data;
                setFirstName(std.firstName);
                setLastName(std.lastName);
                setPhoneNo(std.phoneNo);
                setAddress(std.address);
            })
    };

    const saveHandler = (e) => {
        e.preventDefault();
        let std = { firstName: firstName, lastName: lastName, phoneNo: phoneNo, address: address };

        if (params.id === "_add") {
            StudentService.addStudent(std)
                .then(res => {
                    history.push('/Student');
                })
        }
        else {
            StudentService.updateStudent(std, params.id)
                .then(res => {
                    history.push('/Student');
                })
        }
    }

    const cancelHandler = () => {
        history.push('/Student');
    }

    const getTitle = () => {
        if (params.id === "_add") {
            return <h3 className="text-center">Add Student</h3>
        }
        else {
           return <h3 className="text-center">Update Student</h3>
        }
    }

    return (
        <div className='AddStudentComponent1'>
            <Header/>
            <br/>
        <div>
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
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone No: </label>
                                    <input
                                        placeholder="PhoneNo"
                                        name="phoneNo"
                                        className="form-control"
                                        value={phoneNo}
                                        onChange={changePhoneNoHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address: </label>
                                    <input
                                        placeholder="Address"
                                        name="address"
                                        className="form-control"
                                        value={address}
                                        onChange={changeAddressHandler}
                                    />
                                </div>
                                <br />
                                <button className="btn btn-success"
                                    onClick={saveHandler}>Save</button>
                                <button className="btn btn-danger"
                                    onClick={cancelHandler}
                                    style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
