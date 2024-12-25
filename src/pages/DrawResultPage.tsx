import React from "react";
import { useLocation } from "react-router-dom";
import { Player, TournamentState } from "../types";
import { generateDraw } from "../constant/utils";

const DrawResultsPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as TournamentState;

  const draw = generateDraw(
    state.players,
    state.tournamentSize,
    state.isGrandSlam
  );

  const renderBracket = (rounds: Player[]): JSX.Element => {
    if (rounds.length === 1) {
      return (
        <div className="text-center bg-gray-200 p-4 rounded">
          Winner: {rounds[0].name}{" "}
          {rounds[0].ranking !== Infinity && `- Rank ${rounds[0].ranking}`}
        </div>
      );
    }

    const nextRound: Player[] = [];
    for (let i = 0; i < rounds.length; i += 2) {
      const match = {
        name: `${rounds[i].name} vs ${rounds[i + 1]?.name || "Bye"}`,
        ranking: Math.min(
          rounds[i].ranking,
          rounds[i + 1]?.ranking || Infinity
        ),
      };
      nextRound.push(match);
    }

    return (
      <div className="flex">
        <div className="w-1/2 p-4">
          {rounds.map((player, idx) => (
            <div
              key={idx}
              className={`bg-gray-100 p-4 rounded mb-2 text-center ${
                player.name === "Bye" ? "text-gray-400" : ""
              }`}
            >
              {player.name}
            </div>
          ))}
        </div>
        <div className="w-1/2 p-4">{renderBracket(nextRound)}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Tournament Bracket</h1>
      {renderBracket(draw)}
    </div>
  );
};

export default DrawResultsPage;
