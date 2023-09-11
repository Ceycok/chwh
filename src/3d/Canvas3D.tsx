import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import Scene from "./Scene";
export default function Canvas3D() {
  return (
    <Canvas>
      <CameraControls />
      <Scene />
      <Lights />
    </Canvas>
  );
}
