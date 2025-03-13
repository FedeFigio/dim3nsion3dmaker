"use client";
import { motion } from "framer-motion";
import React from "react";

const History = () => {
  const teamMembers = [
    {
      name: "Alberto Mascolo",
      role: "Founder & 3D Designer",
      description: "Esperto di modellazione 3D e processi di stampa",
      image: "/face.jpg",
    },
    // {
    //   name: "Marika Poti",
    //   role: "Technical Specialist",
    //   description: "Specialista in ottimizzazione dei processi di stampa 3D",
    //   image: "/face.jpg",
    // },
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-slate-800 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center text-white mb-6">
          UN PÒ DI STORIA SULLA STAMPA 3D
        </h1>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
            La tecnologia di stampa 3D FDM (Fused Deposition Modeling) ha
            segnato una svolta nel 1989, quando Scott Crump, cofondatore di
            Stratasys, ne brevettò il processo. Questa innovativa tecnica si
            basa sull'estrusione di filamenti termoplastici attraverso un ugello
            riscaldato, costruendo oggetti strato dopo strato.
          </p>

          <p className="text-lg">
            Durante gli anni '90, Stratasys ha commercializzato le prime
            stampanti FDM, inizialmente destinate esclusivamente all'uso
            industriale. La vera rivoluzione è arrivata nel 2009 con la scadenza
            del brevetto FDM, che ha aperto le porte a progetti open-source come
            RepRap, rendendo questa tecnologia accessibile al grande pubblico.
          </p>

          <p className="text-lg">
            Il decennio 2010-2020 ha visto una rapida evoluzione: l'aumento
            della concorrenza ha portato a una significativa riduzione dei
            prezzi, mentre la qualità continuava a migliorare. Sono stati
            introdotti nuovi materiali avanzati come PLA, ABS, PETG, TPU e
            compositi con fibra di carbonio, legno e metallo. Innovazioni
            tecniche come il doppio estrusore, i letti riscaldati e i sistemi di
            autolivellamento hanno reso le stampanti più affidabili e versatili.
          </p>

          <p className="text-lg">
            Oggi, la tecnologia FDM continua a evolversi con soluzioni sempre
            più sofisticate. Le stampanti moderne incorporano tecnologie come
            l'input shaping e il pressure advance per ridurre le vibrazioni e
            migliorare la qualità di stampa. Si stanno sviluppando sistemi di
            automazione avanzati, come il cambio utensile automatico (AMS) e le
            stampanti a filamento continuo.
          </p>

          <p className="text-lg">
            L'impatto della stampa 3D FDM si estende ben oltre il settore
            hobbistico, trovando applicazioni cruciali nella prototipazione
            industriale, nell'edilizia, nella medicina e nella produzione in
            scala. Questa tecnologia continua a evolversi, promettendo un futuro
            di produzione sempre più personalizzata ed efficiente.
          </p>
        </div>
        <div id="materials" className="mb-16"></div>
        <h2  className="text-3xl font-bold text-white mb-6">
          QUALCHE INFO SUI MATERIALI
        </h2>

        <div className="space-y-6 text-gray-300">
          <div className="text-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              PLA - PETG
            </h3>
            <p>
              Il PLA (Acido Polilattico) è il materiale più comune nella stampa
              3D, biodegradabile e facile da stampare. Ideale per prototipi e
              oggetti decorativi. Il PETG combina la facilità di stampa del PLA
              con maggiore resistenza meccanica e termica, perfetto per parti
              funzionali e contenitori alimentari.
            </p>
          </div>

          <div className="text-lg">
            <h3 className="text-xl font-semibold text-white mb-2">ABS - ASA</h3>
            <p>
              L'ABS offre eccellente resistenza meccanica e termica, ideale per
              parti funzionali e automotive. L'ASA è simile all'ABS ma con
              superiore resistenza UV e agli agenti atmosferici, perfetto per
              applicazioni outdoor.
            </p>
          </div>

          <div className="text-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              PC - PP - PA
            </h3>
            <p>
              Il Policarbonato (PC) offre resistenza eccezionale agli impatti e
              alte temperature. Il Polipropilene (PP) è leggero e resistente
              alla fatica. Il Poliammide (PA/Nylon) combina resistenza meccanica
              e chimica, ideale per ingranaggi e parti tecniche.
            </p>
          </div>

          <div className="text-lg">
            <h3 className="text-xl font-semibold text-white mb-2">TPU</h3>
            <p>
              Il TPU (Poliuretano Termoplastico) è un materiale flessibile ed
              elastico, perfetto per parti che richiedono elasticità come
              guarnizioni, suole di scarpe e protezioni antiurto.
            </p>
          </div>

          <div className="text-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Materiali Compositi
            </h3>
            <p>
              I materiali caricati con fibre di vetro o carbonio offrono
              prestazioni meccaniche superiori. Questi compositi combinano la
              facilità di stampa delle plastiche con la rigidità e resistenza
              delle fibre, ideali per applicazioni ingegneristiche e parti
              strutturali.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default History;
