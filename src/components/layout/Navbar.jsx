import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import LoginModal from "../auth/LoginModal";

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-luxor-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-luxor-gold text-luxor-gold flex items-center justify-center font-serif text-2xl group-hover:bg-luxor-gold group-hover:text-white transition-colors">L</div>
            <span className="font-sans text-xl font-medium tracking-[0.2em] text-luxor-900 uppercase">Luxor</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.1em] font-medium text-luxor-400 uppercase">
            <Link to="/vehicles" className="hover:text-luxor-gold transition-colors">Fleet</Link>
            <Link to="/campsites" className="hover:text-luxor-gold transition-colors">Retreats</Link>
            <Link to="/journal" className="hover:text-luxor-gold transition-colors">Journal</Link>
            <Link to="/contact" className="hover:text-luxor-gold transition-colors">Concierge</Link>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden sm:flex text-xs tracking-[0.1em] font-medium text-luxor-900 hover:text-luxor-gold uppercase transition-colors" onClick={() => setIsLoginOpen(true)}>
              Sign In
            </button>
            <Link to="/contact">
              <Button variant="primary" className="text-xs tracking-[0.1em] uppercase">List Property</Button>
            </Link>
          </div>
        </div>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}