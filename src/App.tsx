import { Suspense, useMemo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  SpotLight,
  Loader,
} from "@react-three/drei";
import { Instances, Model } from "./Office_studiocheck.tsx";

// Positions and targets defined once in an array
const LIGHTS_DATA: {
  position: [number, number, number];
  target: [number, number, number];
}[] = [
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
  // Each instance now gets its own unique target object
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
        castShadow
        distance={15} // Increased to 15 so ceiling lights (y=11.8) reach the floor (y=0)
        angle={0.46}
        penumbra={0.62}
      />
    </>
  );
}

function CloudCircuitIcon() {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 75 C 50 60, 65 50, 80 50 C 105 50, 115 65, 115 80 C 130 80, 130 100, 115 100 L 50 100 C 30 100, 30 75, 50 75 Z"
        stroke="#e0e0e0"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 100 L45 115 L25 115"
        stroke="#e0e0e0"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="115" r="5" fill="#e0e0e0" />
      <path
        d="M65 100 L65 130 L45 130"
        stroke="#e0e0e0"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="130" r="5" fill="#e0e0e0" />
      <path
        d="M85 100 L85 130"
        stroke="#e0e0e0"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="85" cy="135" r="5" fill="#e0e0e0" />
      <path
        d="M105 100 L105 115 L125 115"
        stroke="#e0e0e0"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="130" cy="115" r="5" fill="#e0e0e0" />
    </svg>
  );
}

function App() {
  return (
    <div className="layout">
      {/* Top Header */}
      <div className="top-header">
        <div className="top-header-left">
          <svg className="icon-envelope" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>info@backifycapital.com.com</span>
        </div>
        <div className="top-header-right">
          {/* Instagram */}
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          {/* Google */}
          <a href="#" className="social-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814c-1.79-1.677-4.184-2.702-6.735-2.702-5.522 0-10 4.478-10 10s4.478 10 10 10c8.396 0 10.249-7.85 9.426-11.748h-9.426z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="logo">innovation</div>
        <nav className="nav-menu">
          <a href="#home" className="nav-item active">
            Home
          </a>
          <a href="#about" className="nav-item">
            About Us
          </a>
          <a href="#services" className="nav-item">
            Services
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left bg-[#5a90d8]">
          <Canvas orthographic camera={{ position: [-20, 10, 20], zoom: 30 }} style={{ backgroundColor: '#5a90d8' }}>
            <ambientLight intensity={0.51} />
            <directionalLight
              position={[10, 18.41, 16.64]}
              intensity={1}
              castShadow
            />
            <directionalLight
              position={[-10, 18.41, 16.64]}
              intensity={3}
              castShadow
            />

            <Suspense fallback={null}>
              {/* Render all spotlights from the data array */}
              {LIGHTS_DATA.map((data, index) => (
                <CustomSpotLight
                  key={index}
                  position={data.position}
                  targetPosition={data.target}
                />
              ))}

              <Instances>
                <Model />
              </Instances>
            </Suspense>

            <OrbitControls makeDefault target={[6, 1, -1]} />
          </Canvas>
          <Loader />
        </div>
        <div className="hero-right">
          <CloudCircuitIcon />
        </div>
      </section>
    </div>
  );
}

export default App;
