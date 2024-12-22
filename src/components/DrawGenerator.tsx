import React from "react";

interface Player {
  name: string;
  ranking: number;
}

interface Props {
  players: Player[];
}

const DrawGenerator: React.FC<Props> = ({ players }) => {
  const generateDraw = () => {
    const byes:any = [];
    const seeds = players.slice(0, 4); // For 32 players example.
    const unseeded = players.slice(4);

    // Simplified seeding logic for now
    return [...seeds, ...byes, ...unseeded];
  };

  const draw = generateDraw();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Tournament Draw</h2>
      <ul>
        {draw.map((player, idx) => (
          <li key={idx} className="py-1">
            {player.name} - Rank: {player.ranking}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawGenerator;
