import React from "react";
import { motion } from "framer-motion";

interface Player {
  name: string;
  ranking: number;
}

interface Match {
  player1: Player | null;
  player2: Player | null;
}

interface Props {
  draw: Match[][];
}

const Bracket: React.FC<Props> = ({ draw }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Tournament Bracket
      </h2>
      <div className="flex flex-col gap-6">
        {draw.map((round, roundIndex) => (
          <motion.div
            key={roundIndex}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: roundIndex * 0.2 }}
          >
            <h3 className="text-lg font-semibold">Round {roundIndex + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
              {round.map((match, matchIndex) => (
                <div
                  key={matchIndex}
                  className="bg-white p-4 rounded shadow-md flex justify-between items-center"
                >
                  <div className="text-gray-700">
                    {match.player1 ? match.player1.name : "Bye"}
                  </div>
                  <span className="text-gray-500 font-bold">vs</span>
                  <div className="text-gray-700">
                    {match.player2 ? match.player2.name : "Bye"}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bracket;
