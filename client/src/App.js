import React, { useEffect,useState } from 'react'
import './App.scss';
import {Outlet } from "react-router-dom";

import Header from './components/Header/index'


function App() {


  return(
    <>
  <Header/>
  <Outlet className="all"/>
  </>
  );
}
  

export default App;
