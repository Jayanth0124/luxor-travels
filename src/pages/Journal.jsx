import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
  Play,
  ArrowRight,
  Clock3,
  MapPin,
  Camera,
  BookOpen,
  Mountain,
  Waves,
  Trees,
  X
} from "lucide-react";

// VIDEOS
const VIDEOS = {
  hero: "https://videos.pexels.com/video-files/26263168/26263168-hd_1920_1080_30fps.mp4",
  vlog: "https://videos.pexels.com/video-files/3798937/3798937-hd_1920_1080_25fps.mp4",
};

// DUMMY POSTS
const POSTS = [
  {
    id: 1,
    type: "Vlog",
    title: "7 Days Through The Himalayas",
    description:
      "Luxury caravan living across foggy mountain roads, hidden villages, sunrise camps, and unforgettable Himalayan silence.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    location: "Himachal Pradesh",
    duration: "18 Min Watch",
    mood: "Mountain Escape",
    video: VIDEOS.hero,
  },

  {
    id: 2,
    type: "Blog",
    title: "The Art Of Off-Grid Luxury Living",
    description:
      "Inside the world of modern caravan escapes, immersive outdoor comfort, cinematic road journeys, and curated luxury travel.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
    location: "Lake District",
    duration: "6 Min Read",
    mood: "Luxury Retreat",
  },

  {
    id: 3,
    type: "Vlog",
    title: "Desert Roads & Golden Sunsets",
    description:
      "Driving through endless landscapes, cinematic campsites, bonfire nights, and luxury expedition experiences.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
    location: "Rajasthan",
    duration: "22 Min Watch",
    mood: "Desert Expedition",
    video: VIDEOS.vlog,
  },

  {
    id: 4,
    type: "Blog",
    title: "Top 10 Luxury Campsites In India",
    description:
      "Discover breathtaking mountain retreats, lakefront sanctuaries, forest hideaways, and premium glamping escapes.",
    image:
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1400&auto=format&fit=crop",
    location: "India",
    duration: "8 Min Read",
    mood: "Travel Guide",
  },
];

export default function Journal() {
  const [activeFilter, setActiveFilter] = useState("All");

  // VIDEO MODAL
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredPosts =
    activeFilter === "All"
      ? POSTS
      : POSTS.filter((post) => post.type === activeFilter);

  return (
    <div className="min-h-screen bg-[#f6f3ee] overflow-x-hidden">
      <Navbar />

      {/* ---------------- VIDEO MODAL ---------------- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-xl flex items-center justify-center p-6">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >

            <X size={22} />

          </button>

          {/* VIDEO WRAPPER */}
          <div className="relative w-full max-w-6xl rounded-[2rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)]">

            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full max-h-[85vh] object-cover bg-black"
            />

          </div>

        </div>
      )}

      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-[85vh] overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="https://images.pexels.com/photos/7163672/pexels-photo-7163672.jpeg"
            alt="Travel Journal"
            className="w-full h-full object-cover brightness-[0.75] scale-105"
          />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-[#f6f3ee]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,160,0.18),transparent_60%)]" />

          {/* GOLDEN LIGHT */}
          <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-luxor-gold/20 blur-[140px] rounded-full" />

          {/* BOTTOM FADE */}
          <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-[#f6f3ee] to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28">

          <p className="text-white/75 uppercase tracking-[0.35em] text-[11px] mb-6 font-medium">
            Travel Stories & Cinematic Road Journals
          </p>

          <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-[-0.05em] text-white max-w-5xl mb-8">

            Stories From
            <br />

            <span className="italic text-[#f1d29b]">
              Extraordinary Roads
            </span>

          </h1>

          <p className="max-w-2xl text-white/75 text-lg md:text-xl leading-relaxed font-light mb-16">

            Explore cinematic road journeys, luxury caravan adventures, hidden campsites, travel guides, and immersive outdoor experiences.

          </p>

          {/* MOOD TAGS */}
          <div className="flex flex-wrap gap-4">

            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-full px-5 py-3 flex items-center gap-3 text-[#1f1f1f] shadow-xl">

              <Mountain size={16} className="text-luxor-gold" />

              <span className="text-sm">
                Mountain Escapes
              </span>

            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-full px-5 py-3 flex items-center gap-3 text-[#1f1f1f] shadow-xl">

              <Trees size={16} className="text-luxor-gold" />

              <span className="text-sm">
                Forest Retreats
              </span>

            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-full px-5 py-3 flex items-center gap-3 text-[#1f1f1f] shadow-xl">

              <Waves size={16} className="text-luxor-gold" />

              <span className="text-sm">
                Lakeside Journeys
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* ---------------- FILTERS ---------------- */}
      <section className="py-12 border-b border-[#e7dfd4]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

            {["All", "Blog", "Vlog"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveFilter(item)}
                className={`px-7 py-3 rounded-full uppercase tracking-[0.22em] text-xs transition-all duration-500 ${
                  activeFilter === item
                    ? "bg-[#1f1f1f] text-white shadow-xl"
                    : "bg-white/70 border border-[#e7dfd4] text-[#5f5a52] hover:-translate-y-1 hover:shadow-md"
                }`}
              >

                {item === "Blog"
                  ? "Blogs"
                  : item === "Vlog"
                  ? "Vlogs"
                  : item}

              </button>
            ))}

          </div>

        </div>
      </section>

      {/* ---------------- POSTS ---------------- */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white/70 border border-[#e7dfd4] shadow-[0_25px_70px_rgba(0,0,0,0.06)] transition-all duration-700 hover:-translate-y-2"
              >

                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden">

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* TYPE BADGE */}
                  <div className="absolute top-6 left-6 bg-white/75 backdrop-blur-xl border border-white/50 rounded-full px-5 py-3 shadow-xl">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#1f1f1f] font-medium">

                      {post.type}

                    </p>

                  </div>

                  {/* PLAY BUTTON */}
                  {post.type === "Vlog" && (
                    <button
                      onClick={() => setSelectedVideo(post.video)}
                      className="absolute top-6 right-6 w-16 h-16 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-500"
                    >

                      <Play
                        size={20}
                        className="text-white ml-1"
                        fill="white"
                      />

                    </button>
                  )}

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-8">

                    <div className="flex items-center gap-5 text-white/75 text-[11px] uppercase tracking-[0.22em] mb-5">

                      <div className="flex items-center gap-2">

                        <MapPin size={13} />

                        {post.location}

                      </div>

                      <div className="flex items-center gap-2">

                        <Clock3 size={13} />

                        {post.duration}

                      </div>

                    </div>

                    <h3 className="font-serif text-4xl text-white leading-[0.95] mb-4">

                      {post.title}

                    </h3>

                    <p className="text-white/75 leading-relaxed">

                      {post.description}

                    </p>

                  </div>

                </div>

                {/* FOOTER */}
                <div className="p-8 flex items-center justify-between">

                  <div className="bg-[#f5efe5] text-[#6d655b] px-5 py-3 rounded-full text-xs uppercase tracking-[0.22em]">

                    {post.mood}

                  </div>

                  <button className="flex items-center gap-3 uppercase tracking-[0.22em] text-xs text-[#1f1f1f] group/button">

                    Read Story

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-500 group-hover/button:translate-x-1"
                    />

                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}