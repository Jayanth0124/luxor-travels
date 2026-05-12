import { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// PREMIUM COUNTER
function AnimatedCounter({
  end,
  duration = 2000,
  suffix = ""
}) {
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
      { threshold: 0.4 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOutExpo =
        percentage === 1
          ? 1
          : 1 - Math.pow(2, -10 * percentage);

      setCount(
        Math.floor(end * easeOutExpo)
      );

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);

  }, [hasStarted, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// REVIEWS
const REVIEWS = [
  {
    id: 1,
    name: "Nandha Kishore",
    role: "Travel Photographer",
    image:
      "https://images.pexels.com/photos/12262522/pexels-photo-12262522.jpeg",
    review:
      "An unforgettable luxury road experience with breathtaking Himalayan sunrise views.",
    rating: 5
  },

  {
    id: 2,
    name: "Donavalli Jayanth",
    role: "Fullstack Developer",
    image:
      "https://jayanth.site/assets/img/j2.jpg",
    review:
      "The caravan interiors and off-road comfort felt like a moving five-star suite.",
    rating: 5
  },

  {
    id: 3,
    name: "Jagadeesh",
    role: "Web Developer",
    image:
      "https://images.pexels.com/photos/12914160/pexels-photo-12914160.jpeg",
    review:
      "Luxury, silence, nature, and premium hospitality blended into one perfect journey.",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === REVIEWS.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? REVIEWS.length - 1 : prev - 1
    );
  };

  // AUTO SWIPE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-[#f8f6f2] overflow-hidden border-t border-[#ece5db]">

      {/* TOP AMBIENT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[240px] bg-luxor-gold/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP COUNTERS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">

          <div className="text-center">
            <h3 className="font-serif text-4xl md:text-5xl font-light text-[#1f1f1f] tracking-[-0.04em] mb-2">
              <span className="text-luxor-gold">
                <AnimatedCounter end={18500} suffix="+" />
              </span>
            </h3>

            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8e877e]">
              Travelers
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-4xl md:text-5xl font-light text-[#1f1f1f] tracking-[-0.04em] mb-2">
              <span className="text-luxor-gold">
                <AnimatedCounter end={142} />
              </span>
            </h3>

            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8e877e]">
              Destinations
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-4xl md:text-5xl font-light text-[#1f1f1f] tracking-[-0.04em] mb-2">
              <span className="text-luxor-gold">
                <AnimatedCounter end={97} suffix="%" />
              </span>
            </h3>

            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8e877e]">
              Luxury Rating
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-4xl md:text-5xl font-light text-[#1f1f1f] tracking-[-0.04em] mb-2">
              <span className="text-luxor-gold">
                <AnimatedCounter end={15} />
              </span>
            </h3>

            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8e877e]">
              Years
            </p>
          </div>

        </div>

        {/* SMALL SWIPER REVIEW */}
        <div className="relative max-w-4xl mx-auto">

          {/* REVIEW CARD */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ece5db] bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 md:p-12">

            {/* GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-luxor-gold/10 blur-[80px]" />

            {/* QUOTE */}
            <div className="absolute top-8 right-8 text-[#f0ebe3]">

              <Quote
                size={70}
                strokeWidth={1}
              />

            </div>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* USER */}
              <div className="flex items-center gap-5 mb-8">

                <img
                  src={REVIEWS[current].image}
                  alt={REVIEWS[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                />

                <div>

                  <h4 className="text-sm uppercase tracking-[0.14em] text-[#1f1f1f] font-medium mb-1">

                    {REVIEWS[current].name}

                  </h4>

                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#9a9389]">

                    {REVIEWS[current].role}

                  </p>

                </div>

              </div>

              {/* STARS */}
              <div className="flex gap-1 mb-7">

                {[...Array(REVIEWS[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="text-luxor-gold fill-luxor-gold"
                  />
                ))}

              </div>

              {/* REVIEW */}
              <p className="font-serif text-2xl md:text-3xl leading-[1.6] tracking-[-0.02em] text-[#2a2a2a] italic mb-10 transition-all duration-500">

                "{REVIEWS[current].review}"

              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between border-t border-[#ece5db] pt-6">

                <p className="text-[10px] uppercase tracking-[0.28em] text-[#9a9389]">
                  Verified Luxury Guest
                </p>

                {/* CONTROLS */}
                <div className="flex items-center gap-3">

                  <button
                    onClick={prevSlide}
                    className="w-11 h-11 rounded-full border border-[#ece5db] bg-white hover:bg-[#f3eee6] transition-all duration-300 flex items-center justify-center"
                  >

                    <ChevronLeft
                      size={18}
                      strokeWidth={1.8}
                    />

                  </button>

                  <button
                    onClick={nextSlide}
                    className="w-11 h-11 rounded-full bg-[#1f1f1f] text-white hover:bg-black transition-all duration-300 flex items-center justify-center"
                  >

                    <ChevronRight
                      size={18}
                      strokeWidth={1.8}
                    />

                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* DOTS */}
          <div className="flex items-center justify-center gap-3 mt-8">

            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-500 rounded-full ${
                  current === index
                    ? "w-10 h-2 bg-luxor-gold"
                    : "w-2 h-2 bg-[#d6cfc5]"
                }`}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}