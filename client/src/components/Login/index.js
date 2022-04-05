import React, { useState, useEffect,useContext } from 'react';
import {useNavigate} from "react-router-dom";
import Axios from 'axios';
import './login.scss';
import {useForm} from 'react-hook-form';
import UserContext  from '../../components/Context/Context.js'
const Login = () => {

  const[stat,setStat] = useState();

  const {register, handleSubmit} = useForm();

  const {logged, setLogged} = useContext(UserContext)
 const onSubmit = (data) =>{
  Axios.get(`http://localhost:3001/login/${data.name}/${data.pass}`, data).then(res => {
    console.log(res.data);
    if(res.data.status === 200){
      setLogged(true)
      navigate("/")
    
    }
    setStat("you dumb ")
});

 };
 const navigate = useNavigate();

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:3001/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data.message);
    });
  }, [])
     
 

  return (
    <div className="container">


      <div className="login">
        <h1>Login</h1>
        <form  onSubmit={handleSubmit(onSubmit)}className="loginSection">
          <p>Name:</p>
          <input {...register("name")}  type="text" />
          <br/>
          <p>Pass:</p>
          <input {...register("pass")}  type="text" />
      
       
        <button type="submit">login</button>
        </form>
        <p>{stat}</p>
      </div>
    </div>);

}

export default Login;