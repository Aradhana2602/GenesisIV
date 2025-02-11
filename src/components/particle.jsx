import React from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Corrected import
import "./Particle.css";

const Particle = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Use loadSlim instead of loadFull
  };

  return (
    <Particles
      id="particles-js"
      init={particlesInit}
      options={{
        background: { color: "#000" },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { speed: 2 },
          links: { enable: true, opacity: 0.5, color: "#ffffff" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
      }}
    />
  );
};

export default Particle;
