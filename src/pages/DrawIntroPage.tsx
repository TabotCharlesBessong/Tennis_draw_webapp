import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DrawIntroPageProps {
  onNext: (tournamentSize: number, isGrandSlam: boolean, byes: number) => void;
}

const DrawIntroPage: React.FC<DrawIntroPageProps> = ({ onNext }) => {
  const [tournamentSize, setTournamentSize] = useState(64);
  const [isGrandSlam, setIsGrandSlam] = useState(false);
  const [byes, setByes] = useState(16);
  const navigate = useNavigate()

  const handleNext = () => {
    onNext(tournamentSize, isGrandSlam, isGrandSlam ? 0 : byes);
    navigate("/add-players", {
      state: { tournamentSize, isGrandSlam, byes },
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tournament Settings</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Tournament Size</label>
        <select
          value={tournamentSize}
          onChange={(e) => setTournamentSize(Number(e.target.value))}
          className="border p-2 rounded w-full"
        >
          <option value={16}>16 Players</option>
          <option value={32}>32 Players</option>
          <option value={64}>64 Players</option>
          <option value={128}>128 Players</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Is Grand Slam?</label>
        <input
          type="checkbox"
          checked={isGrandSlam}
          onChange={(e) => setIsGrandSlam(e.target.checked)}
          className="mr-2"
        />
        Yes
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Number of Byes</label>
        <input
          type="number"
          value={byes}
          onChange={(e) => setByes(Number(e.target.value))}
          disabled={isGrandSlam}
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default DrawIntroPage;
