/**
 * planetData.ts
 *
 * Curated static dataset of planets with 3D coordinates.
 */

export type Planet = {
  name: string;
  position: [number, number, number];
};

export const planets: Planet[] = [
  { name: 'Earth', position: [0, 0, 0] },
  { name: 'Mars', position: [1, 2, -1] },
  { name: 'Jupiter', position: [5, -2, 3] },
  // Add more as needed
];