import { Section } from "../types";
import images from "./images";

const sections: Section[] = [
  {
    title: "Grand Slam Tournaments",
    description:
      "The four Grand Slam tournaments represent the pinnacle of tennis. Each has unique characteristics, from the hard courts of Melbourne to the grass of Wimbledon.",
    tournaments: [
      {
        name: "Australian Open",
        image: images.ao,
        description:
          "Held on hard courts in Melbourne, Novak Djokovic leads with 10 titles, while Serena Williams holds 7 titles.",
        players: [
          { name: "Novak Djokovic", image: images.novak },
          { name: "Serena Williams", image: images.serena },
        ],
      },
      {
        name: "Roland Garros",
        image: images.rg,
        description:
          "Played on clay courts in Paris, Rafael Nadal holds a record 14 titles. Chris Evert is the women's leader with 7 titles.",
        players: [
          { name: "Rafael Nadal", image: images.rafa },
          { name: "Chris Evert", image: images.christ },
        ],
      },
      {
        name: "Wimbledon",
        image: images.wimbledon,
        description:
          "Played on grass courts in London, Roger Federer has 8 titles. Martina Navratilova holds a record 9 titles.",
        players: [
          { name: "Roger Federer", image: images.roger },
          {
            name: "Martina Navratilova",
            image: images.martina,
          },
        ],
      },
      {
        name: "US Open",
        image: "/images/us-open.jpg",
        description:
          "Played on hard courts in New York, Pete Sampras and Jimmy Connors each have 5 titles. Serena Williams leads with 6 titles.",
        players: [
          { name: "Pete Sampras", image: images.sampras },
          { name: "Serena Williams", image: images.serena },
        ],
      },
    ],
  },
  {
    title: "Masters 1000 Tournaments",
    description:
      "The Masters 1000 tournaments feature intense competition and are pivotal for ATP and WTA rankings.",
    tournaments: [
      {
        name: "Indian Wells",
        image: images.indian_well,
        description:
          "Known as the 'fifth Grand Slam,' Indian Wells is a hard-court tournament that attracts top players yearly.",
        players: [
          { name: "Novak Djokovic", image: images.novak },
          { name: "Iga Swiatek", image: images.iga },
        ],
      },
      {
        name: "Miami Open",
        image: images.miami,
        description:
          "Played on hard courts in Miami, this tournament is part of the 'Sunshine Double' with Indian Wells.",
        players: [
          { name: "Roger Federer", image: images.roger },
          { name: "Ashleigh Barty", image: "/images/players/barty.jpg" },
        ],
      },
      {
        name: "Monte Carlo",
        image: images.monte_carlo,
        description:
          "A historic clay tournament in Monaco, Rafael Nadal has dominated with 11 titles.",
        players: [
          { name: "Rafael Nadal", image: images.rafa },
          {
            name: "Stefanos Tsitsipas",
            image: images.stefan,
          },
        ],
      },
      {
        name: "Cincinnati Masters",
        image: images.cincinati,
        description:
          "Played on hard courts, Cincinnati is one of the oldest tournaments in the US.",
        players: [
          { name: "Andy Murray", image: images.andy },
          { name: "Victoria Azarenka", image: "/images/players/azarenka.jpg" },
        ],
      },
    ],
  },
  {
    title: "ATP 500 and 250 Tournaments",
    description:
      "These tournaments form the foundation of the ATP and WTA tours, providing opportunities for rising stars and established players alike.",
    tournaments: [
      {
        name: "Barcelona Open",
        image: images.barcelona,
        description:
          "Played on clay courts, Rafael Nadal holds a record 12 titles.",
        players: [
          { name: "Rafael Nadal", image: images.rafa },
          { name: "Carlos Alcaraz", image: images.carlos },
        ],
      },
      {
        name: "Dubai Tennis Championships",
        image: images.dubai,
        description:
          "Held on hard courts in Dubai, this tournament has seen dominant performances by Novak Djokovic and Roger Federer.",
        players: [
          { name: "Novak Djokovic", image: images.novak },
          { name: "Roger Federer", image: images.roger },
        ],
      },
      {
        name: "Queen's Club Championships",
        image: images.queens,
        description:
          "A prestigious grass-court tournament held in London, it's seen many Wimbledon champions shine.",
        players: [
          { name: "Andy Murray", image: images.andy },
          { name: "Marin Čilić", image: images.cilic },
        ],
      },
      {
        name: "Tokyo Open",
        image: images.tokyo,
        description:
          "Played on hard courts, the Tokyo Open is one of Asia's leading tennis events.",
        players: [
          { name: "Kei Nishikori", image: images.kei },
          { name: "Naomi Osaka", image: images.osaka },
        ],
      },
    ],
  },
];

const data = {
  sections,
};

export default data;
