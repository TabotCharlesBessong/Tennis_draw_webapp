import { DrawResult, Player } from "../types";

export const generateDraw = (
  players: Player[],
  tournamentSize: number,
  isGrandSlam: boolean
): DrawResult[] => {
  const sortedPlayers = [...players].sort((a, b) => a.ranking - b.ranking);

  // Determine the number of byes
  let numByes = 0;
  if (tournamentSize === 32) {
    numByes = 4;
  } else if (tournamentSize === 64) {
    numByes = players.length >= 56 ? 16 : 8;
  } else if (tournamentSize === 128 && !isGrandSlam) {
    numByes = 32;
  }

  const byes: DrawResult[] = Array(numByes).fill({
    name: "Bye",
    ranking: Infinity,
  });

  const seeds = sortedPlayers.slice(
    0,
    Math.min(tournamentSize / 2, sortedPlayers.length)
  );
  const unseeded = sortedPlayers.slice(seeds.length);

  const draw: DrawResult[] = [];
  for (let i = 0; i < tournamentSize; i++) {
    if (i < seeds.length) {
      draw.push(seeds[i]);
    } else if (byes.length > 0) {
      draw.push(byes.shift()!);
    } else {
      draw.push(unseeded.shift()!);
    }
  }

  // Ensure bracket rules
  for (let round = 1; round < Math.log2(tournamentSize); round++) {
    const step = Math.pow(2, round);
    for (let i = 0; i < draw.length; i += step) {
      const half = step / 2;
      if (i + half < draw.length) {
        [draw[i + half - 1], draw[i + step - 1]] = [
          draw[i + step - 1],
          draw[i + half - 1],
        ];
      }
    }
  }

  return draw;
};
