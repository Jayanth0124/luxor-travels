import { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { Quote, Star } from "lucide-react";

// Custom Hook for the Counting Animation
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeOutQuart));

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, end, duration]);

  // Format large numbers with commas
  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const REVIEWS = [
  {
    id: 1,
    name: "Eleanor Vance",
    role: "Travel Photographer",
    review: "An absolute masterpiece of a journey. Waking up to panoramic Himalayan sunrises in unparalleled luxury completely redefined my perspective on off-grid travel.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Sterling",
    role: "Architectural Designer",
    review: "The terrain response handled the desert dunes flawlessly. The interior materials, the ambient lighting, the sheer silence inside the cabin—it's a rolling five-star hotel.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Laurent",
    role: "Journalist",
    review: "From the seamless concierge booking to the impeccable off-grid power systems, every detail is engineered for pure, undisturbed comfort in the wilderness.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#FAF9F6] border-t border-[#E8E1D5] overflow-hidden">
      
      {/* --- ANIMATED COUNTER STRIP --- */}
      <div className="bg-[#111] border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-[#C5A059]/20 text-center">
            
            <div className="flex flex-col items-center">
              <h4 className="font-serif font-bold text-4xl md:text-5xl text-luxor-gold mb-2">
                <AnimatedCounter end={18500} suffix="+" />
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Satisfied Explorers</p>
            </div>
            
            <div className="flex flex-col items-center">
              <h4 className="font-serif font-bold text-4xl md:text-5xl text-luxor-gold mb-2">
                <AnimatedCounter end={142} />
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Nations Explored</p>
            </div>
            
            <div className="flex flex-col items-center">
              <h4 className="font-serif font-bold text-4xl md:text-5xl text-luxor-gold mb-2">
                <AnimatedCounter end={97} suffix="%" />
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Approval Rating</p>
            </div>
            
            <div className="flex flex-col items-center">
              <h4 className="font-serif font-bold text-4xl md:text-5xl text-luxor-gold mb-2">
                <AnimatedCounter end={15} />
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Years of Expertise</p>
            </div>

          </div>
        </div>
      </div>

      {/* --- EDITORIAL REVIEWS SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8">
          
          {/* Section Header */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <h2 className="text-luxor-gold font-sans font-bold tracking-[0.3em] uppercase text-xs mb-4">
              The Luxor Standard
            </h2>
            <h3 className="font-serif font-bold text-4xl md:text-5xl text-stone-900 leading-tight mb-6">
              Echoes of the Extraordinary
            </h3>
            <p className="text-stone-500 text-sm font-medium leading-relaxed max-w-sm">
              Discover how our patrons have redefined their boundaries without compromising on absolute luxury and comfort.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className="bg-white border border-[#E8E1D5] p-8 flex flex-col relative group transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                {/* Large Background Quote Icon */}
                <div className="absolute top-6 right-6 text-[#F2EFE9] opacity-50 group-hover:text-luxor-gold/10 transition-colors duration-500">
                  <Quote size={64} strokeWidth={1} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-luxor-gold fill-luxor-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-lg md:text-xl text-stone-800 leading-snug mb-8 relative z-10 italic">
                  "{review.review}"
                </p>

                {/* Author Info */}
                <div className="mt-auto relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-stone-900 mb-1">
                    {review.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}