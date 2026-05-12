import { X, CheckCircle } from "lucide-react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { cn } from "../../lib/utils";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Light Backdrop */}
      <div 
        className="absolute inset-0 bg-luxor-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white border border-luxor-200 shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-luxor-400 hover:text-luxor-900 transition-colors"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {/* Left Side - Branding Image */}
        <div className="hidden md:flex relative w-1/2 bg-luxor-50 p-12 flex-col justify-end min-h-[550px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop" 
            alt="Luxury Resort" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="relative z-10">
            <h2 className="font-serif text-4xl text-white mb-4 leading-tight">
              Travel in <br /> <span className="text-luxor-gold italic">Pure Luxury.</span>
            </h2>
            <p className="text-luxor-100/80 text-sm mb-8 font-light tracking-wide">
              India's finest fleet and handpicked glamping experiences at your fingertips.
            </p>
            
            <div className="space-y-4">
              {['10,000+ Happy Customers', '500+ Verified Listings', '100+ Pickup Locations'].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white font-medium tracking-wide">
                  <CheckCircle size={16} className="text-luxor-gold" strokeWidth={2} />
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-white">
          <div className="mb-10">
            <h3 className="text-luxor-gold font-sans font-medium tracking-[0.3em] uppercase text-xs mb-3">Welcome</h3>
            <h2 className="font-serif text-4xl text-luxor-900">Sign in</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-luxor-900 font-medium mb-3">
                Mobile Number
              </label>
              <div className="flex gap-2">
                <div className="bg-luxor-50 border border-luxor-200 flex items-center justify-center px-4 text-luxor-900 font-medium tracking-wider">
                  +91
                </div>
                <Input 
                  type="tel" 
                  placeholder="98765 43210" 
                  className="bg-luxor-50 font-medium tracking-widest text-luxor-900"
                />
              </div>
            </div>

            <Button variant="primary" className="w-full text-xs tracking-widest uppercase py-4">
              Send OTP
            </Button>
          </div>

          <p className="mt-10 text-center text-xs text-luxor-400 font-light tracking-wide">
            New to Luxor? We'll create your account automatically.
          </p>
        </div>
      </div>
    </div>
  );
}