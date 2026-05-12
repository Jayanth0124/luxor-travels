import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Input } from "../common/Input";

export default function Footer() {
  return (
    <footer className="bg-luxor-50 border-t border-luxor-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 border border-luxor-gold text-luxor-gold flex items-center justify-center font-serif text-2xl">L</div>
              <span className="font-sans text-xl font-medium tracking-[0.2em] text-luxor-900 uppercase">Luxor</span>
            </Link>
            <p className="text-luxor-400 font-light leading-relaxed max-w-sm mb-10">
              India's premium platform for luxury vehicles & handpicked campsite experiences. Travel differently.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 border border-luxor-200 flex items-center justify-center hover:border-luxor-gold transition-colors cursor-pointer"><span className="text-xs tracking-widest text-luxor-900">IG</span></div>
              <div className="w-12 h-12 border border-luxor-200 flex items-center justify-center hover:border-luxor-gold transition-colors cursor-pointer"><span className="text-xs tracking-widest text-luxor-900">IN</span></div>
            </div>
          </div>

          <div>
            <h4 className="text-luxor-900 font-serif text-2xl mb-8">Explore</h4>
            <ul className="space-y-4 text-luxor-400 font-light text-sm tracking-wide">
              <li><Link to="/vehicles" className="hover:text-luxor-gold transition-colors">Premium Fleet</Link></li>
              <li><Link to="/campsites" className="hover:text-luxor-gold transition-colors">Curated Stays</Link></li>
              <li><Link to="/about" className="hover:text-luxor-gold transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-luxor-gold transition-colors">Concierge Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-luxor-900 font-serif text-2xl mb-8">Newsletter</h4>
            <p className="text-luxor-400 font-light text-sm mb-6">Exclusive offers and travel inspiration.</p>
            <div className="flex flex-col gap-4">
              <Input placeholder="Email Address" className="bg-white" />
              <Button variant="primary" className="w-full text-xs tracking-widest uppercase py-4">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-luxor-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-luxor-400 font-light tracking-wide">
          <p>© 2026 Luxor Travel Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0 uppercase">
            <Link to="/privacy" className="hover:text-luxor-gold">Privacy</Link>
            <Link to="/terms" className="hover:text-luxor-gold">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}