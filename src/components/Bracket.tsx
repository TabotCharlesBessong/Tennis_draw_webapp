import React from "react";
import { motion } from "framer-motion";

interface Player {
  name: string;
  ranking: number;
}

interface Props {
  draw: Player[];
}

const Bracket: React.FC<Props> = ({ draw }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Bracket</h2>
      <div className="grid grid-cols-2 gap-4">
        {draw.map((player, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-200 p-2 rounded shadow"
          >
            {player.name} - Rank: {player.ranking}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bracket;
