// components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Navbar.scss";

const navItems = [
  { name: "Soluciones de Monitoreo", href: "#home" },
  { name: "Soluciones de transporte", href: "#about" },
  { name: "Soporte", href: "#contact" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectorRef = useRef(null);
  const listItemRefs = useRef([]);

  useEffect(() => {
    const el = listItemRefs.current[activeIndex];
    if (el && selectorRef.current) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = el;

      gsap.to(selectorRef.current, {
        left: offsetLeft,
        top: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [activeIndex]);

  return (
    <nav className="navbar-mainbg">
      <ul className="navbar-nav" id="navbarSupportedContent">
        <div className="hori-selector" ref={selectorRef}>
          <div className="left"></div>
          <div className="right"></div>
        </div>
        {navItems.map((item, index) => (
          <li
            key={item.name}
            className={`nav-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            ref={(el) => (listItemRefs.current[index] = el)}
          >
            <a className="nav-link" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
