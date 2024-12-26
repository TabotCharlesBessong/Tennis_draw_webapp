import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <motion.h2
        className="text-2xl font-bold mb-4 text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        Add Players
      </motion.h2>
      <div className="flex gap-2 mb-4">
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
        <motion.button
          onClick={addPlayer}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          whileHover={{ scale: 1.05 }}
        >
          Add
        </motion.button>
      </div>
      <motion.button
        onClick={handleSubmit}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        whileHover={{ scale: 1.05 }}
      >
        Generate Draw
      </motion.button>
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
