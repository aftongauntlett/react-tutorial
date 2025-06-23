/**
 * ShipPositionsStore.ts
 *
 * Zustand store for managing the ship's current position in 3D space.
 */

import { create } from 'zustand';
import { Vector3 } from 'three';

interface ShipState {
  position: Vector3;
  setPosition: (newPos: Vector3) => void;
}

export const useShipStore = create<ShipState>((set) => ({
  position: new Vector3(0, 0, 0),
  setPosition: (newPos) => set({ position: newPos }),
}));