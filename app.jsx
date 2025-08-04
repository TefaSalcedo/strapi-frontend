import React from "react";
// import Strapi from "./strapi/strapi.jsx";
import "./app.scss";
// import AppGsap from "./GSAP/Cp-Gsap.jsx";
// import ScrollTriggerComponent from "./GSAP/scroll-trigger.jsx";
import Spline from "./spline/spline.jsx";
import AnnouncementBar from "./components/marketing-banner/marketing-banner.jsx";
import Navbar from "./components/navbar/navbar.jsx";

function App() {
  return (
    <div className="app">
      
      <AnnouncementBar />
      <Navbar />
      {console.log("App component loaded")}
      
      {/* Sección con ScrollSmoother */}
      {/* <div className="smooth-scroll-section">
        <ScrollTriggerComponent />
      </div> */}

      {/* Sección normal sin efectos */}
      <div className="normal-section">
        <Spline />
      </div>

    </div>
  );
}

export default App;