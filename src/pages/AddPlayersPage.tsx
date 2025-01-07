import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Player {
  name: string;
  ranking: number;
}

interface AddPlayersPageProps {
  tournamentSize: number;
  onPlayersSubmit: (players: Player[]) => void;
}

const AddPlayersPage: React.FC<AddPlayersPageProps> = ({
  tournamentSize,
  onPlayersSubmit,
}) => {
  const [players, setPlayers] = useState<Player[]>(
    Array.from({ length: tournamentSize }, (_, i) => ({
      name: "",
      ranking: i + 1,
    }))
  );
  const navigate = useNavigate()

  const handleNameChange = (index: number, name: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].name = name;
    setPlayers(updatedPlayers);
  };

  const handleSubmit = () => {
    onPlayersSubmit(players);
    navigate("/draw-results")
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Add Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {players.map((player, index) => (
          <div key={index} className="mb-4">
            <label className="block font-semibold mb-2">
              Player {index + 1} (Seed {player.ranking})
            </label>
            <input
              type="text"
              value={player.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              placeholder="Enter Player Name"
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Submit Players
      </button>
    </div>
  );
};

export default AddPlayersPage;
