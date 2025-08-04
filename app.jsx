import React from "react";
import Strapi from "./strapi/strapi.jsx";
import "./app.scss";
import AppGsap from "./GSAP/Cp-Gsap.jsx";
import ScrollTriggerComponent from "./GSAP/scroll-trigger.jsx";
import Spline from "./spline/spline.jsx";

function App() {
  return (
    <div className="app">
      {console.log("App component loaded")}
      {/* <Strapi /> */}
      {/* <AppGsap /> */}
      <ScrollTriggerComponent />

      <Spline />
    </div>
  );
}

export default App;
