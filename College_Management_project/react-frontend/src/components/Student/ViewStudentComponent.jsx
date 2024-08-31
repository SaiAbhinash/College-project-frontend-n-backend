import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import StudentService from '../../services/StudentService'
import Header from '../Navbar/Header'
import './ViewStudentComponent.css'

export default function ViewStudentComponent() {
    const params = useParams()
    const history = useHistory()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNo,setPhoneNo] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        getStudentById();
    }, [])
    const getStudentById = () => {
        StudentService.getStudentById(params.id)
            .then(res => {
                let std = res.data;
                setFirstName(std.firstName);
                setLastName(std.lastName);
                setPhoneNo(std.phoneNo);
                setAddress(std.address);
                console.log('Student => ' + JSON.stringify(std));
            })
    };

    const cancelHandler = () => {
        history.push('/Student');
    }

    return (
        <div className='ViewStudentComponent1'>
            <Header/>
        
        <div>
                <br />
                <div className="card col-md-6 offset-md-3">
                    <h4 className="text-center">Student Details</h4>
                    <div className="card-body">
                        <div className="row">
                            <label>First Name: {firstName}</label>
                        </div>
                        <div className="row">
                            <label>Last Name: {lastName}</label>
                        </div>
                        <div className="row">
                            <label>Phone No: {phoneNo}</label>
                        </div>
                        <div className="row">
                            <label>Address: {address}</label>
                        </div>
                        <br />
                        <button className="btn btn-danger"
                            onClick={cancelHandler}
                            style={{ marginLeft: "10px" }}>Cancel</button>
                    </div>
                </div>

        </div>
        </div>
    )
}
