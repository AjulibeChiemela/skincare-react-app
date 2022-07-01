import React from "react";
import { Link } from "react-router-dom";
import Forms from "../components/Forms";
import "./Login.scss";
const Login = () => {
  return (
    <Forms>
      <form method="post" className="form-1">
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
    </Forms>
  );
};

export default Login;
