'use client';

import { Suspense, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, SpotLight, Loader } from '@react-three/drei';
import { Instances, Model } from './Office3DScene';

const LIGHTS_DATA: { position: [number, number, number]; target: [number, number, number] }[] = [
  { position: [2.82, 11.8, 0.88], target: [2.82, 0, 0.88] },
  { position: [-2.52, 11.8, 0.88], target: [-2.52, 0, 0.88] },
  { position: [2.82, 11.8, -2.61], target: [2.82, 0, -2.61] },
  { position: [-2.52, 11.8, -2.61], target: [-2.52, 0, -2.61] },
  { position: [-7.29, 11.8, 0.88], target: [-7.29, 0, 0.88] },
  { position: [-7.29, 11.8, -2.61], target: [-7.29, 0, -2.61] },
  { position: [7.82, 5.4, -1.61], target: [7.82, 0, -1.61] },
  { position: [10.58, 5.4, -1.61], target: [10.58, 0, -1.61] },
  { position: [10.58, 5.4, 0.88], target: [10.58, 0, 0.88] },
  { position: [7.82, 5.4, 0.88], target: [7.82, 0, 0.88] },
  { position: [7.82, 5.4, 3.37], target: [7.82, 0, 3.37] },
  { position: [10.58, 5.4, 3.37], target: [10.58, 0, 3.37] },
  { position: [10.58, 5.4, 5.86], target: [10.58, 0, 5.86] },
  { position: [7.82, 5.4, 5.86], target: [7.82, 0, 5.86] },
  { position: [10.58, 5.4, 10.35], target: [10.58, 0, 10.35] },
  { position: [7.82, 5.4, 10.35], target: [7.82, 0, 10.35] },
  { position: [-2.52, 5.4, 0.88], target: [-2.52, 0, 0.88] },
  { position: [2.82, 5.4, 0.88], target: [2.82, 0, 0.88] },
  { position: [-2.52, 5.4, 0.88], target: [-2.52, 0, 0.88] },
  { position: [2.82, 5.4, -2.61], target: [2.82, 0, -2.61] },
  { position: [-2.52, 5.4, -2.61], target: [-2.52, 0, -2.61] },
  { position: [-7.29, 5.4, 0.88], target: [-7.29, 0, 0.88] },
  { position: [-7.29, 5.4, -2.61], target: [-7.29, 0, -2.61] },
];

function CustomSpotLight({
  position,
  targetPosition,
}: {
  position: [number, number, number];
  targetPosition: [number, number, number];
}) {
  const target = useMemo(() => {
    const obj = new THREE.Object3D();
    obj.position.set(...targetPosition);
    return obj;
  }, [targetPosition]);

  return (
    <>
      <primitive object={target} />
      <SpotLight
        position={position}
        target={target}
        intensity={188.74}
        distance={15}
        angle={0.46}
        penumbra={0.62}
      />
    </>
  );
}

export default function HeroCanvas() {
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden isolation-isolate">
      {/* Canvas container - 66.666% width */}
      <div
        className="absolute top-0 left-0 w-2/3 h-full z-10 bg-blue-500"
        onMouseLeave={() => setIsInteractive(false)}
      >
        {/* Canvas overlay */}
        {!isInteractive && (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-black/5"
            onClick={() => setIsInteractive(true)}
          >
            <span className="bg-black/55 text-white px-8 py-3.5 rounded-full text-base font-bold tracking-wide backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl">
              Click to Interact
            </span>
          </div>
        )}

        {/* Three.js Canvas */}
        <Canvas
          frameloop="demand"
          dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
          gl={{ antialias: false, powerPreference: 'high-performance' }}
          orthographic
          camera={{ position: [-20, 10, 20], zoom: 30 }}
        >
          <ambientLight intensity={0.51} />
          <directionalLight position={[10, 18.41, 16.64]} intensity={1} castShadow={false} />
          <directionalLight position={[-10, 18.41, 16.64]} intensity={3} castShadow={false} />
          <Suspense fallback={null}>
            {LIGHTS_DATA.map((data, index) => (
              <CustomSpotLight
                key={index}
                position={data.position}
                targetPosition={data.target}
              />
            ))}
            <Instances>
              <Model isInteractive={isInteractive} />
            </Instances>
          </Suspense>
          <OrbitControls
            makeDefault
            target={[6, 1, -1]}
            enableZoom={isInteractive}
          />
        </Canvas>
        <Loader />
      </div>

      {/* Right panel - 33.334% width */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 border-l border-black/6 z-0" />
    </section>
  );
}
