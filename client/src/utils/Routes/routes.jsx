import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../../components/Home';
import Test from '../../components/test';
import App from "../../App";
import Login from '../../components/Login'
export const RoutesApp = ()=>{

     return(
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="test" element={<Test/>}/>
                <Route path="login" element={<Login/>}/>
            </Route>
          </Routes>
         
         </BrowserRouter>
     )
} 

