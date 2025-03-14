import { Orbitron } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} antialiased min-h-screen flex flex-col`}>
        <header>
          <Navbar />
        </header>
        <div className="grow  bg-gradient-to-b from-gray-900 to-black">{children}</div>
        <Footer />
      </body>
    </html>
  );
}