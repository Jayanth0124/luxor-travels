import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Journal() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="pt-40 pb-20 bg-luxor-900 border-b border-white/5 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-luxor-100 mb-6">
            Stories & <span className="text-luxor-primary italic">Vlogs</span>
          </h1>
          <p className="text-luxor-400 font-light text-lg max-w-2xl mx-auto">
            Travel guides, adventure stories, tips and video journals from the road.
          </p>
        </div>

        <div className="bg-luxor-900 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center gap-4 mb-24">
              <button className="px-6 py-2 bg-luxor-primary text-luxor-900 font-medium text-sm rounded-none">All</button>
              <button className="px-6 py-2 border border-white/10 text-luxor-400 hover:text-luxor-primary hover:border-luxor-primary transition-all text-sm">Blogs</button>
              <button className="px-6 py-2 border border-white/10 text-luxor-400 hover:text-luxor-primary hover:border-luxor-primary transition-all text-sm">Vlogs</button>
            </div>

            <div className="flex flex-col items-center justify-center text-center pb-32">
              <h3 className="font-serif text-3xl text-luxor-100 mb-2">No posts yet</h3>
              <p className="text-luxor-400 font-light">Check back soon for stories and vlogs.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}