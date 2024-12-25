export interface Section {
  title: string;
  description: string;
  tournaments: Tournament[];
}

interface Tournament {
  name: string;
  image: string;
  description: string;
  players: { name: string; image: string }[];
}

export interface Player {
  name: string
  ranking: number;
}

export interface DrawResult {
  name: string;
  ranking: number;
}

export interface TournamentState {
  players: Player[];
  isGrandSlam: boolean;
  tournamentSize: number;
}