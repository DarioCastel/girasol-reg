import React from "react";
import Table from "../components/Table";
import "./../css/login.scss";
import Avatar from "./../Img/avatar.jpg";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="login">
          <div className="avatar">
            <img src={Avatar} alt="avatar" />
          </div>
          <h2>Login</h2>
          <h3>Welcome</h3>
          <form className="login-form">
            <div className="textbox">
              <input type="email" placeholder="UserName" />
              <span className="material-symbols-outlined"><i class="fa-solid fa-user"></i></span>
            </div>
            <div className="textbox">
              <input type="password" placeholder="Password" />
              <span className="material-symbols-outlined"><i className="fa-solid fa-lock"></i></span>
            </div>
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
      <Table/>
    </>
  );
};

export default Login;
