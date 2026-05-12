import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Section from "../components/layout/Section";
import CampsiteCard from "../components/cards/CampsiteCard";
import { featuredCampsites } from "../data/mockData";

export default function Campsites() {
  return (
    <div className="min-h-screen flex flex-col bg-luxor-50">
      <Navbar />
      <div className="pt-40 pb-20 bg-white border-b border-luxor-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-luxor-gold font-sans font-medium tracking-[0.3em] uppercase text-xs mb-6">Curated Stays</h2>
          <h1 className="font-serif text-5xl md:text-6xl text-luxor-900">Browse All Campsites</h1>
        </div>
      </div>
      <Section variant="white" className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredCampsites.map(camp => <CampsiteCard key={camp.id} campsite={camp} />)}
          {featuredCampsites.map(camp => <CampsiteCard key={`${camp.id}-2`} campsite={camp} />)}
        </div>
      </Section>
      <Footer />
    </div>
  );
}