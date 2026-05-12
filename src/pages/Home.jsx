import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BookingEngine from "../components/booking/BookingEngine";
import VehicleCard from "../components/cards/VehicleCard";
import CampsiteCard from "../components/cards/CampsiteCard";
import Showcase from "../components/home/Showcase"; 
import Testimonials from "../components/home/Testimonials"; // <--- Import Testimonials
import { featuredVehicles, featuredCampsites } from "../data/mockData";
import { cn } from "../lib/utils";

const HERO_IMAGES = [
  "https://images.pexels.com/photos/30131061/pexels-photo-30131061.jpeg",
  "https://images.pexels.com/photos/13061626/pexels-photo-13061626.jpeg",
  "https://images.pexels.com/photos/20817312/pexels-photo-20817312.jpeg"
];

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); 
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      
      <Navbar />
      
      {/* --- CINEMATIC EDITORIAL HERO --- */}
      <main className="relative min-h-[90vh] flex flex-col justify-center pb-32 z-30">
        
        <div className="absolute inset-0 z-0 bg-[#111] overflow-hidden">
          {HERO_IMAGES.map((img, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 w-full h-full transition-all duration-[3000ms] ease-in-out",
                index === currentBg ? "opacity-100 scale-100" : "opacity-0 scale-105"
              )}
            >
              <img src={img} alt="Luxury Travel" className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#1A1A18]/90"></div>
          <div className="absolute bottom-20 left-0 w-full h-[60vh] bg-gradient-to-t from-[#C5A059]/20 to-transparent blur-3xl mix-blend-overlay pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 md:pt-40">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-luxor-gold"></div>
              <h2 className="text-luxor-gold font-sans font-bold tracking-[0.4em] uppercase text-xs md:text-sm drop-shadow-md">
                Uncharted Elegance
              </h2>
            </div>
            
            <h1 className="font-serif font-bold text-6xl sm:text-7xl md:text-[100px] text-white leading-[1.05] mb-8 drop-shadow-2xl">
              Where the Road <br />
              <span className="italic font-light text-[#E8E1D5]">Meets</span> Luxury.
            </h1>
            
            <div className="border-l-2 border-luxor-gold/60 pl-6 py-2 max-w-2xl">
              <p className="font-sans font-medium text-stone-200 text-lg md:text-xl leading-relaxed drop-shadow-lg">
                Embrace the wild without leaving comfort behind. Curated glamping sanctuaries and premium caravan escapes designed for the adventurous soul.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 px-6 z-40">
          <BookingEngine />
        </div>
      </main>

      {/* --- CINEMATIC SHOWCASE REVEAL --- */}
      <div className="relative z-20 bg-[#030303] pt-32 md:pt-40">
        <Showcase />
      </div>

      {/* --- STANDARD GRIDS --- */}
      <section className="py-24 bg-[#F2EFE9] border-t border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-luxor-gold font-sans font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Premium Fleet
            </h2>
            <h3 className="font-serif font-bold text-4xl md:text-5xl text-stone-800">New Arrivals</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-luxor-gold font-sans font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Curated Escapes
            </h2>
            <h3 className="font-serif font-bold text-4xl md:text-5xl text-stone-800">Handpicked Stays</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredCampsites.map(camp => (
              <CampsiteCard key={camp.id} campsite={camp} />
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS & COUNTER STRIP --- */}
      <Testimonials />

      <Footer />
    </div>
  );
}