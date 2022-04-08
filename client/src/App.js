import React, { useEffect, useState, useContext, createContext } from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/index";
import UserContext from "./utils/Context/Context.js";
import Axios from "axios";

function App() {
  const { logged, setLogged } = useContext(UserContext);

  useEffect(() => {
    Axios.get(`http://localhost:3001/verify`, { withCredentials: true }).then(
      (res) => {
        if (res.status === 200) {
          setLogged(true);
        }
        return;
      }
    );
  }, []);

  return (
    <>
      <Header />
      <Outlet className="all" />
    </>
  );
}

export default App;
