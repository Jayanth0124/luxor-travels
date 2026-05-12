import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CampsiteCard from "../components/cards/CampsiteCard";
import { featuredCampsites } from "../data/mockData";

import {
  MapPin,
  Search,
  Flame,
  Trees,
  Waves,
  Mountain,
  Sparkles,
  ArrowRight
} from "lucide-react";

const DESTINATIONS = [
  {
    title: "Mountain Silence",
    subtitle: "Cold mornings • Pine forests • Sunrise decks",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Lakefront Retreats",
    subtitle: "Still waters • Luxury tents • Golden evenings",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Forest Hideaways",
    subtitle: "Bonfires • Mist trails • Off-grid escapes",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
  },
];

const EXPERIENCE_TAGS = [
  "Bonfire Nights",
  "Stargazing",
  "Forest Bathing",
  "Lakefront Living",
  "Mountain Air",
  "Sunrise Deck",
  "Private Escape",
  "Off-Grid Luxury",
];

export default function Campsites() {
  return (
    <div className="min-h-screen bg-[#f6f1e8] overflow-x-hidden">
      <Navbar />

      {/* ---------------- IMMERSIVE HERO ---------------- */}
      <section className="relative min-h-[100vh] overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2500&auto=format&fit=crop"
            alt="Luxury Campsite"
            className="w-full h-full object-cover scale-105 brightness-[0.82]"
          />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#f6f1e8]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,160,0.18),transparent_60%)]" />

          {/* FOG */}
          <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-[#f6f1e8] to-transparent" />

          {/* GOLDEN LIGHT */}
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#d6a55c]/20 blur-[120px] rounded-full" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28">

          {/* LABEL */}
          <p className="text-white/80 uppercase tracking-[0.35em] text-[11px] mb-6 font-medium">
            Curated Luxury Escapes
          </p>

          {/* HEADING */}
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-[-0.05em] text-white max-w-5xl mb-8">

            Escape Into
            <br />

            <span className="italic text-[#f1d29b]">
              Nature's Luxury
            </span>

          </h1>

          {/* SUBTEXT */}
          <p className="max-w-2xl text-white/75 text-lg md:text-xl leading-relaxed font-light mb-16">

            Discover immersive glamping sanctuaries, mountain retreats, forest hideaways, and unforgettable off-grid experiences crafted for modern explorers.

          </p>

          {/* FLOATING SEARCH DOCK */}
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
                      placeholder="Mountains, lakes..."
                      className="bg-transparent w-full outline-none text-[#1f1f1f] font-medium"
                    />

                  </div>

                </div>

                {/* EXPERIENCE */}
                <div className="bg-white/70 rounded-2xl px-5 py-4 border border-white/60">

                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8f877d] mb-2">
                    Experience
                  </p>

                  <div className="flex items-center gap-3">

                    <Sparkles
                      size={16}
                      className="text-luxor-gold"
                    />

                    <input
                      placeholder="Bonfire, stargazing..."
                      className="bg-transparent w-full outline-none text-[#1f1f1f] font-medium"
                    />

                  </div>

                </div>

                {/* GUESTS */}
                <div className="bg-white/70 rounded-2xl px-5 py-4 border border-white/60">

                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8f877d] mb-2">
                    Guests
                  </p>

                  <input
                    placeholder="2 Travelers"
                    className="bg-transparent w-full outline-none text-[#1f1f1f] font-medium"
                  />

                </div>

                {/* BUTTON */}
                <button className="rounded-2xl bg-[#1f1f1f] hover:bg-black text-white transition-all duration-500 flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-xs">

                  <Search size={16} />

                  Explore Escapes

                </button>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- EXPERIENCE TAGS ---------------- */}
      <section className="py-10 border-b border-[#e7dfd4] bg-[#f6f1e8]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap gap-4 justify-center">

            {EXPERIENCE_TAGS.map((tag, idx) => (
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

      {/* ---------------- DESTINATION STORIES ---------------- */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="mb-16">

            <p className="text-luxor-gold uppercase tracking-[0.35em] text-[11px] mb-5">
              Explore By Mood
            </p>

            <h2 className="font-serif text-5xl md:text-7xl text-[#1f1f1f] leading-[0.95] tracking-[-0.05em]">

              Choose Your
              <span className="italic text-luxor-gold">
                {" "}Escape
              </span>

            </h2>

          </div>

          {/* DESTINATION CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {DESTINATIONS.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[2.5rem] min-h-[580px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-10">

                  <div className="mb-5 flex items-center gap-3 text-white/70 text-[11px] uppercase tracking-[0.28em]">

                    <div className="w-2 h-2 rounded-full bg-luxor-gold" />

                    Curated Destination

                  </div>

                  <h3 className="font-serif text-5xl text-white leading-[0.95] mb-5">

                    {item.title}

                  </h3>

                  <p className="text-white/75 text-lg leading-relaxed mb-8">

                    {item.subtitle}

                  </p>

                  <button className="flex items-center gap-3 text-white uppercase tracking-[0.2em] text-xs group/button">

                    Discover Retreat

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-500 group-hover/button:translate-x-1"
                    />

                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ---------------- FEATURED RETREATS ---------------- */}
      <main className="pb-32">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">

            <div>

              <p className="text-luxor-gold uppercase tracking-[0.35em] text-[11px] mb-5">
                Handpicked Retreats
              </p>

              <h2 className="font-serif text-5xl md:text-7xl text-[#1f1f1f] leading-[0.95] tracking-[-0.05em]">

                Immersive
                <span className="italic text-luxor-gold">
                  {" "}Stays
                </span>

              </h2>

            </div>

            <button className="flex items-center gap-3 uppercase tracking-[0.25em] text-xs text-[#5e584f]">

              Explore All Retreats

              <ArrowRight size={15} />

            </button>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {featuredCampsites.map((camp) => (
              <CampsiteCard
                key={camp.id}
                campsite={camp}
              />
            ))}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}