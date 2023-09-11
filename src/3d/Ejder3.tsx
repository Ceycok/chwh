/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ejder3.glb -t -s -p 4 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import ejder from "./ejder3.glb";

type GLTFResult = GLTF & {
  nodes: {
    Mesh002: THREE.Mesh;
    Mesh002_1: THREE.Mesh;
    Mesh002_2: THREE.Mesh;
    Mesh002_3: THREE.Mesh;
    Mesh002_4: THREE.Mesh;
    Mesh002_5: THREE.Mesh;
    Mesh002_6: THREE.Mesh;
  };
  materials: {
    ["Material #25"]: THREE.MeshStandardMaterial;
    ["Material #27"]: THREE.MeshStandardMaterial;
    ["Material #26"]: THREE.MeshStandardMaterial;
    ["Material #31"]: THREE.MeshStandardMaterial;
    ["Material #29"]: THREE.MeshStandardMaterial;
    ["Material #30"]: THREE.MeshStandardMaterial;
    ["Material #28"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(ejder) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002.geometry}
        material={materials["Material #25"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002_1.geometry}
        material={materials["Material #27"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002_2.geometry}
        material={materials["Material #26"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002_3.geometry}
        material={materials["Material #31"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002_4.geometry}
        material={materials["Material #29"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002_5.geometry}
        material={materials["Material #30"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002_6.geometry}
        material={materials["Material #28"]}
      />
    </group>
  );
}

useGLTF.preload(ejder);