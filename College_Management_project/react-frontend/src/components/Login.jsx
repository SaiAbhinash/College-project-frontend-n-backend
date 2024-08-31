import React ,{useState} from 'react'
//import { useFormik } from "formik";
import {  useNavigate ,Switch, Route} from 'react-router-dom';
// import * as Yup from "yup"
 import {toast} from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import './login.css'

function Login() {
     const history = useHistory();
    //let navigator=useNavigate();


    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const saveDetails=()=>{
        let state = {
            userName : userName,
            password : password,
            
        }
       
        axios.get("http://localhost:8080/getLogin/"+ userName +"/"+password).then(res=>{if(res.data.userName===userName){
            //localStorage.setItem(res.data.userName,res.data.password);
            toast.success("welcome user");  
            history.push("/faculty");
            //navigator("/student");
        }
        else{
      toast.warning("user details not found");
      alert("user not found");
        }});
      
       //let json= JSON.stringify(state);
    //    console.log(state);
    //    axios.post("http://localhost:8080/adminLogin",state)
         
     }
     
    // const handleSubmit = async(e)=>{

    // }
    
    
    
  return (
    <div>
     <div className='loginmain-container'>
            <div className='login-container'>
            
                <div>
                    <h1 className="heading-login">Login</h1>
                     <label >UserName  &nbsp;&nbsp;</label>

                   <input id='userName'
                    name='username'
                    type={'Text'}
                    
                    placeholder='userName'
                    
                   onChange={(e)=>{setUserName(e.target.value)}}
                    required
                    />
                </div>
                <br/>
                <div>
                <label >Password  &nbsp;&nbsp;</label>
                
                    <input
                    id='password'
                    name='pass'
                    type={'password'}
                    placeholder='password'
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                    />
                </div>
                <br/>
               <div>
                    <input id='loginButton' type='submit' value="Login" onClick={saveDetails}/> 
                </div>
                {/* <br/>
                <p className='signup-text ' style={{textAlign:'center'}}>
                Are you new user? <span><a href='/signup'>Sign Up</a></span>
                </p> */}
               {/* <div className="signup-text">
                    <link to='/signup'>Are you new user? Signup{" "}</link>
                </div>  */}
                
                
                
            

       </div>
       </div>
    </div>
  )
}

export default Login
