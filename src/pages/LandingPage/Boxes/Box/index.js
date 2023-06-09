import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
//import { useLoader } from "@react-three/fiber";
//import { TextureLoader } from "three/src/loaders/TextureLoader";
//import test from "./teste.jpg";

export default function Box({
  color,
  metalness,
  roughness,
  clearcoatRoughness,
  ...props
}) {
  const group = useRef();
  const { nodes } = useGLTF("/whiteBox.glb");
  //const colorMap = useLoader(TextureLoader, test);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["Part_Studio_1_-_Part_1_(8)"].geometry}
      >
        <meshPhysicalMaterial
          //map={colorMap}
          color={color}
          clearcoat='1.0'
          metalness={metalness}
          clearcoatRoughness={clearcoatRoughness}
          roughness={roughness}
          envMaps='reflection'
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/whiteBox.glb");
