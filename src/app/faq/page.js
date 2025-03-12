"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Che materiali utilizzate per la stampa 3D?",
      answer: "Utilizziamo diversi materiali come PLA, PETG, ABS, TPU e resine. La scelta del materiale dipende dalle specifiche esigenze del progetto e dall'utilizzo finale del prodotto."
    },
    {
      question: "Quanto tempo richiede una stampa 3D?",
      answer: "I tempi di stampa variano in base alla complessità del modello, alle dimensioni e alla qualità richiesta. Mediamente, possono andare da poche ore a diversi giorni per progetti più complessi."
    },
    {
      question: "Posso richiedere modifiche al modello 3D durante la progettazione?",
      answer: "Assolutamente sì! Lavoriamo a stretto contatto con i clienti e accettiamo modifiche durante tutto il processo di progettazione fino all'approvazione finale."
    },
    {
      question: "Offrite un servizio di scansione 3D di oggetti esistenti?",
      answer: "Sì, disponiamo di scanner 3D professionali per la digitalizzazione di oggetti esistenti, che possono poi essere modificati o replicati tramite stampa 3D."
    },
    {
      question: "Quali sono i tempi di consegna?",
      answer: "I tempi di consegna dipendono dalla complessità del progetto e dal carico di lavoro attuale. Generalmente, cerchiamo di completare i progetti entro 1-2 settimane dalla conferma dell'ordine."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Domande Frequenti
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-white text-2xl"
                >
                  ↓
                </motion.span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Non hai trovato la risposta che cercavi?
          </p>
          <button               className="px-8 py-3 bg-[#C81064] hover:bg-[#C81064]/80 rounded-full font-bold transition-all transform hover:scale-105"
          >
            Contattaci
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Faq;