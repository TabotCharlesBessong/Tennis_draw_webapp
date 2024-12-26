import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DrawIntroPage: React.FC = () => {
  const [tournamentSize, setTournamentSize] = useState<number>(32);
  const [isGrandSlam, setIsGrandSlam] = useState<boolean>(false);
  const [tournamentType, setTournamentType] = useState<string>("Male");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/add-players", {
      state: { tournamentSize, isGrandSlam, tournamentType },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Tournament Configuration
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="tournament-size"
            className="block text-lg font-medium mb-2"
          >
            Tournament Size
          </label>
          <select
            id="tournament-size"
            value={tournamentSize}
            onChange={(e) => setTournamentSize(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          >
            <option value={32}>32 Players</option>
            <option value={64}>64 Players</option>
            <option value={128}>128 Players</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="tournament-type"
            className="block text-lg font-medium mb-2"
          >
            Tournament Type
          </label>
          <select
            id="tournament-type"
            value={tournamentType}
            onChange={(e) => setTournamentType(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isGrandSlam}
              onChange={(e) => setIsGrandSlam(e.target.checked)}
              className="mr-2"
            />
            <span className="text-lg font-medium">Is this a Grand Slam?</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600"
        >
          Next: Add Players
        </button>
      </form>
    </div>
  );
};

export default DrawIntroPage;
