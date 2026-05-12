import { cn } from "../../lib/utils";
import { Button } from "../common/Button";

import {
  MapPin,
  ArrowRight,
  Star,
  Trees,
  Waves,
  Flame
} from "lucide-react";

export default function CampsiteCard({ campsite, className }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2rem] bg-[#f8f6f2] border border-[#ece5db] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]",
        className
      )}
    >

      {/* IMAGE SECTION */}
      <div className="relative aspect-[16/10] overflow-hidden">

        {/* IMAGE */}
        <img
          src={campsite.image}
          alt={campsite.name}
          className="w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-110"
        />

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* LOCATION BADGE */}
        <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/75 backdrop-blur-xl border border-white/50 rounded-full px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

          <MapPin
            size={14}
            className="text-luxor-gold"
          />

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#222] font-medium">
            {campsite.location}
          </p>

        </div>

        {/* RATING */}
        <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">

          <Star
            size={14}
            className="text-luxor-gold fill-luxor-gold"
          />

          <span className="text-white text-sm">
            4.9
          </span>

        </div>

        {/* CONTENT OVER IMAGE */}
        <div className="absolute bottom-0 left-0 w-full p-7">

          <div className="max-w-[85%]">

            <h3 className="font-serif text-4xl text-white leading-none mb-3 drop-shadow-lg">
              {campsite.name}
            </h3>

            <p className="text-white/75 text-sm leading-relaxed">
              Curated luxury escape designed for unforgettable outdoor experiences and peaceful premium stays.
            </p>

          </div>

        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="relative p-7">

        {/* AMBIENT GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-luxor-gold/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* PRICE + STATUS */}
        <div className="relative flex items-center justify-between mb-7">

          <div>

            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8c857b] mb-2">
              Starting From
            </p>

            <h4 className="text-3xl font-serif text-[#1f1f1f]">
              {campsite.price}
            </h4>

          </div>

          <div className="bg-[#ebe6dd] text-[#3f3b35] px-4 py-2 rounded-full text-xs tracking-[0.18em] uppercase">
            Available
          </div>

        </div>

        {/* EXPERIENCE BLOCKS */}
        <div className="grid grid-cols-3 gap-4 mb-8">

          {/* NATURE */}
          <div className="bg-white/80 border border-[#ece5db] rounded-2xl p-4 backdrop-blur-lg text-center">

            <div className="w-11 h-11 mx-auto rounded-xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold mb-3">

              <Trees size={18} />

            </div>

            <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c857b] mb-1">
              Nature
            </p>

            <h5 className="text-[#1f1f1f] text-sm font-medium">
              Forest View
            </h5>

          </div>

          {/* EXPERIENCE */}
          <div className="bg-white/80 border border-[#ece5db] rounded-2xl p-4 backdrop-blur-lg text-center">

            <div className="w-11 h-11 mx-auto rounded-xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold mb-3">

              <Flame size={18} />

            </div>

            <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c857b] mb-1">
              Experience
            </p>

            <h5 className="text-[#1f1f1f] text-sm font-medium">
              Bonfire
            </h5>

          </div>

          {/* LAKE */}
          <div className="bg-white/80 border border-[#ece5db] rounded-2xl p-4 backdrop-blur-lg text-center">

            <div className="w-11 h-11 mx-auto rounded-xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold mb-3">

              <Waves size={18} />

            </div>

            <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c857b] mb-1">
              Atmosphere
            </p>

            <h5 className="text-[#1f1f1f] text-sm font-medium">
              Lake Side
            </h5>

          </div>

        </div>

        {/* FEATURE TAGS */}
        <div className="flex flex-wrap gap-3 mb-8">

          {campsite.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/70 border border-[#ece5db] rounded-full px-4 py-2 text-sm text-[#5d5852]"
            >

              {feature}

            </div>
          ))}

        </div>

        {/* BUTTON */}
        <Button
          className="w-full h-14 rounded-2xl bg-[#1f1f1f] hover:bg-black text-white text-sm tracking-[0.18em] uppercase transition-all duration-500 group/btn"
        >

          <div className="flex items-center justify-between w-full px-2">

            <span>
              Explore Retreat
            </span>

            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover/btn:translate-x-1">

              <ArrowRight
                size={16}
                strokeWidth={1.8}
              />

            </div>

          </div>

        </Button>

      </div>
    </div>
  );
}