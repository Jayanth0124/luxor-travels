import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-1 relative py-32">

        {/* AMBIENT GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-luxor-gold/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* TOP INTRO */}
          <div className="text-center max-w-4xl mx-auto mb-24">

            <p className="text-luxor-gold uppercase tracking-[0.38em] text-[11px] mb-6">

              Private Luxury Concierge

            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.05em] text-[#1f1f1f] mb-8">

              Plan Your
              <span className="italic text-luxor-gold">
                {" "}Extraordinary Journey
              </span>

            </h1>

            <p className="text-[#6d665d] text-lg leading-relaxed">

              Our concierge specialists curate immersive caravan adventures,
              cinematic road escapes, and bespoke luxury travel experiences
              tailored exclusively for you.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ---------------- LEFT SIDE ---------------- */}
            <div className="space-y-10">

              {/* LARGE IMAGE CARD */}
              <div className="relative overflow-hidden rounded-[3rem] min-h-[620px] shadow-[0_35px_100px_rgba(0,0,0,0.1)] group">

                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop"
                  alt="Luxury Concierge"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* GOLD AMBIENCE */}
                <div className="absolute top-[10%] left-[10%] w-[250px] h-[250px] bg-luxor-gold/15 blur-[80px] rounded-full" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-10">

                  <p className="text-white/75 uppercase tracking-[0.35em] text-[11px] mb-5">

                    Luxury Hospitality

                  </p>

                  <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-white mb-6">

                    Curated
                    <br />

                    Travel Experiences

                  </h2>

                  <p className="text-white/75 text-lg leading-relaxed max-w-lg">

                    Every journey is personally designed to deliver cinematic landscapes, premium comfort, immersive stays, and unforgettable road experiences.

                  </p>

                </div>

              </div>

              {/* FLOATING INFO CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* PHONE */}
                <div className="bg-white/75 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">

                  <div className="w-14 h-14 rounded-2xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold mb-6">

                    <Phone size={20} />

                  </div>

                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b9388] mb-3">

                    Reservations

                  </p>

                  <h3 className="text-[#1f1f1f] text-lg font-medium">

                    +91 98765 43210

                  </h3>

                </div>

                {/* EMAIL */}
                <div className="bg-white/75 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">

                  <div className="w-14 h-14 rounded-2xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold mb-6">

                    <Mail size={20} />

                  </div>

                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b9388] mb-3">

                    Email Concierge

                  </p>

                  <h3 className="text-[#1f1f1f] text-lg font-medium break-all">

                    experience@luxortravel.in

                  </h3>

                </div>

              </div>

              {/* ADDRESS CARD */}
              <div className="bg-white/75 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">

                <div className="flex items-start gap-6">

                  <div className="w-14 h-14 rounded-2xl bg-luxor-gold/10 flex items-center justify-center text-luxor-gold shrink-0">

                    <MapPin size={22} />

                  </div>

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b9388] mb-3">

                      Headquarters

                    </p>

                    <h3 className="text-[#1f1f1f] text-xl font-medium leading-relaxed">

                      Level 4, The Opus Building,
                      <br />

                      Banjara Hills, Hyderabad,
                      <br />

                      Telangana 500034

                    </h3>

                  </div>

                </div>

              </div>

            </div>

            {/* ---------------- RIGHT SIDE ---------------- */}
            <div className="relative">

              {/* AMBIENT GLOW */}
              <div className="absolute inset-0 bg-luxor-gold/10 blur-[100px] rounded-[3rem]" />

              {/* FORM CARD */}
              <div className="relative bg-white/75 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">

                {/* HEADER */}
                <div className="mb-12">

                  <p className="text-luxor-gold uppercase tracking-[0.35em] text-[11px] mb-5">

                    Private Consultation

                  </p>

                  <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#1f1f1f] mb-6">

                    Tell Us About
                    <br />

                    <span className="italic text-luxor-gold">
                      Your Journey
                    </span>

                  </h2>

                  <p className="text-[#6e675f] text-lg leading-relaxed">

                    Share your dream destinations, travel preferences,
                    and experiences you wish to explore.

                  </p>

                </div>

                {/* LUXURY TAGS */}
                <div className="flex flex-wrap gap-4 mb-12">

                  <div className="bg-[#faf7f2] border border-[#ebe3d8] rounded-full px-5 py-3 flex items-center gap-3 text-sm text-[#4f4942]">

                    <Clock3 size={15} className="text-luxor-gold" />

                    24/7 Assistance

                  </div>

                  <div className="bg-[#faf7f2] border border-[#ebe3d8] rounded-full px-5 py-3 flex items-center gap-3 text-sm text-[#4f4942]">

                    <ShieldCheck size={15} className="text-luxor-gold" />

                    Tailored Planning

                  </div>

                  <div className="bg-[#faf7f2] border border-[#ebe3d8] rounded-full px-5 py-3 flex items-center gap-3 text-sm text-[#4f4942]">

                    <Sparkles size={15} className="text-luxor-gold" />

                    Premium Experiences

                  </div>

                </div>

                {/* FORM */}
                <form
                  className="space-y-7"
                  onSubmit={(e) => e.preventDefault()}
                >

                  {/* NAMES */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>

                      <label className="block text-[10px] uppercase tracking-[0.3em] text-[#8e867b] mb-4">

                        First Name

                      </label>

                      <Input
                        placeholder="John"
                        className="h-16 rounded-2xl bg-[#faf7f2] border-[#e7dfd4] focus:border-luxor-gold focus:ring-2 focus:ring-luxor-gold/20 transition-all"
                      />

                    </div>

                    <div>

                      <label className="block text-[10px] uppercase tracking-[0.3em] text-[#8e867b] mb-4">

                        Last Name

                      </label>

                      <Input
                        placeholder="Doe"
                        className="h-16 rounded-2xl bg-[#faf7f2] border-[#e7dfd4] focus:border-luxor-gold focus:ring-2 focus:ring-luxor-gold/20 transition-all"
                      />

                    </div>

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="block text-[10px] uppercase tracking-[0.3em] text-[#8e867b] mb-4">

                      Email Address

                    </label>

                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="h-16 rounded-2xl bg-[#faf7f2] border-[#e7dfd4] focus:border-luxor-gold focus:ring-2 focus:ring-luxor-gold/20 transition-all"
                    />

                  </div>

                  {/* MESSAGE */}
                  <div>

                    <label className="block text-[10px] uppercase tracking-[0.3em] text-[#8e867b] mb-4">

                      Your Vision

                    </label>

                    <textarea
                      rows="6"
                      placeholder="Describe your dream road trip, destinations, luxury stay preferences, or special experiences..."
                      className="w-full rounded-[2rem] bg-[#faf7f2] border border-[#e7dfd4] px-6 py-5 text-[#1f1f1f] placeholder:text-[#aaa39a] resize-none focus:outline-none focus:border-luxor-gold focus:ring-2 focus:ring-luxor-gold/20 transition-all"
                    />

                  </div>

                  {/* BUTTON */}
                  <Button
                    variant="primary"
                    className="w-full h-16 rounded-2xl text-xs tracking-[0.3em] uppercase group"
                  >

                    <span>
                      Begin Consultation
                    </span>

                    <ArrowRight
                      size={16}
                      className="ml-3 transition-transform duration-500 group-hover:translate-x-1"
                    />

                  </Button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}