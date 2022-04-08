import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../components/Home";

import App from "../../App";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import About from "../../components/About";
import { UserProvider } from "../Context/Context.js";

export const RoutesApp = () => {
  const [logged, setLogged] = useState(false);

  return (
    <>
      <UserProvider value={{ logged, setLogged }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};
