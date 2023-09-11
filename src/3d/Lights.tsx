//create a component that has ambient light, directional light, and point light

import { useControls } from "leva";
export default function Lights() {
  const {
    ambientLight,
    directionalLight,
    pointLight,
    pll,
    dll,
    dlshadow,
    plshadow,
  } = useControls({
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
    plshadow: {
      value: false,
    },
    dlshadow: {
      value: false,
    },
  });

  return (
    <>
      <ambientLight intensity={ambientLight} />
      <directionalLight
        position={[dll.x, dll.y, dll.z]}
        intensity={directionalLight}
        castShadow={dlshadow}
        shadow-mapSize={[4096, 4096]}
        shadow-bias={-0.00001}
      >
        <orthographicCamera
          attach={"shadow-camera"}
          args={[-200, 200, 200, -200]}
        />
      </directionalLight>
      <pointLight
        position={[pll.x, pll.y, pll.z]}
        intensity={pointLight}
        castShadow={plshadow}
        shadow-mapSize={[512, 512]}
        shadow-bias={-0.00001}
      />
    </>
  );
}
