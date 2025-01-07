import React from "react";
import Bracket from "../components/Bracket";
import { generateDraw } from "../constant/utils";

interface Player {
  name: string;
  ranking: number;
}

interface DrawResultPageProps {
  players: Player[];
  tournamentSize: number;
  isGrandSlam: boolean;
  byes: number;
}

const DrawResultPage: React.FC<DrawResultPageProps> = ({
  players,
  tournamentSize,
  isGrandSlam,
  byes,
}) => {
  const draw = generateDraw(players, tournamentSize, isGrandSlam, byes);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tournament Draw</h1>
      <Bracket draw={draw} />
    </div>
  );
};

export default DrawResultPage;
