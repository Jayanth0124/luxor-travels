import { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { Maximize, ShieldCheck, Cpu, Zap, Fingerprint } from "lucide-react";

const HUD_FEATURES_TOP = [
  { id: 'T1', title: "AI CONTROL CORE", desc: "Managing climate, nav & luxury automation.", sys: "SYS.01", icon: Cpu, delay: "0ms" },
  { id: 'T2', title: "OFF-GRID POWER", desc: "Solar integration & smart battery optimization.", sys: "SYS.02", icon: Zap, delay: "200ms" },
];

const HUD_FEATURES_BOTTOM = [
  { id: 'B1', title: "TERRAIN RESPONSE", desc: "Adaptive suspension for extreme landscapes.", sys: "SYS.03", icon: ShieldCheck, delay: "400ms" },
  { id: 'B2', title: "PANORAMIC GLASS", desc: "Smart glass with immersive sky-view experience.", sys: "SYS.04", icon: Maximize, delay: "600ms" },
  { id: 'B3', title: "SECURITY SUITE", desc: "24/7 monitoring & biometric access.", sys: "SYS.05", icon: Fingerprint, delay: "800ms" },
];

export default function Showcase() {
  const [hasDrivenIn, setHasDrivenIn] = useState(false);
  const [showHud, setShowHud] = useState(false);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasDrivenIn) {
          setHasDrivenIn(true);
          setTimeout(() => {
            setShowHud(true);
          }, 2500);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }
    return () => observer.disconnect();
  }, [hasDrivenIn]);

  return (
    <section 
      ref={showcaseRef} 
      className="relative py-16 md:py-20 bg-[#030303] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1400px] h-[500px] bg-luxor-gold/15 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-[20vw] h-full bg-gradient-to-r from-luxor-gold/5 to-transparent blur-3xl" />
        <div className="absolute top-0 right-0 w-[20vw] h-full bg-gradient-to-l from-luxor-gold/5 to-transparent blur-3xl" />
        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[90vw] md:w-[1200px] h-[40px] bg-white/5 blur-[30px] rounded-[100%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-6 md:mb-8">
        <h2 className="text-luxor-gold font-sans font-medium tracking-[0.3em] uppercase text-xs mb-4">
          Next Generation
        </h2>
        <h3 className="font-serif text-4xl md:text-5xl text-white drop-shadow-2xl">Engineering Marvels</h3>
      </div>

      {/* Ultra-Tight Vertical Composition Layout */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-6 z-20">
        
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-24 w-full z-30 relative md:-mb-[100px] lg:-mb-[180px]">
          {HUD_FEATURES_TOP.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className={cn(
                  "relative flex items-start gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.8)] max-w-xs transition-all duration-[1000ms] ease-out",
                  showHud ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                )}
                style={{ transitionDelay: showHud ? feature.delay : "0ms" }}
              >
                <div className="bg-luxor-gold/10 p-2 border border-luxor-gold/30 text-luxor-gold shrink-0">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <p className="text-[9px] tracking-widest text-luxor-gold font-mono">{feature.sys}</p>
                    <div className="h-[1px] w-4 bg-luxor-gold/30" />
                  </div>
                  <h4 className="text-[11px] md:text-xs tracking-[0.2em] text-white uppercase font-medium mb-1.5">{feature.title}</h4>
                  <p className="text-[10px] md:text-[11px] text-gray-400 font-light leading-relaxed">{feature.desc}</p>
                </div>
                <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-luxor-gold/60 to-transparent" />
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-center relative z-20 pointer-events-none my-6 md:my-0">
          <div className="absolute bottom-[10%] md:bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] md:w-[900px] h-[30px] bg-black blur-[20px] rounded-[100%] z-10" />
          
          <div className={cn(
            "w-[140%] sm:w-[120%] md:w-[1100px] max-w-none relative z-20 will-change-transform",
            "transition-all duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            hasDrivenIn ? "translate-x-0 opacity-100" : "translate-x-[50vw] opacity-0" 
          )}>
            <img src="/carvan.png" alt="Premium Caravan Concept" className="w-full h-auto block drop-shadow-2xl" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-16 w-full z-30 relative md:-mt-[120px] lg:-mt-[220px]">
          {HUD_FEATURES_BOTTOM.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className={cn(
                  "relative flex items-start gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.8)] max-w-xs transition-all duration-[1000ms] ease-out",
                  showHud ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
                )}
                style={{ transitionDelay: showHud ? feature.delay : "0ms" }}
              >
                <div className="bg-luxor-gold/10 p-2 border border-luxor-gold/30 text-luxor-gold shrink-0">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <p className="text-[9px] tracking-widest text-luxor-gold font-mono">{feature.sys}</p>
                    <div className="h-[1px] w-4 bg-luxor-gold/30" />
                  </div>
                  <h4 className="text-[11px] md:text-xs tracking-[0.2em] text-white uppercase font-medium mb-1.5">{feature.title}</h4>
                  <p className="text-[10px] md:text-[11px] text-gray-400 font-light leading-relaxed">{feature.desc}</p>
                </div>
                <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-t from-luxor-gold/60 to-transparent" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}