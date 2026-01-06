import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ServiceSync } from "@/components/sections/service-sync";
import { FAQ } from "@/components/sections/faq";
import waterTexture from "@assets/generated_images/crystal_clear_water_texture.png";
import { Link } from "wouter";
import { Helmet } from "@/components/seo/helmet";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  const poolCleaningBaliSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pool Cleaning Bali",
    "description": "Professional pool cleaning and villa pool maintenance services in Bali, Indonesia. Serving Canggu, Seminyak, Ubud, Sanur and all Bali areas.",
    "url": "https://poolcleaningbali.online",
    "telephone": "+62-822-3756-5997",
    "email": "info@poolcleaningbali.online",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bali",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-8.4095",
      "longitude": "115.1889"
    },
    "areaServed": ["Canggu", "Seminyak", "Ubud", "Sanur", "Kuta", "Denpasar"],
    "serviceType": ["Pool Cleaning", "Villa Pool Maintenance", "Emergency Pool Cleaning", "Hotel Pool Cleaning", "Swimming Pool Service"],
    "priceRange": "$$",
    "openingHours": "Mo-Su 07:00-19:00",
    "sameAs": [
      "https://facebook.com/poolcleaningbali",
      "https://instagram.com/poolcleaningbali"
    ]
  };

  return (
    <>
      <Helmet 
        title="Pool Service in Bali | Expert Pool Maintenance, Cleaning & Repair | Bali Pool Pros"
        description="Bali's leading pool service company. Professional pool maintenance, cleaning, repair, and installation for villas, resorts, and residences. Expert pool care in Bali's tropical climate."
        keywords="pool service Bali, pool maintenance Bali, pool cleaning Bali, pool repair Bali, swimming pool installation Bali, Bali pool experts, aquapure bali, bali pool service"
        canonical="/"
      />
      <JsonLd data={poolCleaningBaliSchema} />
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Navbar />
        
        <main>
          <Hero />
          
          {/* Trust Banner */}
          <div className="bg-primary py-4 overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-center gap-8 md:gap-16 opacity-80 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <span className="text-white font-heading font-bold text-lg">TRUSTED BY 500+ VILLAS</span>
                <span className="text-white font-heading font-bold text-lg opacity-50">•</span>
                <span className="text-white font-heading font-bold text-lg">BALI'S #1 POOL SERVICE</span>
                <span className="text-white font-heading font-bold text-lg opacity-50">•</span>
                <span className="text-white font-heading font-bold text-lg">ECO-FRIENDLY SOLUTIONS</span>
              </div>
            </div>
          </div>

          <Features />
          
          <ServiceSync />

          {/* About Section Preview */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">About Bali Pool Pros</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                    Bali's Leading <span className="text-primary">Pool Service Experts</span> Since 2010
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Founded in 2010 by a team of local Balinese experts and international engineers, Bali Pool Pros began as a small maintenance crew serving luxury villas in Ubud. Today, we're Bali's most trusted <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">pool service</a> company, handling over 500 properties annually with a commitment to sustainable practices and exceptional customer service.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Our team understands the unique challenges of maintaining pools in Bali's tropical climate—from monsoon season algae prevention to equipment protection against humidity and salt air. We combine traditional expertise with modern technology to deliver <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">pool maintenance</a>, cleaning, repair, and installation services that exceed expectations.
                  </p>
                  <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                    Learn More About Our Story
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src={waterTexture}
                    alt="Crystal clear pool water in Bali villa"
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                    <div className="text-4xl font-bold font-heading">14+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 relative overflow-hidden" id="contact">
            <div className="absolute inset-0 z-0">
               <img 
                src={waterTexture} 
                alt="Pool water texture background" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready for Crystal Clear Pools?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Get professional pool service in Bali from the island's most trusted experts. Free site inspection and customized maintenance plans.
              </p>
              
              <form className="max-w-md mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2">
                <input 
                  type="text" 
                  placeholder="Enter Villa Location (e.g. Ubud)" 
                  className="flex-1 px-6 py-4 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label="Enter your villa location"
                />
                <button className="bg-secondary text-white font-bold px-8 py-4 rounded-xl hover:bg-secondary/90 transition-colors whitespace-nowrap">
                  Get Free Quote
                </button>
              </form>
              <p className="mt-4 text-white/60 text-sm">Free site inspection • No commitment required • Serving all of Bali</p>
            </div>
          </section>

          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
}
