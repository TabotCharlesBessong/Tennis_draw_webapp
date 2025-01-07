import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { Home } from "./pages";
import AddPlayersPage from "./pages/AddPlayersPage";
import DrawIntroPage from "./pages/DrawIntroPage";
import DrawResultsPage from "./pages/DrawResultPage";

const App = () => {
  const [tournamentSize, setTournamentSize] = useState(64); // Default tournament size
  const [isGrandSlam, setIsGrandSlam] = useState(false);
  const [byes, setByes] = useState(0);
  const [players, setPlayers] = useState([]);

  const handleNextFromIntro = (
    selectedTournamentSize: number,
    selectedIsGrandSlam: boolean,
    selectedByes: number
  ) => {
    setTournamentSize(selectedTournamentSize);
    setIsGrandSlam(selectedIsGrandSlam);
    setByes(selectedByes);
  };

  const handlePlayersSubmit = (
    submittedPlayers: { name: string; ranking: number }[]
  ) => {
    setPlayers(submittedPlayers);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/draw-intro"
          element={<DrawIntroPage onNext={handleNextFromIntro} />}
        />
        <Route
          path="/add-players"
          element={
            <AddPlayersPage
              tournamentSize={tournamentSize}
              onPlayersSubmit={handlePlayersSubmit}
            />
          }
        />
        <Route
          path="/draw-results"
          element={
            <DrawResultsPage
              players={players}
              tournamentSize={tournamentSize}
              isGrandSlam={isGrandSlam}
              byes={byes}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
