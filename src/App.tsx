import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages";
import AddPlayersPage from "./pages/AddPlayersPage";
import DrawIntroPage from "./pages/DrawIntroPage";
import DrawResultsPage from "./pages/DrawResultPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw-intro" element={<DrawIntroPage />} />
        <Route path="/add-players" element={<AddPlayersPage />} />
        <Route path="/draw-results" element={<DrawResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App