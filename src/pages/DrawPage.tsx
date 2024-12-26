import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bracket from "../components/Bracket";

interface Player {
  name: string;
  ranking: number;
}

interface Match {
  player1: Player | null;
  player2: Player | null;
}

export default function DrawPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [players, setPlayers] = useState<Player[]>([]);
  const [draw, setDraw] = useState<Match[][]>([]);

  useEffect(() => {
    const state = location.state as {
      players: Player[];
      tournamentSize: number;
      isGrandSlam?: boolean;
    };
    if (!state?.players || state.players.length === 0) {
      navigate("/"); // Redirect to home if no players were passed
    } else {
      setPlayers(state.players);
      const generatedDraw = generateDraw(
        state.players,
        state.tournamentSize,
        state.isGrandSlam || false
      );
      setDraw(generatedDraw);
    }
  }, [location, navigate]);

  const generateDraw = (
    players: Player[],
    tournamentSize: number,
    isGrandSlam: boolean
  ): Match[][] => {
    const sortedPlayers = players.sort((a, b) => a.ranking - b.ranking);
    const numByes =
      tournamentSize === 32
        ? 4
        : tournamentSize === 64
        ? players.length >= 56
          ? 16
          : 8
        : isGrandSlam
        ? 0
        : 32;

    const byes = Array(numByes).fill({ name: "Bye", ranking: Infinity });
    const seeds = sortedPlayers.slice(0, tournamentSize - numByes);
    const unseeded = sortedPlayers.slice(tournamentSize - numByes);

    const allPlayers = [...seeds, ...byes, ...unseeded];
    const rounds: Match[][] = [];

    while (allPlayers.length > 1) {
      const currentRound: Match[] = [];
      for (let i = 0; i < allPlayers.length / 2; i++) {
        const player1 = allPlayers[i];
        const player2 = allPlayers[allPlayers.length - 1 - i] || null;
        currentRound.push({ player1, player2 });
      }
      rounds.push(currentRound);
      allPlayers.splice(allPlayers.length / 2); // Reduce to winners for the next round
    }

    return rounds;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Tournament Draw</h1>
      {draw.length > 0 ? (
        <Bracket draw={draw} />
      ) : (
        <p className="text-gray-500">Generating draw...</p>
      )}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back to Home
      </button>
    </div>
  );
}
