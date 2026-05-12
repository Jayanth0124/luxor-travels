import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";

// Page Imports
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Campsites from "./pages/Campsites";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // <--- Import it here

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/campsites" element={<Campsites />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* The Catch-All 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}