import React from "react";
import { Link } from "react-router-dom";
import Forms from "./Forms";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <Forms>
      <form method="post" className="form-2">
        <div className="userName">
          <label for="username">Username</label>
          <br />
          <input type="text" id="username" name="username" />
        </div>
        <div className="names">
          <div className="firstName">
            <label for="firstname">Firstname</label>
            <br />
            <input type="text" id="firstname" name="firstname" />
          </div>

          <div>
            <label for="lastname">Lastname</label>
            <br />
            <input type="text" id="lastname" name="lastname" />
          </div>
        </div>
        <div>
          <label for="phoneNumber">Phone Number</label>
          <br />
          <input type="number" id="phoneNumber" name="phoneNumber" />
        </div>
        {/* <div>
          <label for="city">City</label>
          <br />
          <input type="text" id="city" name="city" />
        </div> */}
        <div className="choose-gender">
          <p>Gender: </p>
          <label for="male">Male</label>
          <input type="radio" name="gender" id="male" value="male" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="female" value="female" />
        </div>
        <div>
          <label for="dob">Date Of Birth</label>
          <br />
          <input type="date" id="dob" name="dob" />
        </div>
        <div>
          <label for="password">Password</label>
          <br />
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label for="password2">Confirm Password</label>
          <br />
          <input type="password" id="password2" name="password2" />
        </div>
        <button type="submit">SignUp</button>
        <p>
          Already have an account?<Link to="/Login">Login</Link>
        </p>
      </form>
    </Forms>
  );
};

export default SignUp;
