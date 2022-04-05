import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import Axios from 'axios';
import './register.scss';
import {useForm} from 'react-hook-form';
const Register = ()=> {
  const[state,setState] = useState();
 
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
      Axios.post('http://localhost:3001/create',data).then(res=>{
          console.log(res.data)

       setState(res.data.result)
       if(res.data.result === "good"){
 navigate("/login")
       }
    })
    
    };
  




    return(
    <div className="container">
  <div className="login">
      <h1>Register</h1>
      <form  onSubmit={handleSubmit(onSubmit)}className="loginSection">
        <p>Name:</p>
        <input {...register("name")}  type="text" />
        <br/>
        <p>Email:</p>
        <input {...register("email")} type="text" />
        <br/>
        <p>Pass:</p>
        <input {...register("pass")}  type="text" />
    
     
      <button type="submit">Register</button>
      </form>
<p>{state}</p>
    </div>
  </div>);



}
export default Register;