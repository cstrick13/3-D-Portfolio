import React, { Suspense ,useState} from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,Html
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { technologies } from "../../constants";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [isHovered, setIsHovered] = useState(false);
  console.log('Name:', props.name); 
  console.log('isHovered:', isHovered);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} onPointerOver={() => setIsHovered(true)}
    onPointerOut={() => setIsHovered(false)}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
         {isHovered && (
        <Html position={[-1.2, 1, 0]}>
        <div
          className="
            bg-opacity-70
            bg-secondary
            p-3
            text-white
            text-base
            text-center
            border
            border-purple-500
            rounded-md
            justify-center
          "
        >
          {props.name}
        </div>
      </Html>
      )}
        </mesh>

    </Float>
  );
};

const BallCanvas = ({ icon,name }) => {
  console.log('Name passed to BallCanvas:', name);
  console.log('imgUrl:', icon); 
  return (
    
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      className="h-12 cursor-pointer"
      rotationIntensity={.5}
    >
        <OrbitControls enableZoom={false} enablePan={false} />
      <Suspense fallback={<CanvasLoader />}>
          <Ball imgUrl={icon} name={name} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;