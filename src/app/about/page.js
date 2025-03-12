"use client";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Alberto Mascolo",
      role: "Founder & 3D Designer",
      description: "Esperto di modellazione 3D con 5 anni di esperienza",
      image: "/face.jpg"
    },
    {
      name: "Laura Bianchi",
      role: "Technical Specialist",
      description: "Specialista in ottimizzazione dei processi di stampa 3D",
      image: "/face.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Chi Siamo
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-16"
        >
          <p className="text-lg text-gray-200 leading-relaxed">
            Servizio di progettazione e stampa 3D. Nasciamo come hobbisti in
            questo settore con la passione per la stampa 3D. Ci stiamo evolvendo,
            ampliando sempre più il nostro laboratorio già ben attrezzato di
            numerose stampanti e scanner 3D per tutte le esigenze.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">La Nostra Missione</h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-gray-200">
              Il nostro obiettivo è rendere la tecnologia di stampa 3D accessibile a tutti,
              offrendo soluzioni innovative e personalizzate per ogni esigenza.
              Crediamo nella potenza della creatività unita alla tecnologia.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Il Nostro Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-300 text-center mb-3">{member.role}</p>
                <p className="text-gray-300 text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16 text-center"
        >
          <button               className="px-8 py-3 bg-[#C81064] hover:bg-[#C81064]/80 rounded-full font-bold transition-all transform hover:scale-105"
          >
            Lavora Con Noi
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;