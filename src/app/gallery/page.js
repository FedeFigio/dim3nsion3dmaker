"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: "/placeholder.svg", title: "Stampa 3D Architettonica" },
    { id: 2, src: "/placeholder.svg", title: "Prototipo Industriale" },
    { id: 3, src: "/placeholder.svg", title: "Modello Artistico" },
    { id: 4, src: "/placeholder.svg", title: "Componente Meccanico" },
    { id: 5, src: "/placeholder.svg", title: "Design Personalizzato" },
    { id: 6, src: "/placeholder.svg", title: "Oggetto Funzionale" },
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-slate-800 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Alcune delle Nostre Creazioni
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl p-2"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Gallery;