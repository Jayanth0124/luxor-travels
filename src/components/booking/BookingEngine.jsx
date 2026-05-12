import { useState, useRef, useEffect } from "react";
import { Car, Tent, MapPin, CalendarDays, Users, Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

// --- CUSTOM CALENDAR LOGIC ---
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

export default function BookingEngine() {
  const [activeTab, setActiveTab] = useState("vehicle");
  
  // Custom Date Picker States
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  
  // Dropdown Visibility States
  const [openPicker, setOpenPicker] = useState(null); // 'checkIn', 'checkOut', or null
  const dropdownRef = useRef(null);

  // Calendar Navigation State
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenPicker(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePrevMonth = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleDateSelect = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    if (openPicker === 'checkIn') {
      setCheckIn(selectedDate);
      setOpenPicker('checkOut'); // Auto-open checkout next
    } else {
      setCheckOut(selectedDate);
      setOpenPicker(null); // Close after selecting checkout
    }
  };

  // Render the calendar grid
  const renderCalendar = (type) => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const blanks = Array.from({ length: firstDay }, (_, i) => i);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const selectedValue = type === 'checkIn' ? checkIn : checkOut;

    return (
      <div className="absolute top-[110%] left-0 bg-white border border-[#E8E1D5] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-5 w-[300px] z-50 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-[#FAF9F6] rounded-full transition-colors text-stone-600 hover:text-luxor-gold">
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <h4 className="font-serif font-bold text-stone-900 text-lg">
            {MONTHS[currentMonth]} {currentYear}
          </h4>
          <button onClick={handleNextMonth} className="p-2 hover:bg-[#FAF9F6] rounded-full transition-colors text-stone-600 hover:text-luxor-gold">
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map(day => (
            <div key={day} className="text-center text-[9px] uppercase tracking-widest font-bold text-stone-400 pb-2">
              {day}
            </div>
          ))}
        </div>

        {/* Date Grid */}
        <div className="grid grid-cols-7 gap-1">
          {blanks.map(blank => (
            <div key={`blank-${blank}`} className="h-8 w-8" />
          ))}
          {days.map(day => {
            const isSelected = selectedValue && 
              selectedValue.getDate() === day && 
              selectedValue.getMonth() === currentMonth && 
              selectedValue.getFullYear() === currentYear;

            return (
              <button
                key={day}
                onClick={(e) => { e.stopPropagation(); handleDateSelect(day); }}
                className={cn(
                  "h-8 w-full rounded-lg text-sm font-medium transition-all flex items-center justify-center",
                  isSelected 
                    ? "bg-luxor-gold text-[#0A0A0A] shadow-md font-bold" 
                    : "text-stone-700 hover:bg-[#FAF9F6] hover:text-luxor-gold"
                )}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative z-30" ref={dropdownRef}>
      
      {/* --- PREMIUM TABS --- */}
      <div className="flex justify-center mb-6">
        <div className="bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/20 inline-flex shadow-lg">
          <button
            onClick={() => setActiveTab("vehicle")}
            className={cn(
              "flex items-center gap-2 px-8 py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-500",
              activeTab === "vehicle" 
                ? "bg-white text-stone-900 shadow-md" 
                : "text-white hover:text-luxor-gold hover:bg-white/10"
            )}
          >
            <Car size={16} strokeWidth={2} className={activeTab === "vehicle" ? "text-luxor-gold" : "opacity-70"} /> 
            Reserve a Vehicle
          </button>
          <button
            onClick={() => setActiveTab("campsite")}
            className={cn(
              "flex items-center gap-2 px-8 py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-500",
              activeTab === "campsite" 
                ? "bg-white text-stone-900 shadow-md" 
                : "text-white hover:text-luxor-gold hover:bg-white/10"
            )}
          >
            <Tent size={16} strokeWidth={2} className={activeTab === "campsite" ? "text-luxor-gold" : "opacity-70"} /> 
            Book a Retreat
          </button>
        </div>
      </div>

      {/* --- THE PERFECT SEGMENTED CONTAINER --- */}
      <div className="bg-white p-2 md:p-3 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.2)] border border-[#E8E1D5] flex flex-col md:flex-row items-center w-full">
        
        {/* 1. Location Block */}
        <div className="relative flex-1 w-full px-6 py-4 hover:bg-[#FAF9F6] rounded-[2rem] transition-colors cursor-text group border-b md:border-b-0 border-[#E8E1D5] md:border-transparent">
          <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-1">
            Where to?
          </label>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-luxor-gold shrink-0" strokeWidth={2.5} />
            <input 
              type="text" 
              placeholder={activeTab === "vehicle" ? "Pickup city or state..." : "Destination or landmark..."}
              className="w-full bg-transparent border-none focus:outline-none text-stone-900 font-bold text-sm placeholder:text-stone-300 placeholder:font-medium p-0"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-12 bg-[#E8E1D5] mx-1" />

        {/* 2. Check-in Date Block (CUSTOM UI) */}
        <div 
          onClick={() => setOpenPicker(openPicker === 'checkIn' ? null : 'checkIn')}
          className="relative w-full md:w-auto md:min-w-[180px] px-6 py-4 hover:bg-[#FAF9F6] rounded-[2rem] transition-colors cursor-pointer group border-b md:border-b-0 border-[#E8E1D5] md:border-transparent"
        >
          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-1">
            Departure
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-luxor-gold" strokeWidth={2.5} />
              <h4 className={cn("font-bold text-sm", checkIn ? "text-stone-900" : "text-stone-400")}>
                {checkIn ? checkIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Add Dates"}
              </h4>
            </div>
            <ChevronDown size={14} className={cn("text-stone-400 transition-transform stroke-2", openPicker === 'checkIn' && "rotate-180 text-luxor-gold")} />
          </div>
          
          {/* Custom Calendar Dropdown */}
          {openPicker === 'checkIn' && renderCalendar('checkIn')}
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-12 bg-[#E8E1D5] mx-1" />

        {/* 3. Check-out Date Block (CUSTOM UI) */}
        <div 
          onClick={() => setOpenPicker(openPicker === 'checkOut' ? null : 'checkOut')}
          className="relative w-full md:w-auto md:min-w-[180px] px-6 py-4 hover:bg-[#FAF9F6] rounded-[2rem] transition-colors cursor-pointer group border-b md:border-b-0 border-[#E8E1D5] md:border-transparent"
        >
          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-1">
            Return
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-luxor-gold" strokeWidth={2.5} />
              <h4 className={cn("font-bold text-sm", checkOut ? "text-stone-900" : "text-stone-400")}>
                {checkOut ? checkOut.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Add Dates"}
              </h4>
            </div>
            <ChevronDown size={14} className={cn("text-stone-400 transition-transform stroke-2", openPicker === 'checkOut' && "rotate-180 text-luxor-gold")} />
          </div>
          
          {/* Custom Calendar Dropdown */}
          {openPicker === 'checkOut' && renderCalendar('checkOut')}
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-12 bg-[#E8E1D5] mx-1" />

        {/* 4. Guests */}
        {activeTab === "campsite" && (
          <>
            <div className="relative w-full md:w-auto md:min-w-[140px] px-6 py-4 hover:bg-[#FAF9F6] rounded-[2rem] transition-colors cursor-text group border-b md:border-b-0 border-[#E8E1D5] md:border-transparent">
              <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-1">
                Guests
              </label>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-luxor-gold" strokeWidth={2.5} />
                <input 
                  type="number" 
                  placeholder="Count"
                  min="1"
                  className="w-full bg-transparent border-none focus:outline-none text-stone-900 font-bold text-sm placeholder:text-stone-300 placeholder:font-medium p-0"
                />
              </div>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-[#E8E1D5] mx-1" />
          </>
        )}

        {/* 5. PERFECT SEARCH BUTTON */}
        <button className="w-full md:w-auto mt-4 md:mt-0 h-[64px] px-10 bg-luxor-gold hover:bg-[#111] text-[#0A0A0A] hover:text-luxor-gold rounded-[2rem] flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_10px_30px_rgba(197,160,89,0.3)] hover:shadow-[0_15px_40px_rgba(17,17,17,0.4)] group shrink-0 relative z-20">
          <Search size={20} strokeWidth={2.5} className="transition-transform duration-500 group-hover:scale-110" />
          <span className="font-bold uppercase tracking-[0.2em] text-[11px]">Search</span>
        </button>

      </div>

      {/* --- BUSINESS MINDSET: LUXURY TRUST SIGNALS --- */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-6 px-4">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-sm cursor-default">
          <div className="w-1.5 h-1.5 rounded-full bg-luxor-gold animate-pulse shadow-[0_0_8px_rgba(197,160,89,0.8)]"></div>
          <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-white">24/7 Concierge</span>
        </div>
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-sm cursor-default">
          <div className="w-1.5 h-1.5 rounded-full bg-luxor-gold shadow-[0_0_8px_rgba(197,160,89,0.8)]"></div>
          <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-white">Instant Confirmation</span>
        </div>
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-sm cursor-default">
          <div className="w-1.5 h-1.5 rounded-full bg-luxor-gold shadow-[0_0_8px_rgba(197,160,89,0.8)]"></div>
          <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-white">Tailored Itineraries</span>
        </div>
      </div>

    </div>
  );
}