import { Canvas, extend, useFrame } from "@react-three/fiber";
//import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Box from "../Box";
//import test from "../../../assets/teste.jpg";
import { useRef, useState, useEffect } from "react";

extend({ OrbitControls });

const MyMesh = ({
  render,
  color,
  metalness,
  roughness,
  clearcoatRoughness,
}) => {
  const mesh = useRef();

  const configWhiteBox = {
    color,
    metalness,
    roughness,
    clearcoatRoughness,
  };

  useFrame(() => {
    // rotates the object
    mesh.current.rotation.y = mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={mesh} receiveShadow castShadow position={[0, -1, 0]}>
      {render && <Box {...configWhiteBox} />}
    </mesh>
  );
};

const Boxes = ({ x, color, metalness, roughness, clearcoatRoughness }) => {
  const [render, setRender] = useState(true);
  const configMesh = {
    render,
    color,
    metalness,
    roughness,
    clearcoatRoughness,
  };

  // useEffect(() => {
  //   if (x === 0 || x === -100) {
  //     setTimeout(() => {
  //       setRender(false);
  //     }, 1000);
  //   }
  //   if (x === -200) {
  //     setRender(true);
  //   }
  // }, [x]);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [30, 70, 400], fov: 1.5 }}>
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[0, 50, 200]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <spotLight
        position={[10, 0, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <MyMesh {...configMesh} />
    </Canvas>
  );
};
export default Boxes;

/* <meshStandardMaterial map={colorMap} />
			<sphereGeometry args={[1, 32, 32]} />
const colorMap = useLoader(TextureLoader, test); */
