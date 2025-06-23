import { MissionContent, GalaxyScene } from '../components/galaxy';

export default function DistanceOptimization() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <GalaxyScene />
     <MissionContent>
        <p className="text-lg leading-relaxed">
          You are the commander of the USS Enterprise. Your task is to calculate the minimum
          number of refueling stops required to reach your destination planet.
        </p>

        {/* You can add question prompts, inputs, diagrams here */}
      </MissionContent>
    </div>
  );
}