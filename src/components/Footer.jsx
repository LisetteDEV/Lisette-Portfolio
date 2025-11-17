import React from "react";
import { Facebook, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // 📱 Icône WhatsApp

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
        
        {/* Texte */}
        <p className="text-sm">
          © {new Date().getFullYear()} Lisette OBOGNON — Tous droits réservés.
        </p>

        {/* Réseaux sociaux */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/gwladys.akpo.18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://wa.me/2290154306699" // 🔹 remplace par ton vrai numéro au format international sans +
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href="mailto:obognonlisette@gmail.com"
            className="hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
