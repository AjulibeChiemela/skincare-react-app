import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login">
      <form method="post">
        <p>LOGIN</p>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail address"
          required
        />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">LOGIN</button>
        <p>
          Are you a new user?<Link to="/SignUp">SignUp</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
