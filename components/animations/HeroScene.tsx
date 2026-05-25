"use client";

import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Core() {
  return (
    <>
      <ambientLight intensity={1.4} />
      <pointLight position={[4, 4, 4]} intensity={28} color="#00f5ff" />
      <pointLight position={[-4, -2, 3]} intensity={18} color="#7c3aed" />
      <Float speed={2} rotationIntensity={1.6} floatIntensity={1.8}>
        <mesh>
          <icosahedronGeometry args={[1.55, 4]} />
          <MeshDistortMaterial color="#0ea5e9" roughness={0.18} metalness={0.9} distort={0.42} speed={2.4} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={1.2}>
        <mesh rotation={[1.2, 0.4, 0]} scale={2.15}>
          <torusGeometry args={[1.35, 0.015, 16, 160]} />
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={1.6} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.4}>
        <mesh rotation={[0.2, 1.1, 1.5]} scale={2.7}>
          <torusGeometry args={[1.32, 0.01, 16, 160]} />
          <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={1.8} />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <Core />
      </Canvas>
    </div>
  );
}
