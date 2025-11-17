import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";



const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio ",
      desc: " Portfolio d'un developpeur et designer développé avec React et Tailwind CSS, présentant ses compétences et ses projets.",
      img: project1,
    },
    {
      id: 2,
      title: "restaurant",
      desc: "Site d'un restaurant en ligne présentant les mets disponibles, un panier et un formulaire de contact.",
      img: project2,
    },
    {
      id: 3,
      title: "Lycee",
      desc: "Un site responsive pour le lycée de Natitingou, conçu avec HTML,CSS,boostrap et Laravel pour le back-end.",
      img: project3,
    },

     {
      id: 4,
      title: "Site vitrine pour un salon de coiffure",
      desc: "Un site responsive pour un salon de coiffure, conçu avec HTML, CSS et boostrap.",
      img: project4,
    },

     {
      id: 5,
      title: "Site d'offre de formation",
      desc: "Un site responsive d'offre de formation en ligne, conçu avec HTML, react et taiwinld css.",
      img: project5,
    },

    
  ];

  return (
    <section
      id="projets"
      className="bg-gray-900 text-gray-100 px-8 py-20 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
          Mes Projets 
        </h2>
        <p className="text-gray-400">
          Découvrez quelques-uns de mes projets récents. Chaque réalisation
          reflète ma passion pour le développement web et mon envie d’apprendre
          toujours plus.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image avec effet de zoom au survol */}
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Couche d’info animée */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 px-4 text-center">
                {project.desc}
              </p>
             
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
