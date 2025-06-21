
import Particles from "react-tsparticles";
export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "#ffffff" },
        particles: {
          color: { value: "#000000" },
          move: { enable: true, speed: 0.3 },
          size: { value: 2 },
          number: { value: 60 },
          opacity: { value: 0.2 }
        }
      }}
    />
  )
}
