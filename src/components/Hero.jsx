import React from "react";
import photo from "../assets/photo.jpg"; 

const Hero = () => {
  return (
    <section
      id="accueil"
className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 bg-gray-50 dark:bg-gray-800 mt-16"
    >
      {/* Texte à gauche */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-600">
          Lisette OBOGNON
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Développeuse web fullstack, je conçois des sites modernes, rapides et accessibles. Je suis également passionnée du graphisme et de l'intélligence artificielle .
        </p>
        <a
          href="/CV.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Voir mon CV
        </a>
      </div>

      {/* Photo à droite */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={photo}
          alt="Lisette Obognon"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-blue-600 hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Hero;
