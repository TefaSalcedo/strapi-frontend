import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scroll-trigger.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerComponent() {
  const containerRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    // Animación de parallax para la imagen grande
    gsap.to(image, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    // Animación del texto que aparece al hacer scroll
    // gsap.fromTo(
    //   text,
    //   {
    //     y: 100,
    //     opacity: 0,
    //     scale: 0.8,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     scale: 1,
    //     duration: 1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: text,
    //       start: "top 80%",
    //       end: "bottom 20%",
    //       toggleActions: "play none none reverse",
    //     },
    //   }
    // );

    // Efecto de zoom en la imagen al hacer scroll
    gsap.fromTo(
      image,
      { scale: 1.2 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      }
    );

    // Limpieza
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-container">
      {/* Sección con imagen grande */}
      <div className="hero-section">
        <div className="image-container">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            alt="Imagen grande para scroll"
            className="hero-image"
          />
          <div className="hero-overlay">
            {/* <h1 className="hero-title">Scroll Parallax Effect</h1> */}
          </div>
        </div>
      </div>

      {/* Contenido que aparece al hacer scroll */}

      <div ref={textRef} className="content-section">
        <h2>Contenido con animación</h2>
        <p>
          Este contenido aparece con una animación suave cuando haces scroll
          hacia abajo.
        </p>
        <div className="feature-box">
          <h3>Características del scroll</h3>
          <ul>
            <li>✨ Efecto parallax en la imagen</li>
            <li>🎭 Animaciones suaves con GSAP</li>
            <li>📱 Responsive design</li>
            <li>⚡ Optimizado para rendimiento</li>
          </ul>
        </div>
      </div>

      {/* Más contenido para generar scroll */}

      
      <div className="additional-content">
        <div className="content-block">
          <h3>Sección adicional 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="content-block">
          <h3>Sección adicional 2</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="content-block">
          <h3>Sección adicional 3</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}
