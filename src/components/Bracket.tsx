import React from "react";

interface Player {
  name: string;
  ranking: number;
}

interface BracketProps {
  draw: Player[][][];
}

const Bracket: React.FC<BracketProps> = ({ draw }) => {
  // Helper function to get the title for each round
  const getRoundTitle = (roundIndex: number, totalRounds: number): string => {
    if (roundIndex === totalRounds - 1) return "Final";
    if (roundIndex === totalRounds - 2) return "Semifinals";
    if (roundIndex === totalRounds - 3) return "Quarterfinals";
    if (roundIndex === totalRounds - 4) return "Round of 16";
    return `Round ${roundIndex + 1}`;
  };

  return (
    <div className="bracket-container flex overflow-x-scroll">
      {draw.map((round, roundIndex) => (
        <div key={roundIndex} className="round flex flex-col items-center mx-4">
          {/* Round Title */}
          <h2 className="text-lg font-bold mb-4">
            {getRoundTitle(roundIndex, draw.length)}
          </h2>

          {/* Matches */}
          {round.map((match, matchIndex) => (
            <div
              key={matchIndex}
              className="match bg-gray-200 p-4 rounded shadow mb-4 w-56"
            >
              <p className="text-center font-semibold mb-2">
                Match {matchIndex + 1}
              </p>
              <div className="player mb-2">
                <span className="font-medium">{match[0]?.name || "TBD"}</span>
                {match[0]?.ranking !== Infinity &&
                  ` (Seed ${match[0]?.ranking})`}
              </div>
              <div className="player">
                <span className="font-medium">{match[1]?.name || "TBD"}</span>
                {match[1]?.ranking !== Infinity &&
                  ` (Seed ${match[1]?.ranking})`}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Bracket;
