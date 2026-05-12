import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [routeLocked, setRouteLocked] = useState(false);

  useEffect(() => {
    // Simulate radar scanning for 3.5 seconds, then lock the route
    const timer = setTimeout(() => {
      setRouteLocked(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f1ea] overflow-hidden">
      <Navbar />

      <main className="relative flex-1 min-h-screen overflow-hidden">
        {/* --- BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2500&auto=format&fit=crop"
            alt="Luxury Escape"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.28))]" />
          <div className="absolute top-[10%] right-[10%] w-[650px] h-[650px] bg-[#C5A059]/10 blur-[150px] rounded-full" />
        </div>

        <div className="absolute top-[10%] right-[8%] z-[1] pointer-events-none">
          <h1 className="font-serif text-[180px] md:text-[340px] leading-none tracking-[-0.08em] text-white/[0.04]">
            404
          </h1>
        </div>

        <div className="absolute left-[7%] top-0 bottom-0 w-px bg-white/[0.06]" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-white/[0.06]" />

        {/* --- CONTENT --- */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full pt-32 pb-20">
            
            {/* --- LEFT CONTENT --- */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-[1px] bg-[#C5A059]" />
                <span className="uppercase tracking-[0.38em] text-[10px] text-white/70">Lost Destination</span>
              </div>

              <h1 className="font-serif text-5xl md:text-7xl leading-[0.92] tracking-[-0.06em] text-white mb-8 drop-shadow-[0_5px_30px_rgba(0,0,0,0.45)]">
                This Escape
                <br />
                <span className="italic text-[#C5A059]">Doesn't Exist</span>
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light mb-14 max-w-xl drop-shadow-[0_3px_15px_rgba(0,0,0,0.35)]">
                Somewhere between winding roads and hidden retreats, this destination disappeared from the map. Continue exploring curated luxury journeys.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/" className="group relative overflow-hidden flex items-center justify-center gap-4 h-16 px-10 rounded-full bg-[#1A2E25] text-white shadow-[0_20px_50px_rgba(26,46,37,0.35)] hover:shadow-[0_30px_70px_rgba(26,46,37,0.45)] hover:-translate-y-[2px] transition-all duration-500">
                  <span className="absolute left-[-120%] top-0 h-full w-[60%] rotate-[24deg] bg-white/20 blur-2xl transition-all duration-1000 group-hover:left-[140%]" />
                  <ArrowLeft size={16} strokeWidth={2.2} className="relative z-10 transition-transform duration-500 group-hover:-translate-x-1" />
                  <span className="relative z-10 uppercase tracking-[0.32em] text-xs">Return Home</span>
                </Link>

                <Link to="/vehicles" className="group relative overflow-hidden flex items-center justify-center gap-4 h-16 px-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-500">
                  <span className="absolute left-[-120%] top-0 h-full w-[60%] rotate-[24deg] bg-white/20 blur-2xl transition-all duration-1000 group-hover:left-[140%]" />
                  <span className="relative z-10 uppercase tracking-[0.32em] text-xs">Explore Fleet</span>
                </Link>
              </div>
            </div>

            {/* --- RIGHT: THE RADAR COMPASS --- */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-[350px] h-[350px] blur-[120px] rounded-full transition-colors duration-1000 ${routeLocked ? "bg-[#C5A059]/40" : "bg-[#C5A059]/15"}`} />
              </div>

              {/* FLOATING AMBIENT SPOTS */}
              <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-[#C5A059]/60 blur-[2px] animate-pulse" />
              <div className="absolute bottom-[20%] left-[25%] w-4 h-4 rounded-full bg-[#C5A059]/40 blur-[3px] animate-pulse delay-700" />

              <div className="relative">
                {/* TOOLTIP */}
                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 z-30 transition-all duration-700 ${routeLocked ? "-translate-y-2" : "translate-y-0"}`}>
                  <div className={`relative px-5 py-3 rounded-full bg-black/50 backdrop-blur-xl border uppercase tracking-[0.32em] text-[10px] whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-700 ${routeLocked ? "border-[#C5A059] text-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.3)]" : "border-white/10 text-white/80"}`}>
                    {routeLocked ? "Safe Route Locked" : "Scanning Territory"}
                    <div className={`absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 rotate-45 bg-black/50 border-r border-b transition-colors duration-700 ${routeLocked ? "border-[#C5A059]" : "border-white/10"}`} />
                  </div>
                </div>

                {/* THE RADAR & MAP CONTAINER */}
                <div className={`relative overflow-hidden rounded-full border bg-white/[0.05] backdrop-blur-2xl p-14 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-colors duration-1000 ${routeLocked ? "border-[#C5A059]/40" : "border-white/10"}`}>
                  
                  {/* Outer 320px Ring - This holds the Radar and the SVG Map */}
                  <div className={`w-[320px] h-[320px] rounded-full border relative flex items-center justify-center transition-colors duration-1000 ${routeLocked ? "border-[#C5A059]/30" : "border-white/[0.08]"}`}>
                    
                    {/* SPINNING RADAR SWEEP (Fades out when route is locked) */}
                    <div className={`absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(197,160,89,0.3)_360deg)] animate-[spin_2.5s_linear_infinite] transition-opacity duration-1000 ${routeLocked ? "opacity-0" : "opacity-100"}`} />

                    {/* SVG ROUTE CANVAS */}
                    <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ${routeLocked ? "opacity-100" : "opacity-0"}`}>
                      <svg className="w-full h-full" viewBox="0 0 320 320">
                        {/* The Drawing Line */}
                        <polyline
                          points="60,120 200,70 260,220 120,260"
                          fill="none"
                          stroke="#C5A059"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            strokeDasharray: 800,
                            strokeDashoffset: routeLocked ? 0 : 800,
                            transition: "stroke-dashoffset 2.5s ease-in-out 0.5s"
                          }}
                        />
                        {/* The Spotted Dots (Pings in sequentially) */}
                        <circle cx="60" cy="120" r="5" fill="#C5A059" className={`transition-transform duration-500 delay-[500ms] ${routeLocked ? "scale-100" : "scale-0"} origin-[60px_120px]`} />
                        <circle cx="60" cy="120" r="12" fill="none" stroke="#C5A059" strokeWidth="1" className={`transition-all duration-700 delay-[500ms] ${routeLocked ? "scale-150 opacity-0" : "scale-0 opacity-100"} origin-[60px_120px]`} />

                        <circle cx="200" cy="70" r="5" fill="#C5A059" className={`transition-transform duration-500 delay-[1200ms] ${routeLocked ? "scale-100" : "scale-0"} origin-[200px_70px]`} />
                        <circle cx="200" cy="70" r="12" fill="none" stroke="#C5A059" strokeWidth="1" className={`transition-all duration-700 delay-[1200ms] ${routeLocked ? "scale-150 opacity-0" : "scale-0 opacity-100"} origin-[200px_70px]`} />

                        <circle cx="260" cy="220" r="5" fill="#C5A059" className={`transition-transform duration-500 delay-[1900ms] ${routeLocked ? "scale-100" : "scale-0"} origin-[260px_220px]`} />
                        <circle cx="260" cy="220" r="12" fill="none" stroke="#C5A059" strokeWidth="1" className={`transition-all duration-700 delay-[1900ms] ${routeLocked ? "scale-150 opacity-0" : "scale-0 opacity-100"} origin-[260px_220px]`} />

                        <circle cx="120" cy="260" r="5" fill="#C5A059" className={`transition-transform duration-500 delay-[2500ms] ${routeLocked ? "scale-100" : "scale-0"} origin-[120px_260px]`} />
                        <circle cx="120" cy="260" r="12" fill="none" stroke="#C5A059" strokeWidth="1" className={`transition-all duration-700 delay-[2500ms] ${routeLocked ? "scale-150 opacity-0" : "scale-0 opacity-100"} origin-[120px_260px]`} />
                      </svg>
                    </div>

                    {/* Middle 240px Ring */}
                    <div className={`w-[240px] h-[240px] rounded-full border flex items-center justify-center transition-colors duration-1000 ${routeLocked ? "border-[#C5A059]/40" : "border-white/[0.08]"}`}>
                      
                      {/* Inner 170px Ring */}
                      <div className={`w-[170px] h-[170px] rounded-full border flex items-center justify-center relative z-20 transition-colors duration-1000 bg-black/20 backdrop-blur-sm ${routeLocked ? "border-[#C5A059]/60" : "border-white/[0.08]"}`}>
                        
                        <Compass
                          size={70}
                          strokeWidth={1}
                          className={`text-[#C5A059] transition-all ease-out duration-1000 ${
                            routeLocked 
                              ? "rotate-[45deg] scale-100 drop-shadow-[0_0_15px_rgba(197,160,89,0.8)] opacity-100" 
                              : "animate-[spin_4s_linear_infinite] opacity-40"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}