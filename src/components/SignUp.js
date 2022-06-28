import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="SignUp">
      <form method="post">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
        <br />
        <label for="firstname">Firstname</label>
        <input type="text" id="firstname" name="firstname" />
        <br />
        <label for="lastname">Lastname</label>
        <input type="text" id="lastname" name="lastname" />
        <br />
        <label for="phoneNumber">Phone Number</label>
        <input type="number" id="phoneNumber" name="phoneNumber" />
        <br />
        <label for="city">City</label>
        <input type="text" id="city" name="city" />
        <br />
        <label>Gender: </label>
        <label for="male">Male</label>
        <input type="radio" name="gender" id="male" value="male" />
        <label for="female">Female</label>
        <input type="radio" name="gender" id="female" value="female" />
        <br />
        <label for="dob">Date Of Birth</label>
        <input type="date" id="dob" name="dob" />
        <br />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <br />
        <label for="password2">Confirm Password</label>
        <input type="password" id="password2" name="password2" />
        <br />
        <button type="submit">SignUp</button>
        <p>
          Already have an account?<Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
