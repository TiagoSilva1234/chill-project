import React, { useEffect,useState, useContext,createContext } from 'react'
import './App.scss';
import {Outlet } from "react-router-dom";
import Login from './components/Login'
import Header from './components/Header/index'
import UserContext  from './components/Context/Context.js'
import Register from './components/Register'
function App() {

const {logged, setLogged} = useContext(UserContext)
useEffect(()=> console.log(logged),[])

  return(
<>

  <Header/>
 <Outlet  className="all"/>


</>
  );
}
  

export default App;
