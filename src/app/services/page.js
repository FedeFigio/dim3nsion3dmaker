"use client";
import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    title: "Progettazione 3D",
    description: "Sviluppo di modelli 3D personalizzati secondo le tue specifiche",
    icon: "🎨",
  },
  {
    title: "Scansione 3D",
    description: "Digitalizzazione di oggetti reali con scanner 3D professionali",
    icon: "📷",
  },
  {
    title: "Stampa 3D",
    description: "Realizzazione di prototipi e oggetti finiti con diverse tecnologie di stampa",
    icon: "🖨️",
  },
  {
    title: "Consulenza",
    description: "Supporto tecnico e consulenza per progetti di stampa 3D",
    icon: "💡",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          I Nostri Servizi
        </h1>
        <p className="text-center text-lg text-gray-200 mb-16">
          Servizio di progettazione e stampa 3D. Nasciamo come hobbisti in
          questo settore con la passione per la stampa 3D. Ci stiamo evolvendo,
          ampliando sempre più il nostro laboratorio già ben attrezzato di
          numerose stampanti e scanner 3D per tutte le esigenze.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <button              className="px-8 py-3 bg-[#C81064] hover:bg-[#C81064]/80 rounded-full font-bold transition-all transform hover:scale-105"
          >
            Contattaci per un Preventivo
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;