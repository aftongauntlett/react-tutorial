/**
 * GalaxyScene.tsx
 *
 * Starship scene with animated galaxy background and floating ship.
 */

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import ShipModel from './ShipModel';

function FloatingShip(props: any) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.05;
    }
  });

  return (
    <group ref={ref} {...props}>
      <ShipModel scale={0.08} />
    </group>
  );
}

export default function GalaxyScene() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#010218] via-[#050d26] to-[#090e24] animate-galaxy">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }} className="w-full h-full">
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Starfield */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Animated Ship */}
        <FloatingShip rotation={[0, Math.PI / 2, 0]} />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}