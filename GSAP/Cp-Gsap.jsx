import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import "./Cp-Gsap.css"

gsap.registerPlugin(useGSAP);

export default function AppGsap() {
    const container = useRef();

    useGSAP(() => {
        // Configuración inicial para habilitar 3D
        gsap.set('.box', {
            // transformPerspective: 1000,
            // transformStyle: 'preserve-3d'
        });

        // Animación 3D básica
        gsap.to('.box', {
            // rotationY: 360,
            // rotationX: 45,
            z: 100,
            // duration: 3,
            // repeat: -1,
            // yoyo: true,
            // ease: "power2.inOut"
        });

    }, { scope: container });

    return (
        <div ref={container} className="appGsap">
            <div className="box">Hello</div>
        </div>
    );
}
