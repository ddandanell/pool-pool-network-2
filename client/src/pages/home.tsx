import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ServiceSync } from "@/components/sections/service-sync";
import waterTexture from "@assets/generated_images/crystal_clear_water_texture.png";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Banner */}
        <div className="bg-primary py-4 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-8 md:gap-16 opacity-80 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <span className="text-white font-heading font-bold text-lg">THE LEADING VILLA MANAGEMENT</span>
              <span className="text-white font-heading font-bold text-lg opacity-50">•</span>
              <span className="text-white font-heading font-bold text-lg">AIRBNB SUPERHOST PARTNER</span>
              <span className="text-white font-heading font-bold text-lg opacity-50">•</span>
              <span className="text-white font-heading font-bold text-lg">BALI VILLA ASSOCIATION</span>
            </div>
          </div>
        </div>

        <Features />
        
        <ServiceSync />

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden" id="contact">
          <div className="absolute inset-0 z-0">
             <img 
              src={waterTexture} 
              alt="Water Texture" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready for 5-Star Reviews?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Stop worrying about green pools and angry guests. Sync your pool maintenance today.
            </p>
            
            <form className="max-w-md mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2">
              <input 
                type="text" 
                placeholder="Enter Villa Location (e.g. Canggu)" 
                className="flex-1 px-6 py-4 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="bg-secondary text-white font-bold px-8 py-4 rounded-xl hover:bg-secondary/90 transition-colors whitespace-nowrap">
                Get Quote
              </button>
            </form>
            <p className="mt-4 text-white/60 text-sm">Free site inspection • No commitment required</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
