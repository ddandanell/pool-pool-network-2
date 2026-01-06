import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQ } from "@/components/sections/faq";
import { Helmet } from "@/components/seo/helmet";
import heroImage from "@assets/generated_images/luxury_bali_villa_pool_hero.png";
import waterTexture from "@assets/generated_images/crystal_clear_water_texture.png";
import cleaningImage from "@assets/generated_images/professional_pool_cleaning_service.png";
import { Link } from "wouter";
import { CheckCircle2, Droplets, Shield, Clock, Leaf, ArrowRight, Calendar, MessageCircle, FileCheck } from "lucide-react";

const maintenancePackages = [
  {
    name: "Essential",
    description: "Perfect for residential pools with light usage",
    frequency: "Weekly",
    price: "Contact us to get a price",
    features: [
      "Weekly water testing",
      "Chemical balancing",
      "Surface skimming",
      "Filter basket cleaning",
      "Basic equipment check",
      "WhatsApp service reports"
    ]
  },
  {
    name: "Premium",
    description: "Ideal for villas and vacation rentals",
    frequency: "Bi-weekly visits",
    price: "Contact us to get a price",
    popular: true,
    features: [
      "Twice weekly visits",
      "Complete water analysis",
      "Chemical balancing",
      "Vacuum cleaning",
      "Tile & waterline brushing",
      "Filter backwashing",
      "Equipment inspection",
      "Photo documentation",
      "WhatsApp updates"
    ]
  },
  {
    name: "Resort",
    description: "Comprehensive care for commercial properties",
    frequency: "Daily service available",
    price: "Contact us to get a price",
    features: [
      "Daily or custom schedule",
      "Full water chemistry management",
      "Complete cleaning services",
      "Equipment maintenance",
      "24/7 emergency support",
      "Dedicated account manager",
      "Monthly detailed reports",
      "Algae prevention program",
      "Staff training available"
    ]
  }
];

export default function PoolMaintenance() {
  return (
    <>
      <Helmet 
        title="Pool Maintenance Bali | Professional Weekly Pool Care Services | Bali Pool Pros"
        description="Expert pool maintenance services in Bali. Weekly and bi-weekly pool care for villas, resorts, and homes. Chemical balancing, cleaning, and equipment checks in Bali's tropical climate."
        keywords="pool maintenance Bali, weekly pool service Bali, pool care Bali, swimming pool maintenance, villa pool maintenance Bali, resort pool service"
        canonical="/pool-maintenance"
      />
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="maintenance-hero-heading">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Professional pool maintenance service in Bali - keeping villa pools crystal clear" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
              <div className="max-w-3xl">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Pool Maintenance Bali</span>
                <h1 id="maintenance-hero-heading" className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Professional <span className="text-primary">Pool Maintenance</span> in Bali
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed">
                  Keep your pool crystal clear year-round with Bali Pool Pros' comprehensive pool maintenance services. 
                  We understand Bali's tropical climate and provide tailored maintenance programs for villas, resorts, and residential properties.
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Expert Pool Care</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                    Why Regular Pool Maintenance Matters in Bali
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                      Pool maintenance in Bali requires specialized knowledge and consistent attention. The island's tropical climate creates unique challenges that can quickly turn a pristine pool into a green swamp if not properly managed. High humidity accelerates algae growth, monsoon rains dilute chemicals and introduce contaminants, while intense tropical sun promotes bacterial development.
                    </p>
                    <p>
                      At Bali Pool Pros, we've developed maintenance protocols specifically for Bali's conditions. Our experienced technicians understand how local water quality, seasonal changes, and environmental factors affect your pool's chemistry and appearance. We don't just maintain pools – we keep them in guest-ready condition year-round.
                    </p>
                    <p>
                      Regular pool maintenance protects your investment, ensures swimmer safety, and eliminates the stress of pool ownership. Whether you have a private residence, vacation villa, or commercial resort, our maintenance programs are designed to meet your specific needs and budget.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <img 
                    src={cleaningImage}
                    alt="Pool maintenance technician checking water chemistry in Bali villa pool"
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">What's Included</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Comprehensive Pool Maintenance Services</h2>
                <p className="text-slate-600 text-lg">
                  Our pool maintenance service in Bali covers every aspect of pool care to ensure your pool remains safe, clean, and inviting.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Droplets className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">Water Chemistry</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>pH level testing and adjustment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Chlorine and sanitizer management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Alkalinity balancing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Calcium hardness control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Algaecide treatment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Shield className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">Cleaning Services</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Surface skimming and debris removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Pool floor vacuuming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Tile and waterline brushing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Skimmer basket cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Pool deck tidying</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Clock className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">Equipment Care</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Pump inspection and monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Filter cleaning and backwashing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Timer and automation checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Leak detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Equipment performance reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Bali-Specific Challenges */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Bali Pool Expertise</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Understanding Bali's Pool Maintenance Challenges</h2>
                <p className="text-slate-600 text-lg">
                  Pool maintenance in Bali isn't the same as pool care in other climates. Our team is trained to handle the specific challenges that come with tropical pool ownership.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">Monsoon Season Challenges</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Bali's wet season (November to March) brings daily rainfall that can dramatically affect pool water chemistry. Heavy rains dilute chlorine, alter pH levels, and introduce organic debris. Our monsoon maintenance protocols include more frequent visits, adjusted chemical treatments, and proactive algae prevention to keep your pool clear throughout the rainy season.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">High Humidity Effects</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Bali's consistently high humidity creates ideal conditions for algae and bacteria growth. Without proper maintenance, a pool can turn green in just 48-72 hours. Our weekly maintenance includes preventive algaecide treatments and careful sanitizer management to combat humidity-related issues.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">Tropical Vegetation Debris</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Bali's lush tropical gardens produce constant organic debris – leaves, flowers, and insects that fall into pools daily. This organic matter consumes chlorine and promotes algae growth. Our maintenance includes thorough skimming, basket cleaning, and surface treatment to manage vegetation debris effectively.
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">Water Quality Variations</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Bali's water supply varies significantly by region, with differing mineral content and hardness levels. Our technicians test and adjust for local water conditions, preventing scale buildup, staining, and equipment damage that can result from improperly balanced water.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">Salt Air Corrosion</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Coastal properties in areas like Seminyak, Canggu, and Uluwatu face accelerated equipment corrosion from salt air. Our maintenance includes protective treatments and regular equipment inspections to extend the life of pumps, filters, and other pool components.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">Guest Turnover Demands</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Villa rentals and resorts require pools to be guest-ready at all times. We offer flexible scheduling that aligns with check-in/check-out times, ensuring every guest arrives to a sparkling clean pool. Our photo documentation provides proof of service for property managers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance Packages */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Maintenance Plans</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Pool Maintenance Packages for Bali Properties</h2>
                <p className="text-slate-600 text-lg">
                  Choose a maintenance plan that fits your pool's needs and budget. All packages include our satisfaction guarantee.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {maintenancePackages.map((pkg, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-2xl p-8 ${pkg.popular ? 'ring-2 ring-primary shadow-xl' : 'shadow-sm'} relative`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <h3 className="font-heading font-bold text-2xl mb-2">{pkg.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{pkg.description}</p>
                    <div className="text-primary font-bold text-lg mb-2">{pkg.frequency}</div>
                    <div className="text-slate-900 font-heading font-bold text-xl mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <a className={`block text-center font-bold py-3 px-6 rounded-xl transition-colors ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                        Get Started
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Process */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">How It Works</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Our Pool Maintenance Process</h2>
                <p className="text-slate-600 text-lg">
                  Every maintenance visit follows our proven process to ensure consistent, high-quality pool care.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Calendar className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">Scheduled Visit</h3>
                  <p className="text-slate-600 text-sm">Our technician arrives on schedule, ready with all necessary equipment and supplies.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Droplets className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">Test & Treat</h3>
                  <p className="text-slate-600 text-sm">Comprehensive water testing and chemical treatment to ensure perfect balance.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Leaf className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">Clean & Inspect</h3>
                  <p className="text-slate-600 text-sm">Thorough cleaning of pool, equipment inspection, and preventive maintenance.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <MessageCircle className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">Report & Update</h3>
                  <p className="text-slate-600 text-sm">WhatsApp photos and detailed service report sent immediately after completion.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src={waterTexture} 
                alt="Crystal clear pool water texture" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Start Professional Pool Maintenance Today
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Get a free pool assessment and customized maintenance quote. Let Bali Pool Pros handle your pool care so you can enjoy worry-free swimming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    Get Free Quote
                  </a>
                </Link>
                <Link href="/services">
                  <a className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                    View All Services
                  </a>
                </Link>
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
