import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Group } from 'three';

export default function ShipModel(props: any) {
  const { scene } = useGLTF('/models/enterprise.glb');
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    // Compute the bounding box
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Recenter the model by offsetting its position
    scene.position.sub(center);

    // Optional: log size info if you want to auto-scale later
    const size = new THREE.Vector3();
    box.getSize(size);
  }, [scene]);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
}