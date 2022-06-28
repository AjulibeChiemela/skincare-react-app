import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavStyle.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const showMenuHandler = () => {
    setToggle(!toggle);
  };

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <div className="navig-div">
      <Link to="" className="logo">
        Jules'<span>.store</span>
      </Link>
      <nav className={toggle ? "nav-show" : "nav-hide"}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Services
            </NavLink>
          </li>
        </ul>
        <button className="btn" onClick={loginHandler}>
          LOGIN
        </button>
      </nav>

      <svg
        viewBox="0 0 100 80"
        width="40"
        height="40"
        onClick={showMenuHandler}
      >
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </div>
  );
};

export default Navbar;
