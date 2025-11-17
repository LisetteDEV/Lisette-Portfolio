import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-white">
          Lisette
        </h1>

        {/* NAV LINKS (grands écrans uniquement) */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#accueil" className="hover:text-blue-400">Accueil</a></li>
          <li><a href="#apropos" className="hover:text-blue-400">À propos</a></li>
          <li><a href="#projets" className="hover:text-blue-400">Projets</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* bouton menu burger (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-gray-800 text-white"
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white">
            <li><a href="#accueil" onClick={toggleMenu}>Accueil</a></li>
            <li><a href="#apropos" onClick={toggleMenu}>À propos</a></li>
            <li><a href="#projets" onClick={toggleMenu}>Projets</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
