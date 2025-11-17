import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Monitor, PenTool } from "lucide-react"; // Icônes stylées

const Skills = () => {
  const skills = [
    { name: "HTML / CSS / Boostrap", level: "Avancé" },
    { name: "React & Tailwind CSS", level: "Bon niveau" },
    { name: "Laravel / PHP", level: "Intermédiaire" },
    { name: "UI / UX Design", level: "Créatif" },
    { name: "Figma / Canva", level: "Très bon" },
  ];

  const services = [
    {
      icon: <Code size={40} className="text-blue-500" />,
      title: "Développement Web",
      desc: "Création de sites modernes, rapides et adaptatifs avec React, Laravel et Tailwind CSS.",
    },
    {
      icon: <Palette size={40} className="text-pink-500" />,
      title: "Graphisme",
      desc: "Conception de visuels professionnels et attractifs : logos, affiches, bannières, flyers...",
    },
    {
      icon: <Monitor size={40} className="text-green-500" />,
      title: "UI / UX Design",
      desc: "Création d’interfaces intuitives et agréables, centrées sur l’expérience utilisateur.",
    },
  ];

  return (
    <section id="competences" className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            Mes Compétences & Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Voici un aperçu de mes compétences techniques et des services que je propose.
          </p>
        </motion.div>

        {/* Bloc compétences */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Compétences techniques */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Compétences techniques</h3>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
