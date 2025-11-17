import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        setSent(true);
        form.reset();
      }
    });
  };

  // Animation pour les lignes contact
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          className="text-4xl font-bold mb-8 text-blue-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contactez-moi
        </motion.h2>

        {/* ---------- FORMULAIRE ---------- */}
        {!sent ? (
          <motion.form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/manlgzdj"
            method="POST"
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              name="name"
              type="text"
              placeholder="Votre nom"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />
            <input
              name="email"
              type="email"
              placeholder="Votre email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Votre message..."
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
            >
              Envoyer
            </button>
          </motion.form>
        ) : (
          <p className="text-green-500 text-lg font-medium mt-6">
            ✅ Merci ! Votre message a bien été envoyé.
          </p>
        )}

        {/* ---------- SECTION CONTACT DIRECT ---------- */}
        <motion.div
          className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow light effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-2xl opacity-40 pointer-events-none" />

          <h3 className="text-2xl font-semibold mb-6 text-blue-600 relative z-10">
            Mes contacts directs
          </h3>

          <motion.div
            className="grid md:grid-cols-2 gap-6 relative z-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Téléphone */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 p-5 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-blue-500/30 transition hover:scale-[1.03] border border-transparent hover:border-blue-500/40"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-3 bg-blue-600 text-white rounded-full shadow-lg">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold">Téléphone</p>
                <p className="text-gray-700 dark:text-gray-300">
                +229  0154306699
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 p-5 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-blue-500/30 transition hover:scale-[1.03] border border-transparent hover:border-blue-500/40"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-3 bg-blue-600 text-white rounded-full shadow-lg">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold">Email</p>
                <p className="text-gray-700 dark:text-gray-300">
                  obognonlisette@gmail.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
