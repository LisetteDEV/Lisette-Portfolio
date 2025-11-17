import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Disparaît/reapparaît au scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) setShowNav(false);
      else setShowNav(true);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Variants menu mobile
  const menuVariants = {
    closed: { y: "-100%", opacity: 0 },
    open: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 }
    })
  };

  const links = ["Accueil", "Àpropos", "Projets", "Contact"];

  return (
    <motion.nav
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-blue-400">Lisette</h1>

        {/* Burger mobile légèrement à droite du logo */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-3 rounded-lg bg-blue-600 hover:bg-blue-500 z-50 shadow-lg ml-6"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-lg">
          {links.map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-blue-500 transition duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {links.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl font-semibold text-white hover:text-blue-400 transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
