import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import VehicleCard from "../components/cards/VehicleCard";
import { featuredVehicles } from "../data/mockData";

import {
  MapPin,
  Search,
  Compass,
  Mountain,
  Waves,
  Trees,
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
  BatteryCharging
} from "lucide-react";

const ROAD_EXPERIENCES = [
  "Mountain Drives",
  "Desert Trails",
  "Coastal Roads",
  "Forest Routes",
  "Off-Grid Touring",
  "Weekend Escapes",
  "Luxury Expeditions",
  "Sunset Drives",
];

export default function Vehicles() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] overflow-x-hidden">
      <Navbar />

      {/* ---------------- CINEMATIC HERO ---------------- */}
      <section className="relative min-h-[100vh] overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2500&auto=format&fit=crop"
            alt="Luxury Caravan"
            className="w-full h-full object-cover brightness-[0.72] scale-105"
          />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-[#f6f3ee]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,210,140,0.2),transparent_40%)]" />

          {/* GOLDEN LIGHT */}
          <div className="absolute right-[5%] top-[15%] w-[500px] h-[500px] bg-luxor-gold/20 blur-[140px] rounded-full" />

          {/* ROAD ATMOSPHERE */}
          <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-[#f6f3ee] to-transparent" />

        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28">

          {/* LABEL */}
          <p className="text-white/75 uppercase tracking-[0.35em] text-[11px] mb-6 font-medium">
            Curated Luxury Fleet
          </p>

          {/* HEADING */}
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-[-0.05em] text-white max-w-5xl mb-8">

            Drive Beyond
            <br />

            <span className="italic text-[#f1d29b]">
              Ordinary Roads
            </span>

          </h1>

          {/* SUBTEXT */}
          <p className="max-w-2xl text-white/75 text-lg md:text-xl leading-relaxed font-light mb-16">

            Discover luxury caravans and premium expedition vehicles crafted for unforgettable journeys, cinematic road escapes, and immersive travel experiences.

          </p>

          {/* SEARCH DOCK */}
          <div className="relative max-w-6xl">

            {/* SHADOW */}
            <div className="absolute inset-0 bg-black/20 blur-[60px] rounded-[2rem]" />

            {/* DOCK */}
            <div className="relative backdrop-blur-2xl bg-white/70 border border-white/50 rounded-[2rem] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                {/* DESTINATION */}
                <div className="bg-white/70 rounded-2xl px-5 py-4 border border-white/60">

                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8f877d] mb-2">
                    Destination
                  </p>

                  <div className="flex items-center gap-3">

                    <MapPin
                      size={16}
                      className="text-luxor-gold"
                    />

                    <input
                      placeholder="Mountains, coast..."
                      className="bg-transparent w-full outline-none text-[#1f1f1f] font-medium"
                    />

                  </div>

                </div>

                {/* EXPERIENCE */}
                <div className="bg-white/70 rounded-2xl px-5 py-4 border border-white/60">

                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8f877d] mb-2">
                    Journey
                  </p>

                  <div className="flex items-center gap-3">

                    <Compass
                      size={16}
                      className="text-luxor-gold"
                    />

                    <input
                      placeholder="Road trip, off-grid..."
                      className="bg-transparent w-full outline-none text-[#1f1f1f] font-medium"
                    />

                  </div>

                </div>

                {/* TRAVELERS */}
                <div className="bg-white/70 rounded-2xl px-5 py-4 border border-white/60">

                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8f877d] mb-2">
                    Travelers
                  </p>

                  <input
                    placeholder="4 Explorers"
                    className="bg-transparent w-full outline-none text-[#1f1f1f] font-medium"
                  />

                </div>

                {/* BUTTON */}
                <button className="rounded-2xl bg-[#1f1f1f] hover:bg-black text-white transition-all duration-500 flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-xs">

                  <Search size={16} />

                  Explore Journeys

                </button>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- ROAD EXPERIENCE TAGS ---------------- */}
      <section className="py-10 border-b border-[#e7dfd4] bg-[#f6f3ee]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap gap-4 justify-center">

            {ROAD_EXPERIENCES.map((tag, idx) => (
              <div
                key={idx}
                className="bg-white/70 border border-[#e7dfd4] rounded-full px-5 py-3 text-sm text-[#5e584f] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >

                {tag}

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ---------------- FEATURED VEHICLE SHOWCASE ---------------- */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-16">

            <p className="text-luxor-gold uppercase tracking-[0.35em] text-[11px] mb-5">
              Featured Expedition
            </p>

            <h2 className="font-serif text-5xl md:text-7xl text-[#1f1f1f] leading-[0.95] tracking-[-0.05em]">

              Crafted For
              <span className="italic text-luxor-gold">
                {" "}Freedom
              </span>

            </h2>

          </div>

          {/* SHOWCASE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[3rem] min-h-[700px] shadow-[0_40px_100px_rgba(0,0,0,0.1)]">

              <img
                src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1800&auto=format&fit=crop"
                alt="Luxury Caravan"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* FLOATING BADGE */}
              <div className="absolute top-8 left-8 bg-white/70 backdrop-blur-xl border border-white/50 rounded-full px-5 py-3 shadow-xl">

                <p className="text-[10px] uppercase tracking-[0.28em] text-[#1f1f1f] font-medium">
                  Luxury Expedition Series
                </p>

              </div>

            </div>

            {/* CONTENT */}
            <div>

              <h3 className="font-serif text-5xl md:text-6xl leading-[0.95] tracking-[-0.04em] text-[#1f1f1f] mb-8">

                The Future Of
                <span className="italic text-luxor-gold">
                  {" "}Luxury Touring
                </span>

              </h3>

              <p className="text-[#666057] text-lg leading-relaxed mb-12">

                Engineered for cinematic road journeys, off-grid exploration, and immersive luxury escapes. Every detail is crafted to transform travel into an unforgettable lifestyle experience.

              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-5 mb-12">

                <div className="bg-white/70 border border-[#e7dfd4] rounded-[2rem] p-6">

                  <div className="w-12 h-12 rounded-2xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold mb-5">

                    <BatteryCharging size={20} />

                  </div>

                  <h4 className="text-[#1f1f1f] font-medium mb-2">
                    Off-Grid Power
                  </h4>

                  <p className="text-sm text-[#7a736a]">
                    Smart solar integrated energy system.
                  </p>

                </div>

                <div className="bg-white/70 border border-[#e7dfd4] rounded-[2rem] p-6">

                  <div className="w-12 h-12 rounded-2xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold mb-5">

                    <Shield size={20} />

                  </div>

                  <h4 className="text-[#1f1f1f] font-medium mb-2">
                    Terrain Response
                  </h4>

                  <p className="text-sm text-[#7a736a]">
                    Adaptive driving across every landscape.
                  </p>

                </div>

                <div className="bg-white/70 border border-[#e7dfd4] rounded-[2rem] p-6">

                  <div className="w-12 h-12 rounded-2xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold mb-5">

                    <Zap size={20} />

                  </div>

                  <h4 className="text-[#1f1f1f] font-medium mb-2">
                    Smart Interior
                  </h4>

                  <p className="text-sm text-[#7a736a]">
                    Ambient luxury living experience.
                  </p>

                </div>

                <div className="bg-white/70 border border-[#e7dfd4] rounded-[2rem] p-6">

                  <div className="w-12 h-12 rounded-2xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold mb-5">

                    <Sparkles size={20} />

                  </div>

                  <h4 className="text-[#1f1f1f] font-medium mb-2">
                    Panoramic Suite
                  </h4>

                  <p className="text-sm text-[#7a736a]">
                    Immersive landscape viewing experience.
                  </p>

                </div>

              </div>

              {/* BUTTON */}
              <button className="flex items-center gap-3 uppercase tracking-[0.25em] text-xs text-[#1f1f1f] group">

                Explore Featured Vehicle

                <ArrowRight
                  size={15}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />

              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ---------------- PREMIUM FLEET ---------------- */}
      <main className="pb-32">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">

            <div>

              <p className="text-luxor-gold uppercase tracking-[0.35em] text-[11px] mb-5">
                Luxury Fleet Collection
              </p>

              <h2 className="font-serif text-5xl md:text-7xl text-[#1f1f1f] leading-[0.95] tracking-[-0.05em]">

                Choose Your
                <span className="italic text-luxor-gold">
                  {" "}Journey
                </span>

              </h2>

            </div>

            <button className="flex items-center gap-3 uppercase tracking-[0.25em] text-xs text-[#5e584f]">

              Explore Entire Fleet

              <ArrowRight size={15} />

            </button>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {featuredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}