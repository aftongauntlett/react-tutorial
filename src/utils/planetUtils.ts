/**
 * planetUtils.ts
 *
 * Utility functions related to planets and ship movement.
 */

import type { Planet } from './planetData';

/**
 * Returns a list of planet names.
 */
export function getPlanetNames(planets: Planet[]): string[] {
  return planets.map(p => p.name);
}