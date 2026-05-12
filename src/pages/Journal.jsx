import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Journal() {
  return (
    <div className="min-h-screen flex flex-col bg-luxor-50">
      <Navbar />
      
      <main className="flex-1">
        <div className="pt-40 pb-20 bg-white border-b border-luxor-200 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-luxor-900 mb-6">
            Stories & <span className="text-luxor-gold italic">Vlogs</span>
          </h1>
          <p className="text-luxor-400 font-light text-lg max-w-2xl mx-auto">
            Travel guides, adventure stories, tips and video journals from the road.
          </p>
        </div>

        <div className="bg-luxor-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center gap-4 mb-24">
              <button className="px-8 py-3 bg-luxor-gold text-white font-medium text-xs tracking-widest uppercase rounded-none shadow-sm">All</button>
              <button className="px-8 py-3 border border-luxor-200 text-luxor-900 hover:text-luxor-gold hover:border-luxor-gold transition-all text-xs tracking-widest uppercase">Blogs</button>
              <button className="px-8 py-3 border border-luxor-200 text-luxor-900 hover:text-luxor-gold hover:border-luxor-gold transition-all text-xs tracking-widest uppercase">Vlogs</button>
            </div>

            <div className="flex flex-col items-center justify-center text-center pb-32">
              <h3 className="font-serif text-3xl text-luxor-900 mb-4">No posts yet</h3>
              <p className="text-luxor-400 font-light">Check back soon for stories and vlogs.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}