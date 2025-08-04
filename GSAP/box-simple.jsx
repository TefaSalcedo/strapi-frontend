import React from 'react';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from "react";
import gsap from "gsap";
// import "./box-simple.scss";

 export default function BoxSimple() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { x: 200, duration: 1 });
  }, []);

  return (
    <div ref={boxRef} className="box-simple">HI</div>
  );
}

