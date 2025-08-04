import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  gsap.to(boxRef.current, {
    scrollTrigger: {
      trigger: boxRef.current,
      start: "top center",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
    rotation: 360,
    scale: 2,
  });
}, []);
