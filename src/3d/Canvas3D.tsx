import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import Scene from "./Scene";
export default function Canvas3D() {
  return (
    <Canvas shadows>
      <Scene />
      <Lights />
    </Canvas>
  );
}
