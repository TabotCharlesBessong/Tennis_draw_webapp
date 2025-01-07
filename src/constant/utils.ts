interface Player {
  name: string;
  ranking: number;
}

export const generateDraw = (
  players: Player[],
  tournamentSize: number,
  isGrandSlam: boolean,
  byes: number
): Player[][][] => {
  // Sort players by ranking
  const sortedPlayers = players.sort((a, b) => a.ranking - b.ranking);

  // Determine number of byes
  const totalByes = isGrandSlam ? 0 : byes;
  const totalRounds = Math.log2(tournamentSize);
  const draw: Player[][][] = [];

  // Generate first round matches (with byes if applicable)
  const firstRoundMatches: Player[][] = [];
  const byePlayers = sortedPlayers.slice(0, totalByes);
  const remainingPlayers = sortedPlayers.slice(totalByes);

  // Add byes to the first round
  for (const player of byePlayers) {
    firstRoundMatches.push([player, { name: "Bye", ranking: Infinity }]);
  }

  // Pair remaining players randomly for the first round
  const shuffledPlayers = [...remainingPlayers].sort(() => Math.random() - 0.5);
  while (shuffledPlayers.length > 1) {
    const player1 = shuffledPlayers.pop()!;
    const player2 = shuffledPlayers.pop()!;
    firstRoundMatches.push([player1, player2]);
  }

  // Add remaining unmatched player to a bye (if applicable)
  if (shuffledPlayers.length) {
    firstRoundMatches.push([
      shuffledPlayers.pop()!,
      { name: "Bye", ranking: Infinity },
    ]);
  }

  // Add the first round to the draw
  draw.push(firstRoundMatches);

  // Generate subsequent rounds
  for (let round = 1; round < totalRounds; round++) {
    const previousRound = draw[round - 1];
    const currentRound: Player[][] = [];

    // Add blank matches for subsequent rounds
    for (let i = 0; i < previousRound.length / 2; i++) {
      currentRound.push([
        { name: "TBD", ranking: Infinity },
        { name: "TBD", ranking: Infinity },
      ]);
    }

    draw.push(currentRound);
  }

  return draw;
};
