import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Player, TournamentState } from "../types";

const AddPlayersPage: React.FC = () => {
  const location = useLocation();
  const { tournamentSize } = location.state as TournamentState;
  const totalPlayers = Number(tournamentSize);

  const [players, setPlayers] = useState<Player[]>(
    Array(totalPlayers).fill({ name: "", ranking: 0 })
  );

  const navigate = useNavigate();

  const handlePlayerChange = (
    index: number,
    field: keyof Player,
    value: string | number
  ) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = { ...updatedPlayers[index], [field]: value };
    setPlayers(updatedPlayers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/draw-results", {
      state: {
        players,
        tournamentSize,
        isGrandSlam: location.state.isGrandSlam,
      },
    });
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Add Players</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        {players.map((player, idx) => (
          <div key={idx} className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder={`Player ${idx + 1} Name`}
              value={player.name}
              onChange={(e) => handlePlayerChange(idx, "name", e.target.value)}
              className="flex-1 border rounded px-3 py-2"
              required
            />
            <input
              type="number"
              placeholder="Ranking"
              value={player.ranking}
              onChange={(e) =>
                handlePlayerChange(idx, "ranking", Number(e.target.value))
              }
              className="w-24 border rounded px-3 py-2"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Generate Draw
        </button>
      </form>
    </div>
  );
};

export default AddPlayersPage;
