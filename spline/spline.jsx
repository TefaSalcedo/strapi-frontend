import React from "react";
import Form from "./form.jsx";
import Robot from "./robot.jsx";
import "./spline.scss";

const Spline = () => {
  return (
    <div className="container-form">
      <div className="robot-background">
        <Robot />
      </div>
      <div className="form-overlay">
        <Form />
      </div>
    </div>
  );
};

export default Spline;
