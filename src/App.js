import React from 'react';
import { Canvas } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// import { OrbitControls } from "@react-three/drei";
import { FPSControls } from "react-three-fpscontrols";
import Atmosphere from './Components/Atmosphere/Atmosphere';
import Mainstage from './Components/Models/Mainstage';
import { Suspense } from 'react';
import { Html, useProgress } from '@react-three/drei'


function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}


function App() {
  return (
    <Canvas>
      <Suspense fallback={Loader}>
        {/* <axesHelper scale={100} /> */}
        <Atmosphere />
        {/* <OrbitControls maxAzimuthAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      /> */}
        <directionalLight intensity={2} position={[10, 100, 20]} />

        <directionalLight position={[-20, 100, 10]} intensity={1} />
        <hemisphereLight intensity={1} />
        <pointLight position={[-14, 3.5, 0]} intensity={0.3} />
        <pointLight position={[14, 3.5, 0]} intensity={0.3} />
        <pointLight position={[14, 3.5, -17]} intensity={0.3} />
        <pointLight position={[14, 3.5, -21]} intensity={0.3} />
        <directionalLight position={[0, 100, -30]} intensity={1} />
        {/* <ambientLight intensity={1} /> */}


        <FPSControls

          camProps={{
            makeDefault: true,
            fov: 50,
            position: [0, 1.1, 0.2]
          }}
          orbitProps={{
            target: [0, 1.1, 0]

          }}
          enableJoystick
          enableKeyboard
        />
        {/* <hemisphereLight intensity={0.5} /> */}
        <ambientLight intensity={0.25} />
        {/* <Model /> */}
        {/* <Box /> */}
        =

        <Mainstage />

      </Suspense>
    </Canvas>
  );
}

export default App;
