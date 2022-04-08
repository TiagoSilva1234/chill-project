import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./login.scss";
import { useForm } from "react-hook-form";
import UserContext from "../../utils/Context/Context.js";

import Cookies from "js-cookie";

const Login = () => {
  const [stat, setStat] = useState();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
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

  const onSubmit = (data) => {
    Axios.get(`http://localhost:3001/login/${data.name}/${data.pass}`, {
      withCredentials: true,
    }).then((res) => {
      console.log(res.data);
      console.log(Cookies.get("claudio"));

      if (res.data.status === 200) {
        setLogged(true);

        navigate("/");
      }
      setStat("you dumb ");
    });
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="loginSection">
          <p>Name:</p>
          <input {...register("name")} type="text" />
          <br />
          <p>Pass:</p>
          <input {...register("pass")} type="text" />

          <button type="submit">login</button>
        </form>
        <p>{stat}</p>
      </div>
    </div>
  );
};

export default Login;
