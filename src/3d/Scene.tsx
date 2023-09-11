import {
  CameraControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import Ejder3 from "./Ejder3";
import { useControls } from "leva";
import { useRef } from "react";

export default function Scene() {
  const { isOrto: isOrtho } = useControls({
    isOrto: {
      value: false,
    },
  });

  const camRef = useRef<CameraControls>(null);

  // const cam = useMemo(() => <CameraControls ref={camRef} />, [isOrtho]);

  return (
    <>
      <CameraControls ref={camRef} />
      <PerspectiveCamera
        makeDefault={isOrtho}
        position={[0, 0, 100]}
        zoom={50}
      />
      <OrthographicCamera
        makeDefault={isOrtho}
        position={[0, 0, 100]}
        zoom={50}
      />
      {/* {cam} */}
      <Ejder3 />
    </>
  );
}
