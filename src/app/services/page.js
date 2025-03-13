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
    description: "Realizzazione di prototipi e oggetti finiti",
    icon: "🖨️",
  },
  {
    title: "Analisi",
    description: "Studio di fattibilità di ogni progetto secondo le tecnologie da noi utilizzate",
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


      </motion.div>
    </div>
  );
};

export default Services;