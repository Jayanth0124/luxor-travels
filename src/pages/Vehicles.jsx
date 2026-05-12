import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Section from "../components/layout/Section";
import VehicleCard from "../components/cards/VehicleCard";
import { featuredVehicles } from "../data/mockData";

export default function Vehicles() {
  return (
    <div className="min-h-screen flex flex-col bg-luxor-50">
      <Navbar />
      <div className="pt-40 pb-20 bg-white border-b border-luxor-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-luxor-gold font-sans font-medium tracking-[0.3em] uppercase text-xs mb-6">Premium Fleet</h2>
          <h1 className="font-serif text-5xl md:text-6xl text-luxor-900">Browse All Vehicles</h1>
        </div>
      </div>
      <Section variant="light" className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredVehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
          {featuredVehicles.map(vehicle => <VehicleCard key={`${vehicle.id}-2`} vehicle={vehicle} />)}
        </div>
      </Section>
      <Footer />
    </div>
  );
}