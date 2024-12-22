import React, { useState } from "react";

interface Player {
  name: string;
  ranking: number;
}

interface Props {
  onPlayersSubmit: (players: Player[]) => void;
}

const PlayerForm: React.FC<Props> = ({ onPlayersSubmit }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [name, setName] = useState("");
  const [ranking, setRanking] = useState<number | "">("");

  const addPlayer = () => {
    if (name && ranking) {
      setPlayers([...players, { name, ranking: Number(ranking) }]);
      setName("");
      setRanking("");
    }
  };

  const handleSubmit = () => {
    onPlayersSubmit(players.sort((a, b) => a.ranking - b.ranking));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Add Players</h2>
      <div className="flex gap-2 my-4">
        <input
          type="text"
          placeholder="Player Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Ranking"
          value={ranking}
          onChange={(e) => setRanking(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addPlayer}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Generate Draw
      </button>
      <ul className="mt-4">
        {players.map((player, idx) => (
          <li key={idx} className="py-1">
            {player.name} - Rank: {player.ranking}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerForm;
