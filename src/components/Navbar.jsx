import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Animation d’ouverture/fermeture
  const menuVariants = {
    closed: { y: "-100%", opacity: 0 },
    open: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md text-white shadow-lg">
      <div className="flex justify-between items-center px-6 py-5 max-w-6xl mx-auto">
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-tight">Lisette</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-10 font-medium text-lg">
          <li><a href="#accueil" className="hover:text-blue-400 transition">Accueil</a></li>
          <li><a href="#apropos" className="hover:text-blue-400 transition">À propos</a></li>
          <li><a href="#projets" className="hover:text-blue-400 transition">Projets</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Bouton burger mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-3 rounded-xl bg-gray-800/80 hover:bg-gray-700 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENU MOBILE FIXE (ne se ferme QUE sur le ✕) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 top-16 bg-gray-900/99 backdrop-blur-xl z-40 md:hidden flex flex-col"
          >
            {/* Bouton fermer en haut à droite */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <X size={28} />
              </button>
            </div>

            {/* Liens centrés verticalement */}
            <ul className="flex-1 flex flex-col items-center justify-center space-y-10 text-3xl font-medium">
              <li><a href="#accueil" className="hover:text-blue-400 transition">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-blue-400 transition">À propos</a></li>
              <li><a href="#projets" className="hover:text-blue-400 transition">Projets</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;