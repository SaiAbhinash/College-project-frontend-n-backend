import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='hi'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  " style={{margin:0}}>
      <span className="m-2 navbar-brand text-white text-decoration-none">
          College Management
        </span>
       <Link to="/faculty" className="hello"> <span className="m-2 navbar-brand text-white hello" >
          Faculty
        </span></Link>
        <Link to="/Student" className="hello"><span className="m-2 navbar-brand text-white" >
          Student
        </span></Link>
      </nav>
    </div>
  )
}

export default Header
