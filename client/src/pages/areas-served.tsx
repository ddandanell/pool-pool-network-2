import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQ } from "@/components/sections/faq";
import { Helmet } from "@/components/seo/helmet";
import { JsonLd } from "@/components/seo/json-ld";
import heroImage from "@assets/generated_images/luxury_bali_villa_pool_hero.png";
import waterTexture from "@assets/generated_images/crystal_clear_water_texture.png";
import { Link } from "wouter";
import { CheckCircle2, MapPin, Phone, MessageCircle, Globe, ArrowRight } from "lucide-react";

const regions = [
  {
    name: "Central Bali",
    description: "The cultural heart of the island, known for lush rice terraces, yoga retreats, and luxury villas nestled in tropical jungles.",
    areas: [
      { name: "Ubud", desc: "Cultural hub with premium villa pools needing regular maintenance" },
      { name: "Gianyar", desc: "Home to many eco-resorts and private estates" },
      { name: "Tegalalang", desc: "Iconic rice terrace villas with stunning infinity pools" },
      { name: "Payangan", desc: "Exclusive villa retreats in the hills north of Ubud" },
      { name: "Mas", desc: "Art village area with boutique resort pools" },
    ]
  },
  {
    name: "South Bali Beaches",
    description: "Bali's most popular beach destinations with high concentrations of villas, hotels, and vacation rentals requiring frequent pool care.",
    areas: [
      { name: "Seminyak", desc: "Upscale beach villas and boutique hotels" },
      { name: "Canggu", desc: "Trendy surf town with hundreds of private villa pools" },
      { name: "Kerobokan", desc: "Popular residential area between Seminyak and Canggu" },
      { name: "Kuta", desc: "Busy tourist area with hotel and resort pools" },
      { name: "Legian", desc: "Mid-range hotels and villa complexes" },
    ]
  },
  {
    name: "Bukit Peninsula",
    description: "Dramatic cliff-top and beachfront properties with stunning ocean views, home to some of Bali's most luxurious resorts.",
    areas: [
      { name: "Uluwatu", desc: "Cliff-top luxury villas with spectacular infinity pools" },
      { name: "Jimbaran", desc: "Beachfront resorts and seafood dining area" },
      { name: "Pecatu", desc: "New developments with modern villa complexes" },
      { name: "Ungasan", desc: "Exclusive residential enclaves" },
      { name: "Nusa Dua", desc: "Premium resort district with large hotel pools" },
    ]
  },
  {
    name: "Eastern Bali",
    description: "Less developed, more traditional areas with stunning coastal scenery and volcanic landscapes requiring long-distance service capabilities.",
    areas: [
      { name: "Sanur", desc: "Family-friendly beach area with resort and villa pools" },
      { name: "Denpasar", desc: "Bali's capital city with residential and hotel pools" },
      { name: "Padang Bai", desc: "Ferry port area with small resort pools" },
      { name: "Candidasa", desc: "Quiet coastal town with boutique resort pools" },
      { name: "Amed", desc: "Snorkeling destination with hillside villa pools" },
    ]
  },
  {
    name: "Northern Bali",
    description: "Calmer beaches and black sand shores of northern Bali, popular for quieter getaways and dolphin watching.",
    areas: [
      { name: "Singaraja", desc: "North Bali's main city with residential pools" },
      { name: "Lovina", desc: "Beachfront hotels and villa pools" },
      { name: "Pemuteran", desc: "Diving destination with eco-resort pools" },
    ]
  },
  {
    name: "Western & Central Regions",
    description: "Inland regions and developing coastal areas with growing numbers of villa and resort properties.",
    areas: [
      { name: "Tabanan", desc: "Rice terrace region with mountain-view villa pools" },
      { name: "Karangasem", desc: "Eastern regency with traditional properties" },
      { name: "Munduk", desc: "Mountain area with cool-climate hotel pools" },
      { name: "Bedugul", desc: "Lake region with mountain resort pools" },
    ]
  }
];

export default function AreasServed() {
  const areasServedSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bali Pool Pros - Pool Service Across Bali",
    "description": "Professional pool service covering all regions of Bali including Ubud, Seminyak, Canggu, Uluwatu, Jimbaran, Nusa Dua, Sanur, and more.",
    "url": "https://balipoolcleaning.online/areas-served",
    "telephone": "+62 823-2301-1656",
    "areaServed": [
      "Ubud", "Gianyar", "Seminyak", "Canggu", "Kerobokan", "Kuta", "Legian",
      "Uluwatu", "Jimbaran", "Pecatu", "Ungasan", "Nusa Dua",
      "Sanur", "Denpasar", "Padang Bai", "Candidasa", "Amed",
      "Singaraja", "Lovina", "Pemuteran",
      "Tabanan", "Karangasem", "Munduk", "Bedugul",
      "Bali", "Indonesia"
    ]
  };

  return (
    <>
      <Helmet 
        title="Pool Service Areas in Bali | Areas We Serve | Bali Pool Pros"
        description="Bali Pool Pros provides professional pool maintenance, repair, and installation services across all of Bali. Service areas include Ubud, Seminyak, Canggu, Uluwatu, Jimbaran, Nusa Dua, Sanur, and more."
        keywords="pool service areas Bali, Bali pool service coverage, pool maintenance Ubud, pool service Seminyak, pool repair Canggu, pool installation Uluwatu, Bali villa pool service"
        canonical="/areas-served"
      />
      <JsonLd data={areasServedSchema} />
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[50vh] flex items-center overflow-hidden" aria-labelledby="areas-hero-heading">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Bali Pool Pros service areas across the island of Bali" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
              <div className="max-w-3xl">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Service Areas</span>
                <h1 id="areas-hero-heading" className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Pool Service Areas <span className="text-primary">Across All of Bali</span>
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed">
                  Bali Pool Pros provides professional pool maintenance, cleaning, repair, and installation services 
                  throughout Bali. From the cultural heart of Ubud to the stunning coastlines of Uluwatu, our expert 
                  team is ready to serve you.
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Comprehensive Coverage</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                    We Cover Every Corner of Bali
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    No matter where your property is located in Bali, our team can reach you. We have technicians 
                    stationed across the island to ensure fast response times and reliable service. From luxury 
                    villas in Seminyak to remote eco-retreats in Amed, Bali Pool Pros brings professional pool 
                    care to your doorstep.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                      <div className="text-4xl font-bold font-heading text-primary">20+</div>
                      <div className="text-sm text-slate-600 mt-1">Bali Towns Serviced</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold font-heading text-primary">500+</div>
                      <div className="text-sm text-slate-600 mt-1">Properties Maintained</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold font-heading text-primary">6</div>
                      <div className="text-sm text-slate-600 mt-1">Regional Teams</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold font-heading text-primary">24/7</div>
                      <div className="text-sm text-slate-600 mt-1">Emergency Coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Sections */}
          {regions.map((region, index) => (
            <section key={region.name} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
              <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-start gap-4 mb-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-slate-900 mb-3">{region.name}</h2>
                      <p className="text-slate-600 text-lg max-w-3xl">{region.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {region.areas.map((area) => (
                      <div 
                        key={area.name} 
                        className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h3 className="font-heading font-bold text-lg text-slate-900">{area.name}</h3>
                            <p className="text-slate-500 text-sm mt-1">{area.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Quick Reference */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Quick Reference</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">All Service Areas at a Glance</h2>
              </div>

              <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {regions.flatMap(r => r.areas).map((area) => (
                    <div 
                      key={area.name}
                      className="bg-white rounded-lg p-3 text-center shadow-sm"
                    >
                      <span className="font-medium text-slate-700 text-sm">{area.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-slate-500 text-sm mt-8">
                  Don't see your area? Contact us – we may still be able to help! Our teams can travel throughout 
                  the island for regular service.
                </p>
              </div>
            </div>
          </section>

          {/* Service Coverage CTA */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src={waterTexture} 
                alt="Pool water texture background" 
                className="w-full h-full object-cover opacity-20"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
              <Globe className="w-16 h-16 text-white mx-auto mb-6 opacity-80" aria-hidden="true" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Is Your Area Not Listed?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                We may still be able to serve you! Contact our team to confirm service availability in your location. 
                We regularly expand our coverage to new areas across Bali.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Check Your Area
                  </a>
                </Link>
                <a 
                  href="https://wa.me/6282323011656" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </section>

          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
}
