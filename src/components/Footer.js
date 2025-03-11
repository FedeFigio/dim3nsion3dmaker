import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-black to-[#C81064]/10">
      {/* Top border decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C81064] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-[#C81064] to-white bg-clip-text text-transparent">
              CONTATTI
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <svg className="w-6 h-6 mt-1 text-[#C81064] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-white/80 group-hover:text-white transition-colors">
                  Cassano Spinola, 15063 (AL)
                </span>
              </div>
              <div className="flex items-start space-x-3 group">
                <svg className="w-6 h-6 mt-1 text-[#C81064] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div className="space-y-1">
                  <p className="text-white/80 group-hover:text-white transition-colors">
                    WhatsApp: +39 3792240111
                  </p>
                  <p className="text-white/80 group-hover:text-white transition-colors">
                    Telefono: +39 3792240111
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <svg className="w-6 h-6 mt-1 text-[#C81064] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-white/80 group-hover:text-white transition-colors">
                  dim3nsion3dmaker@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-[#C81064] to-white bg-clip-text text-transparent">
              SEGUICI
            </h3>
            <p className="text-white/80">
              Seguici su tutti i social per rimanere aggiornato
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/dim3nsion3dmaker" target="_blank" rel="noopener noreferrer"
                className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C81064] to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
                <img src="/instagram.svg" className="w-8 h-8 relative z-10 transition-transform group-hover:scale-110" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567847644220" target="_blank" rel="noopener noreferrer"
                className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C81064] to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
                <img src="/facebook.svg" className="w-8 h-8 relative z-10 transition-transform group-hover:scale-110" alt="Facebook" />
              </a>
              <a href="https://www.tiktok.com/@dim3nsion3dmaker" target="_blank" rel="noopener noreferrer"
                className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C81064] to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
                <img src="/tiktok.svg" className="w-8 h-8 relative z-10 transition-transform group-hover:scale-110" alt="TikTok" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© 2024 Dim3nsion3d Maker. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer