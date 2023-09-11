//create a component that has ambient light, directional light, and point light

import { useControls } from "leva";

export default function Lights() {
  const { ambientLight, directionalLight, pointLight, pll, dll } = useControls({
    ambientLight: {
      value: 0.1,
      min: 0,
      max: 5,
    },
    directionalLight: {
      value: 0.1,
      min: 0,
      max: 20,
    },
    pointLight: {
      value: 0.1,
      min: 0,
      max: 50,
    },
    pll: {
      value: {
        x: 0,
        y: 0,
        z: 0,
      },
      step: 0.5,
    },
    dll: {
      value: {
        x: 0,
        y: 5,
        z: 0,
      },
      step: 0.5,
    },
  });

  return (
    <>
      <ambientLight intensity={ambientLight} />
      <directionalLight
        position={[dll.x, dll.y, dll.z]}
        intensity={directionalLight}
      />
      <pointLight position={[pll.x, pll.y, pll.z]} intensity={pointLight} />
    </>
  );
}
