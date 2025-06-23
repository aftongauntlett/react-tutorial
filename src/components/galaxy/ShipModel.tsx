import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Group } from 'three';

/**
 * ShipModel
 *
 * Loads and centers the Starship GLTF model. Accepts standard transform props (scale, rotation, position).
 */
export default function ShipModel(props: any) {
  const { scene } = useGLTF('/models/enterprise.glb');
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
}