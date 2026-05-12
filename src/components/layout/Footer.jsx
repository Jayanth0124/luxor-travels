import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Camera,
  Globe,
  Briefcase
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] border-t border-luxor-gold/20 pt-24 pb-8">
      
      {/* --- AMBIENT CINEMATIC GLOW --- */}
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-luxor-gold/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#1A2E25]/20 blur-[150px] rounded-full pointer-events-none" />

      {/* --- MASSIVE BACKGROUND WATERMARK --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-white/[0.02] pointer-events-none select-none tracking-widest uppercase w-full text-center overflow-hidden flex justify-center items-center h-full">
        Luxor
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- TOP: PREMIUM NEWSLETTER --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-20 border-b border-white/10">
          <div className="max-w-xl">
            <h3 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
              Join the Inner Circle.
            </h3>
            <p className="text-stone-400 font-medium text-sm leading-relaxed">
              Subscribe to receive curated travel inspiration, exclusive early access to our newest luxury fleets, and private sanctuary reservations.
            </p>
          </div>
          
          <div className="w-full md:w-[450px]">
            <form className="relative flex items-center group/form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-bold placeholder:text-stone-500 placeholder:font-medium px-6 py-5 rounded-2xl focus:outline-none focus:border-luxor-gold focus:bg-white/10 transition-all duration-300 pr-16"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 w-12 h-12 rounded-xl bg-luxor-gold hover:bg-white text-[#0A0A0A] flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>

        {/* --- MIDDLE: DIRECTORY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 py-20 border-b border-white/10">
          
          {/* BRAND (4 Columns) */}
          <div className="lg:col-span-4 md:pr-8">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:border-luxor-gold/50 group-hover:bg-luxor-gold/10">
                <span className="font-serif text-2xl text-luxor-gold font-bold">L</span>
              </div>
              <div>
                <h2 className="font-serif font-bold text-3xl text-white tracking-wide">
                  LUXOR
                </h2>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-10 font-medium">
              India’s premier concierge platform for luxury caravans, immersive road journeys, curated campsites, and elevated outdoor living.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:border-luxor-gold hover:text-luxor-gold hover:-translate-y-1 transition-all duration-300">
                <Camera size={16} strokeWidth={2} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:border-luxor-gold hover:text-luxor-gold hover:-translate-y-1 transition-all duration-300">
                <Globe size={16} strokeWidth={2} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:border-luxor-gold hover:text-luxor-gold hover:-translate-y-1 transition-all duration-300">
                <Briefcase size={16} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* EXPLORE (3 Columns) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-luxor-gold font-bold mb-8">
              Explore
            </h4>
            <ul className="space-y-4 font-medium">
              <li><Link to="/vehicles" className="text-stone-400 hover:text-white transition-colors text-sm">Premium Fleet</Link></li>
              <li><Link to="/campsites" className="text-stone-400 hover:text-white transition-colors text-sm">Curated Sanctuaries</Link></li>
              <li><Link to="/journal" className="text-stone-400 hover:text-white transition-colors text-sm">Travel Journal</Link></li>
              <li><Link to="/about" className="text-stone-400 hover:text-white transition-colors text-sm">The Luxor Story</Link></li>
            </ul>
          </div>

          {/* LEGAL & SERVICES (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-luxor-gold font-bold mb-8">
              Services
            </h4>
            <ul className="space-y-4 font-medium">
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors text-sm">Private Consultation</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors text-sm">Chauffeur Services</Link></li>
              <li><Link to="/list-property" className="text-stone-400 hover:text-white transition-colors text-sm">Partner With Us</Link></li>
              <li><Link to="/faq" className="text-stone-400 hover:text-white transition-colors text-sm">Client FAQ</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-luxor-gold font-bold mb-8">
              Concierge Desk
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={16} className="text-luxor-gold mt-1 shrink-0" strokeWidth={2} />
                <div>
                  <p className="text-stone-300 text-sm font-bold">+91 98765 43210</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mt-1">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-luxor-gold mt-1 shrink-0" strokeWidth={2} />
                <div>
                  <p className="text-stone-300 text-sm font-bold">experience@luxortravel.in</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mt-1">Direct Inquiries</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-luxor-gold mt-1 shrink-0" strokeWidth={2} />
                <div>
                  <p className="text-stone-300 text-sm font-bold leading-relaxed">
                    Level 4, The Opus Building, <br /> Banjara Hills, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM: LEGAL --- */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-stone-500 text-xs font-bold tracking-wide">
            © 2026 LUXOR TRAVEL PVT. LTD.
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}