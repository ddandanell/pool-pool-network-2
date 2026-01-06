import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQ } from "@/components/sections/faq";
import { Helmet } from "@/components/seo/helmet";
import heroImage from "@assets/generated_images/luxury_bali_villa_pool_hero.png";
import waterTexture from "@assets/generated_images/crystal_clear_water_texture.png";
import cleaningImage from "@assets/generated_images/professional_pool_cleaning_service.png";
import { Link } from "wouter";
import { Wrench, Droplets, Settings, Sparkles, Shield, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Pool Maintenance Bali",
    description: "Comprehensive weekly and bi-weekly pool maintenance services tailored to Bali's tropical climate. Our regular maintenance program keeps your pool crystal clear year-round.",
    features: ["Weekly water testing & chemical balancing", "Skimming & debris removal", "Filter cleaning & backwashing", "Equipment inspection", "Tile brushing & waterline cleaning"],
    link: "/pool-maintenance"
  },
  {
    icon: Sparkles,
    title: "Pool Cleaning Bali",
    description: "Professional deep cleaning services for pools of all sizes. From routine cleaning to intensive algae removal, we restore pools to pristine condition.",
    features: ["Surface skimming", "Vacuum cleaning", "Wall & floor brushing", "Drain & refill services", "Green pool recovery"],
    link: "/pool-maintenance"
  },
  {
    icon: Wrench,
    title: "Pool Repair Bali",
    description: "Expert repair services for all pool equipment and structural issues. Fast response times for emergency repairs to minimize downtime.",
    features: ["Pump & motor repair", "Filter system fixes", "Leak detection & repair", "Tile & grout restoration", "Plumbing repairs"],
    link: "/pool-repair"
  },
  {
    icon: Settings,
    title: "Pool Installation Bali",
    description: "Complete swimming pool design and installation services. We build beautiful, durable pools that complement Bali's stunning landscapes.",
    features: ["Custom pool design", "Infinity pool construction", "Plunge pool installation", "Renovation & remodeling", "Equipment installation"],
    link: "/pool-installation"
  },
  {
    icon: Shield,
    title: "Pool Equipment Services",
    description: "Installation, maintenance, and repair of all pool equipment. From pumps to heating systems, we keep your pool technology running smoothly.",
    features: ["Pump installation & service", "Filtration system upgrades", "Salt chlorinator systems", "Pool heating solutions", "Automated pool controls"],
    link: "/pool-repair"
  },
  {
    icon: Clock,
    title: "Emergency Pool Services",
    description: "24/7 emergency response for urgent pool problems. When your pool needs immediate attention, our team is ready to help.",
    features: ["24-hour availability", "Rapid response times", "Emergency leak repair", "Green pool treatment", "Equipment failure response"],
    link: "/contact"
  }
];

export default function Services() {
  return (
    <>
      <Helmet 
        title="Pool Services in Bali | Maintenance, Cleaning, Repair & Installation | Bali Pool Pros"
        description="Complete pool services in Bali including maintenance, cleaning, repair, and installation. Professional pool care for villas, resorts, and residential properties. Get a free quote today."
        keywords="pool services Bali, pool maintenance Bali, pool cleaning Bali, pool repair Bali, swimming pool installation Bali, Bali pool company"
        canonical="/services"
      />
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="services-hero-heading">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Professional pool service in Bali - maintenance, cleaning, repair, and installation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
              <div className="max-w-3xl">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Our Services</span>
                <h1 id="services-hero-heading" className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Complete <span className="text-primary">Pool Services</span> in Bali
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed">
                  From regular maintenance to emergency repairs, Bali Pool Pros offers comprehensive pool services designed for Bali's unique tropical environment. 
                  Trust our expert team to keep your pool in perfect condition year-round.
                </p>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">What We Offer</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Professional Pool Services for Bali Properties</h2>
                <p className="text-slate-600 text-lg">
                  Whether you own a luxury villa, manage a resort, or have a residential property in Bali, our comprehensive pool services ensure your pool remains a source of enjoyment rather than worry. 
                  We understand the specific challenges of pool care in Bali's tropical climate and have developed solutions that work.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <service.icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link}>
                      <a className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                        Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Why Choose Bali Pool Pros</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                    The Bali Pool Service Difference
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                      Choosing the right pool service company in Bali can make all the difference in maintaining your property's value and your guests' satisfaction. At Bali Pool Pros, we bring together local expertise and international standards to deliver pool care that exceeds expectations.
                    </p>
                    <p>
                      Our team understands the unique challenges of pool maintenance in Bali's tropical climate. High humidity accelerates algae growth, monsoon rains can dramatically affect water chemistry, and the island's mineral-rich water requires specialized treatment approaches.
                    </p>
                    <p>
                      We've developed proprietary methods for addressing these challenges, combining eco-friendly products with proven techniques to keep pools pristine while protecting Bali's beautiful environment. Our technicians are trained in the latest pool care technologies and receive ongoing education to stay ahead of industry developments.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-3xl font-bold font-heading text-primary">500+</div>
                      <div className="text-sm text-slate-600">Properties Serviced</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-3xl font-bold font-heading text-primary">14+ Yrs</div>
                      <div className="text-sm text-slate-600">Industry Experience</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-3xl font-bold font-heading text-primary">98%</div>
                      <div className="text-sm text-slate-600">Client Satisfaction</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-3xl font-bold font-heading text-primary">24/7</div>
                      <div className="text-sm text-slate-600">Emergency Support</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src={cleaningImage}
                    alt="Expert pool cleaning service in Bali - professional technician maintaining villa pool"
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Service Process */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Process</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">How Our Pool Service Works</h2>
                <p className="text-slate-600 text-lg">
                  Getting started with Bali Pool Pros is easy. Our streamlined process ensures you get the pool service you need with minimal hassle.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">1</div>
                  <h3 className="font-heading font-bold text-lg mb-3">Free Consultation</h3>
                  <p className="text-slate-600 text-sm">Contact us for a free site inspection and assessment of your pool's needs.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">2</div>
                  <h3 className="font-heading font-bold text-lg mb-3">Custom Plan</h3>
                  <p className="text-slate-600 text-sm">We create a tailored service plan based on your pool size, usage, and specific requirements.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">3</div>
                  <h3 className="font-heading font-bold text-lg mb-3">Regular Service</h3>
                  <p className="text-slate-600 text-sm">Our expert technicians arrive on schedule to maintain your pool to the highest standards.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">4</div>
                  <h3 className="font-heading font-bold text-lg mb-3">Ongoing Support</h3>
                  <p className="text-slate-600 text-sm">Receive detailed reports, WhatsApp updates, and 24/7 support for any pool needs.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Service Areas</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Pool Services Across All of Bali</h2>
                <p className="text-slate-600 text-lg">
                  Bali Pool Pros provides professional pool services throughout the island. Whether you're in the cultural center of Ubud or the beaches of Uluwatu, our team is ready to serve you.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {["Ubud", "Seminyak", "Canggu", "Uluwatu", "Jimbaran", "Nusa Dua", "Sanur", "Kerobokan", "Denpasar", "Tabanan", "Karangasem", "Singaraja"].map((area) => (
                  <div key={area} className="bg-white p-4 rounded-xl text-center shadow-sm">
                    <span className="font-medium text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 relative overflow-hidden">
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
                Get Professional Pool Service in Bali Today
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contact Bali Pool Pros for a free consultation and customized pool service quote. Experience the difference professional pool care makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    Get Free Quote
                  </a>
                </Link>
                <a 
                  href="tel:+6282237565997" 
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Call +62 822-3756-5997
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
