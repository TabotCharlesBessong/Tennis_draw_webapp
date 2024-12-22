import React, { useState } from "react";
import { DrawGenerator, PlayerForm } from "../components";

const Home: React.FC = () => {
  const [players, setPlayers] = useState([]);

  return (
    <div className="p-8">
      <PlayerForm onPlayersSubmit={() =>setPlayers} />
      {players.length > 0 && <DrawGenerator players={players} />}
    </div>
  );
};

export default Home;
