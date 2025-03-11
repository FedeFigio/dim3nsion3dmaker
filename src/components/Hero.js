import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden shadow-xl shadow-[#c81064]">
      {/* Background con effetto parallax */}
      <div className="absolute inset-0 opacity-60">
        <img 
          src="/hero-4.png" 
          className="h-full w-full object-cover scale-110 animate-slow-zoom"
          alt="3D Printing Background" 
        />
      </div>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent "></div>

      {/* Contenuto principale */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center">
        {/* Logo con effetto glow */}
        <div className="w-4/5 md:w-2/3 mb-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C81064] via-purple-500 to-[#C81064] rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          {/* <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-4 flex justify-center items-center">
            <img 
              src="/logo-8.png" 
              className="h-[150px] md:h-[200px] object-contain animate-float"
              alt="Dim3nsion3d Maker Logo" 
            />
          </div> */}
        </div>

        {/* Testo e CTA */}
        <div className="text-center text-white space-y-14">
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-[#C81064] to-purple-500 text-transparent bg-clip-text animate-gradient">
            DIMENSION 3D MAKER
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Stampa 3D professionale per prototipazione rapida e produzione su misura
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/servizi" className="px-8 py-3 bg-[#C81064] hover:bg-[#C81064]/80 rounded-full font-bold transition-all transform hover:scale-105">
              Scopri i Servizi
            </Link>
            <Link href="/contatti" className="px-8 py-3 border-2 border-[#C81064] hover:bg-[#C81064]/10 rounded-full font-bold transition-all transform hover:scale-105">
              Contattaci
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
