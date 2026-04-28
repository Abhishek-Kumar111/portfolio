"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.35;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <Sphere ref={ref} args={[1.2, 64, 64]} scale={1.2}>
      <MeshDistortMaterial color="#22d3ee" distort={0.28} speed={1.6} roughness={0.2} />
    </Sphere>
  );
}

export function FloatingOrb() {
  return (
    <div className="h-56 w-full sm:h-64">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[1, 2, 3]} intensity={1.2} />
        <Orb />
      </Canvas>
    </div>
  );
}
