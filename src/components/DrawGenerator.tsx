import React from "react";
import { useNavigate } from "react-router-dom";

interface Player {
  name: string;
  ranking: number;
}

interface Props {
  players: Player[];
  tournamentSize: number;
  isGrandSlam?: boolean;
}

const DrawGenerator: React.FC<Props> = ({
  players,
  tournamentSize,
  isGrandSlam = false,
}) => {
  const navigate = useNavigate()
  const generateDraw = () => {
    const sortedPlayers = players.sort((a, b) => a.ranking - b.ranking);
    const numByes =
      tournamentSize === 32
        ? 4
        : tournamentSize === 64
        ? players.length >= 56
          ? 16
          : 8
        : isGrandSlam
        ? 0
        : 32;

    const byes = Array(numByes).fill({ name: "Bye", ranking: Infinity });
    const seeds = sortedPlayers.slice(0, tournamentSize - numByes);
    const unseeded = sortedPlayers.slice(tournamentSize - numByes);


    navigate("/draw")
    return [...seeds, ...byes, ...unseeded];
  };

  const draw = generateDraw();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Tournament Draw</h2>
      <ul className="grid grid-cols-2 gap-4">
        {draw.map((player, idx) => (
          <li key={idx} className="bg-gray-100 p-2 rounded shadow">
            {player.name}{" "}
            {player.ranking !== Infinity && `- Rank: ${player.ranking}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawGenerator;
