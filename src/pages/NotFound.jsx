import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/common/Button";
import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Navbar />

      <main className="flex-1 relative flex items-center justify-center pt-32 pb-24 overflow-hidden min-h-[80vh]">
        
        {/* --- CINEMATIC BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2500&auto=format&fit=crop" 
            alt="Uncharted Territory"
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
          />
          {/* Deep vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-[#0A0A0A]"></div>
          {/* Central gold ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxor-gold/10 blur-[150px] rounded-full pointer-events-none"></div>
        </div>

        {/* --- EDITORIAL CONTENT --- */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Floating Compass Icon */}
          <div className="w-20 h-20 bg-white/5 border border-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-luxor-gold mb-8 shadow-[0_0_50px_rgba(197,160,89,0.15)]">
            <Compass size={36} strokeWidth={1.5} />
          </div>

          <h2 className="text-luxor-gold font-sans font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-6 drop-shadow-md">
            Error 404
          </h2>

          <h1 className="font-serif font-bold text-5xl md:text-7xl text-white leading-tight mb-6 drop-shadow-2xl">
            Uncharted <br /> <span className="italic font-light text-stone-400">Territory.</span>
          </h1>

          <p className="text-stone-400 font-medium text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Even the most seasoned explorers occasionally wander off the map. The sanctuary or journey you are seeking remains undiscovered.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="gold" className="w-full sm:w-auto min-w-[220px]">
                <ArrowLeft size={16} strokeWidth={2.5} className="mr-2" />
                Return to Base
              </Button>
            </Link>
            
            <Link to="/vehicles" className="w-full sm:w-auto">
              <Button variant="glass" className="w-full sm:w-auto min-w-[220px] text-white hover:text-stone-900 border-white/20 bg-white/5">
                Explore the Fleet
              </Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}