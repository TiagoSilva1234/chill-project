import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';



const Home  = ()=>{
 /* 
   const [name,setName]= useState();
  const [pass,setPass] = useState();
  const [nameL,setNameL]= useState();
  const [passL,setPassL] = useState();
  useEffect(()=>{
    Axios({
      method: "GET",
      url: "http://localhost:3001/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data.message);
    });
  },[])

  
function handleclick(){
    const idk =  {
      name: name,
      pass: pass
  }
    Axios.post('http://localhost:3001/create',idk).then(res=>console.log(res.data))
    .then(res => {
      console.log(res);
    });
   

  }

  function handleLogin(){
    const idks =  {
      name: nameL,
      pass: passL
  }

    Axios.get(`http://localhost:3001/login/${nameL}/${passL}`,{name:nameL,pass:passL}).then(res => console.log(res.data));

  }

  return (
    <div className="App">
    <p>bruhh</p>
    <label>name</label>
    <input onChange={(e)=>setName(e.target.value) } type="text"/> 
    <br/>
    <label>pass</label>
    <input onChange={(e)=>setPass(e.target.value) } type="text"/>
    <br/>
    <button onClick={()=> handleclick()}>claudio</button>
<hr></hr>
 login:
 <br/>
 <label>name</label>
    <input onChange={(e)=>setNameL(e.target.value) } type="text"/> 
    <br/>
    <label>pass</label>
    <input onChange={(e)=>setPassL(e.target.value) } type="text"/>
    <br/>
    <button onClick={()=> handleLogin()}>login</button>


    </div>
  );*/

  return(<>
    <p>arroz</p>
  </>)
  

}

export default Home;