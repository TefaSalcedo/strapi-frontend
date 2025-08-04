// components/AnnouncementBar.jsx
import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./marketing-banner.scss";

const AnnouncementBar = () => {
  const textRef = useRef();

  useEffect(() => {
    // Establecer posición inicial
    gsap.set(textRef.current, { x: "-30%" });
    
    // Animar desde -50% hasta +50%
    gsap.to(textRef.current, {
      x: "-100%",
      duration: 9,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="announcement-bar">
      <div className="announcement-bar__text" ref={textRef}>
        🚛 Activa 1 mes gratis de telemetría avanzada🚛
      </div>
    </div>
  );
};


export default AnnouncementBar;
