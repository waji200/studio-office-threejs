import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Model'

function App() {
  return (
    <Canvas camera={{ position: [5, 5, 20], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <Suspense fallback={null}>
        {/* We place the model here */}
        <Model />
        
        {/* Soft contacts shadows for realism */}
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={50} blur={2} far={10} />
        
        {/* Environment map for realistic lighting and reflections */}
        <Environment preset="city" />
      </Suspense>
      
      {/* Allows the user to rotate and zoom around the model */}
      <OrbitControls makeDefault />
    </Canvas>
  )
}

export default App
