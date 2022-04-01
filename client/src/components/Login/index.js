import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import Axios from 'axios';
import './login.scss';
import {useForm} from 'react-hook-form';
const Login = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();

const login = {
  name: name,
  pass: pass
}
  const {register, handleSubmit} = useForm();
 const onSubmit = (data) =>{
   setName(data.name);
   setPass(data.pass);
   
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

/*    
   function handleclick(){
       const idk =  {
         name: name,
         email: email,
         pass: pass
     }
       Axios.post('http://localhost:3001/create',idk).then(res=>console.log(res.data))
       .then(res => {
         console.log(res);
       });
      }
      */
      
   
     
   
  function handleLogin() {

    Axios.get(`http://localhost:3001/login/${login.name}/${login.pass}`, login).then(res => {
      console.log(res.data);
      if(res.data.status === 200){
        navigate("/")
      }
  });

  }

  return (
    <div className="container">


      <div className="login">
        <h1>Login</h1>
        <form  onSubmit={handleSubmit(onSubmit)}className="loginSection">
          <p>Name:</p>
          <input {...register("name")} onChange={(e) => setName(e.target.value)} type="text" />
          <br/>
          <p>Pass:</p>
          <input {...register("pass")} onChange={(e) => setPass(e.target.value)} type="text" />
      
       
        <button type="submit" onClick={() => handleLogin()}>login</button>
        </form>
      </div>
    </div>);

}

export default Login;