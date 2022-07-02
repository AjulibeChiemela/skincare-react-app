import React from "react";
import "./Forms.scss";

const Forms = (props) => {
  // const classes = ""
  return (
    <div className="form-bg">
      <div className="form-wrap">{props.children}</div>
    </div>
  );
};

export default Forms;
