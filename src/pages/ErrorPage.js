import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Ooooops!!....page not found</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default ErrorPage;
