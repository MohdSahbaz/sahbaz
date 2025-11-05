import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // ✅ Auto-optimized configuration
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: isMobile ? 30 : 60,
      particles: {
        color: { value: ["#00FFFF", "#A855F7", "#FF00FF"] },
        links: {
          color: "#00FFFF",
          distance: isMobile ? 80 : 150,
          enable: true,
          opacity: isMobile ? 0.15 : 0.25,
          width: isMobile ? 0.5 : 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: isMobile ? 0.4 : 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: isMobile ? 25 : 80,
        },
        opacity: { value: isMobile ? 0.3 : 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: isMobile ? 2 : 3 } },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="particle-container"
      options={options}
    />
  );
};

export default ParticlesBackground;
