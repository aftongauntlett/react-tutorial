/**
 * GalaxyScene.tsx
 *
 * A reusable 3D galaxy scene component with a floating Starship model.
 * Uses @react-three/fiber and drei for rendering and starfield.
 * Designed as a header-level visual with optional children overlay.
 */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import ShipModel from "./ShipModel";

interface GalaxySceneProps {
  children?: React.ReactNode;
}

/**
 * FloatingShip
 *
 * Wraps the Starship model and adds subtle idle animation using useFrame.
 */
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

/**
 * GalaxyScene
 *
 * Full-width container with a fixed-height 3D galaxy background and animated ship.
 * Can accept children for overlaying mission instructions or CTA buttons.
 */
export default function GalaxyScene({ children }: GalaxySceneProps) {
  return (
    <section className="relative w-full h-[500px] bg-gradient-to-b from-[#010218] via-[#050d26] to-[#090e24] overflow-hidden">
      {/* 3D Galaxy Canvas */}
      <Canvas
        camera={{ position: [0, 1.5, 3], fov: 35 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        /> 
        <ShipModel scale={0.08} rotation={[0, Math.PI / 2, 0]} />
        <OrbitControls
          target={[0, 0, 0]}
          enableZoom
          enablePan={false}
          minDistance={1.5}
          maxDistance={4}
        />
      </Canvas>
      {/* Optional overlay content (e.g. mission name, start button) */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {children}
        </div>
      )}
    </section>
  );
}
