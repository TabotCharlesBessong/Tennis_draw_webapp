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