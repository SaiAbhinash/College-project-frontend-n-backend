import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import FacultyService from '../../services/FacultyService'
import Header from '../Navbar/Header'
import './ViewFaculty.css';

function ViewFaculty() {
    const params = useParams()
    const history = useHistory()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        getFacultyById();
    }, [])

    const getFacultyById = () => {
        FacultyService.getFacultyById(params.id)
            .then(res => {
                let facul = res.data;
                setFirstName(facul.firstName);
                setLastName(facul.lastName);
                setEmail(facul.email);
                console.log('Faculty => ' + JSON.stringify(facul));
            })
    };

    const cancelHandler = () => {
        history.push('/faculty');
    }
  return (
    <div >
    <Header/>

<div className='view'>
        <br />
        <div className="card col-md-6 offset-md-3">
           <h4 className="text-center"> Faculty Details</h4>
            <div className="card-body">
                <div className="row">
                    <label>First Name: {firstName} </label>
                    
                </div>
                <div className="row">
                    <label>Last Name: {lastName}</label>
                    <div></div>
                </div>
                <div className="row">
                    <label>Email: {email}</label>
                    <div></div>
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

export default ViewFaculty