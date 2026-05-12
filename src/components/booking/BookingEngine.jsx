import { useState } from "react";
import { Car, Tent, MapPin, Calendar, Users, Search } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../common/Button";
import { Input } from "../common/Input";

export default function BookingEngine() {
  const [activeTab, setActiveTab] = useState("vehicle");

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#FAF9F6]/90 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden relative z-30">
      
      {/* Premium Tabs */}
      <div className="flex border-b border-[#E8E1D5]/60 bg-white/40">
        <button
          onClick={() => setActiveTab("vehicle")}
          className={cn(
            "flex-1 py-6 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300",
            activeTab === "vehicle" 
              ? "text-[#1A2E25] bg-white/60 border-b-2 border-luxor-gold shadow-[0_4px_20px_rgba(0,0,0,0.03)]" 
              : "text-stone-400 hover:text-stone-600 hover:bg-white/20"
          )}
        >
          <Car size={18} strokeWidth={2} className={activeTab === "vehicle" ? "text-luxor-gold" : ""} /> 
          Reserve a Vehicle
        </button>
        <button
          onClick={() => setActiveTab("campsite")}
          className={cn(
            "flex-1 py-6 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300",
            activeTab === "campsite" 
              ? "text-[#1A2E25] bg-white/60 border-b-2 border-luxor-gold shadow-[0_4px_20px_rgba(0,0,0,0.03)]" 
              : "text-stone-400 hover:text-stone-600 hover:bg-white/20"
          )}
        >
          <Tent size={18} strokeWidth={2} className={activeTab === "campsite" ? "text-luxor-gold" : ""} /> 
          Book a Retreat
        </button>
      </div>

      {/* Booking Form Inputs */}
      <div className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-5">
          <Input 
            icon={MapPin} 
            placeholder={activeTab === "vehicle" ? "Pickup Location" : "Destination or Campsite"} 
            className="flex-1 bg-white/80 border-[#E8E1D5] focus:border-luxor-gold text-stone-800 rounded-lg shadow-sm font-medium"
          />
          <Input 
            icon={Calendar} 
            placeholder="Check-in Date" 
            type="text" 
            onFocus={(e) => e.target.type = 'date'}
            className="w-full md:w-56 bg-white/80 border-[#E8E1D5] focus:border-luxor-gold text-stone-800 rounded-lg shadow-sm font-medium"
          />
          <Input 
            icon={Calendar} 
            placeholder="Check-out Date" 
            type="text" 
            onFocus={(e) => e.target.type = 'date'}
            className="w-full md:w-56 bg-white/80 border-[#E8E1D5] focus:border-luxor-gold text-stone-800 rounded-lg shadow-sm font-medium"
          />
          {activeTab === "campsite" && (
            <Input 
              icon={Users} 
              placeholder="Guests" 
              type="number" 
              min="1"
              className="w-full md:w-32 bg-white/80 border-[#E8E1D5] focus:border-luxor-gold text-stone-800 rounded-lg shadow-sm font-medium"
            />
          )}
          {/* Deep Forest Green button to ground the light ivory container */}
          <Button className="w-full md:w-auto px-12 gap-3 bg-[#1A2E25] hover:bg-[#233D32] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Search size={18} strokeWidth={2} className="text-luxor-gold" /> 
            <span className="font-bold tracking-widest text-xs uppercase">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
}