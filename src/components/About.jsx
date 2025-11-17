import React from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion"; // 🧩 pour les animations (npm install framer-motion)

const About = () => {
  return (
    <section
      id="apropos"
      className="px-8 py-20 bg-gray-900 text-gray-100 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto overflow-hidden"
    >
      {/* Image avec zoom au survol */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={about}
          alt="Portrait"
          className="w-64 h-64 rounded-2xl object-cover shadow-lg border-2 border-blue-500 bg-gray-800 cursor-pointer"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      {/* Texte animé */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          À propos de moi
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Je suis <span className="text-blue-400 font-semibold">Lisette Obognon</span>, 
          développeuse web fullstack et étudiante en 
          <span className="text-blue-400"> troisième année à l’Institut Universitaire des Technologies de l’Université de Parakou</span>.  
          Passionnée par la conception d’expériences numériques modernes et intuitives,
          j’aime donner vie à des idées à travers le code.
        </p>

        <p className="text-gray-300 leading-relaxed">
          J’ai effectué un <span className="text-blue-400">stage professionnel </span> 
          où j’ai pu renforcer mes compétences en développement web.  
          Je maîtrise particulièrement le <span className="text-blue-400">framework Laravel</span> pour le back-end,
          et j’utilise <span className="text-blue-400">React</span> et <span className="text-blue-400">Tailwind CSS </span> 
          pour le front-end.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Je suis toujours ouverte à de nouvelles opportunités et collaborations.  
          N’hésitez pas à me <span className="text-blue-400 font-semibold">contacter pour vos projets</span>,
          nous pouvons également <span className="text-blue-400 font-semibold">collaborer </span> 
          sur des idées créatives et innovantes.
        </p>

        <motion.a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition relative overflow-hidden"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 10px rgba(59,130,246,0.7)",
          }}
        >
          Me contacter
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
