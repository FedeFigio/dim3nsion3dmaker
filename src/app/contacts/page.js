"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-slate-800 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center text-white mb-6">CONTATTACI</h1>
        <p className="text-lg text-center mb-12 text-[#C81064] max-w-2xl mx-auto">
          Hai domande o vuoi saperne di più? CONTATTACI e ti risponderemo il prima possibile, 
          cercheremo insieme la soluzione più idonea alle tue esigenze partendo da uno studio di fattibilità.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto"
        >
          <div className="space-y-8">
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center text-white"
            >
              <FaMapMarkerAlt className="text-[#C81064] text-3xl mr-4" />
              <p className="text-lg">Cassano Spinola, 15063 (AL)</p>
            </motion.div>
            
            <motion.a
              whileHover={{ x: 10 }}
              href="https://wa.me/393792240111"
              className="flex items-center text-white hover:text-[#C81064] transition-colors"
            >
              <FaWhatsapp className="text-[#C81064] text-3xl mr-4" />
              <p className="text-lg">+39 3792240111</p>
            </motion.a>
            
            <motion.a
              whileHover={{ x: 10 }}
              href="tel:+393792240111"
              className="flex items-center text-white hover:text-[#C81064] transition-colors"
            >
              <FaPhone className="text-[#C81064] text-3xl mr-4" />
              <p className="text-lg">+39 3792240111</p>
            </motion.a>
            
            <motion.a
              whileHover={{ x: 10 }}
              href="mailto:Dim3nsion3dmaker@gmail.com"
              className="flex items-center text-white hover:text-[#C81064] transition-colors"
            >
              <FaEnvelope className="text-[#C81064] text-3xl mr-4" />
              <p className="text-lg">Dim3nsion3dmaker@gmail.com</p>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contacts;