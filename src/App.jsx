import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";

// Page Imports
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Campsites from "./pages/Campsites";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      {/* Ensures every new page loads at the very top */}
      <ScrollToTop />
      
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/campsites" element={<Campsites />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback 404 Route for unfinished pages (like /journal or /about).
          Designed in the same high-end editorial aesthetic.
        */}
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6] text-center px-6">
            <h1 className="font-serif font-bold text-6xl text-stone-900 mb-6 drop-shadow-sm">
              Coming Soon.
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-10">
              This luxury experience is currently being crafted.
            </p>
            <a 
              href="/" 
              className="text-luxor-gold hover:text-stone-900 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold border-b border-luxor-gold/30 hover:border-stone-900 pb-1"
            >
              Return to Sanctuary
            </a>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}