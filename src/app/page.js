import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <div className="min-h-full">
        <div className="container mx-auto px-4 py-16 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-[#C81064] to-purple-500 text-transparent bg-clip-text">
            Trasforma le tue idee in realtà
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/30 p-6 rounded-xl border border-[#C81064]/30 hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-[#C81064] mb-4">
                Prototipazione Rapida
              </h3>
              <p className="text-gray-300">
                Dal concept al prototipo realizziamo i tuoi progetti con
                precisione millimetrica.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl border border-[#C81064]/30 hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-[#C81064] mb-4">
                Stampa 3D Professionale
              </h3>
              <p className="text-gray-300">
                Utilizziamo tecnologie all'avanguardia per garantire risultati
                di alta qualità in ogni progetto.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl border border-[#C81064]/30 hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-[#C81064] mb-4">
                Personalizzazione
              </h3>
              <p className="text-gray-300">
                Ogni progetto è unico. Realizziamo le tue idee su misura, dal
                design alla produzione.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              I Nostri Servizi
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
         
              <div className="bg-gradient-to-br flex flex-col  from-black/40 to-[#C81064]/20 p-8 rounded-xl backdrop-blur-sm">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-left">
                    Settori di Applicazione
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="text-left">• Automotive e Meccanica</li>
                    <li className="text-left"> • Home design e Architettura</li>
                    <li className="text-left">• Arte e Scultura</li>
                    <li className="text-left">• Gadget e oggettistica</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br flex flex-col  from-black/40 to-[#C81064]/20 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl text-left font-bold mb-4">
                  Materiali Disponibili
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li  className="text-left">• PLA - PETG</li>
                  <li  className="text-left">• ABS - ASA </li>
                  <li  className="text-left">• PC - PP - PA</li>
                  <li  className="text-left">• TPU</li>
                  <li className="text-left">
                    • Materiali tecnici caricati con fibre di vetro o carbonio{" "}
                  </li>
                </ul>
                <Link
                  href="/history#materials"
                  className="px-8 mt-4 py-3 border-2 border-[#C81064] hover:bg-[#C81064]/10 rounded-full font-bold transition-all transform hover:scale-105"
                >
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main> */}
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
