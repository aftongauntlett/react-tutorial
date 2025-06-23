type Point3D = { x: number; y: number; z: number };

export function findClosestPlanets(
  current: Point3D,
  stations: Point3D[],
  limit = 10
): Point3D[] {
  return stations
    .map(station => ({
      ...station,
      distance: Math.sqrt(
        Math.pow(station.x - current.x, 2) +
        Math.pow(station.y - current.y, 2) +
        Math.pow(station.z - current.z, 2)
      )
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map(({ distance, ...rest }) => rest); // Remove distance before returning
}