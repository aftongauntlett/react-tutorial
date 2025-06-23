/**
 * PlanetList.tsx
 *
 * Component to display a list of known planets.
 */

import { planets } from '@/utils/planetData';
import type { Planet } from '@/utils/planetData';

export default function PlanetList() {
  return (
    <ul className="text-white text-sm">
      {planets.map((planet: Planet) => (
  <li key={planet.name}>{planet.name}</li>
))}
    </ul>
  );
}