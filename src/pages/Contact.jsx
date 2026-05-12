import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-luxor-50">
      <Navbar />
      
      <main className="flex-1 pt-40 pb-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-luxor-gold/5 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-luxor-gold font-sans font-medium tracking-[0.3em] uppercase text-xs mb-6">
              At Your Service
            </h2>
            <h1 className="font-serif text-5xl md:text-6xl text-luxor-900 mb-8">
              Concierge Support
            </h1>
            <p className="text-luxor-400 font-light text-lg">
              Our dedicated team is here to curate your perfect journey. Reach out for custom itineraries, chauffeur requests, or partnership inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="bg-luxor-50 border border-luxor-200 p-10 shadow-premium">
                <h3 className="font-serif text-3xl text-luxor-900 mb-10">Direct Lines</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-luxor-200 flex items-center justify-center text-luxor-gold shrink-0 bg-white">
                      <Phone size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-luxor-400 mb-2">Reservations</p>
                      <p className="text-luxor-900 font-medium tracking-wide">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-luxor-200 flex items-center justify-center text-luxor-gold shrink-0 bg-white">
                      <Mail size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-luxor-400 mb-2">Email inquiries</p>
                      <p className="text-luxor-900 font-medium tracking-wide">experience@luxortravel.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-luxor-200 flex items-center justify-center text-luxor-gold shrink-0 bg-white">
                      <MapPin size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-luxor-400 mb-2">Headquarters</p>
                      <p className="text-luxor-900 font-medium leading-relaxed tracking-wide">
                        Level 4, The Opus Building,<br />
                        Banjara Hills, Hyderabad,<br />
                        Telangana 500034
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-luxor-200 p-10 shadow-premium">
              <h3 className="font-serif text-3xl text-luxor-900 mb-10">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-luxor-900 font-medium mb-3">First Name</label>
                    <Input placeholder="John" className="bg-luxor-50" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-luxor-900 font-medium mb-3">Last Name</label>
                    <Input placeholder="Doe" className="bg-luxor-50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-luxor-900 font-medium mb-3">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-luxor-50" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-luxor-900 font-medium mb-3">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full bg-luxor-50 border border-luxor-200 text-luxor-900 placeholder:text-luxor-400 placeholder:font-light focus:outline-none focus:border-luxor-gold focus:ring-1 focus:ring-luxor-gold transition-colors py-4 px-5 resize-none text-sm"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <Button variant="primary" className="w-full text-xs tracking-widest uppercase py-4 mt-2">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}