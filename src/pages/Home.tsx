import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import data from "../constant/data";

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-8 py-4 mb-32">
        <div className="text-xl font-bold">Tennis Draw Guide</div>
        <ul className="flex gap-6">
          {data.sections.map((section, index) => (
            <li key={index}>
              <a
                href={`#section-${index}`}
                className="text-blue-500 hover:underline"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/draw-intro"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Start Draw
        </a>
      </nav>
      <div className="h-screen overflow-y-auto mt-30 snap-y snap-mandatory">
        {data.sections.map((section, index) => (
          <motion.section
            key={index}
            className="h-screen flex flex-col justify-center items-center text-center snap-center p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h1 className="text-4xl font-bold mb-4">{section.title}</h1>
            <p className="text-lg mb-6">{section.description}</p>
            <Carousel
              showThumbs={true}
              showStatus={true}
              className="w-full max-w-4xl"
              autoPlay={true}
              infiniteLoop={true}
              interval={4000}
            >
              {section.tournaments.map((tournament, idx) => (
                <div key={idx} className="p-4">
                  <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-[500px] object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-semibold">{tournament.name}</h2>
                  <p className="text-sm text-gray-700 mb-4">
                    {tournament.description}
                  </p>
                  <div className="flex gap-4 justify-center">
                    {tournament.players.map((player, i) => (
                      <div key={i} className="text-center">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] object-cover rounded-full mb-2"
                        />
                        <p className="text-xs">{player.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
