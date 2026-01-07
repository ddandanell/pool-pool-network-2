import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQ } from "@/components/sections/faq";
import { Helmet } from "@/components/seo/helmet";
import heroImage from "@assets/generated_images/luxury_bali_villa_pool_hero.png";
import waterTexture from "@assets/generated_images/crystal_clear_water_texture.png";
import cleaningImage from "@assets/generated_images/professional_pool_cleaning_service.png";
import { Link } from "wouter";
import { CheckCircle2, Compass, Ruler, Hammer, Droplets, Sparkles, ArrowRight, Award, Clock, Shield } from "lucide-react";

const poolTypes = [
  {
    name: "Infinity Pools",
    description: "Breathtaking infinity edge pools that blend seamlessly with Bali's stunning landscapes. Perfect for properties with ocean views, rice terrace backdrops, or jungle settings.",
    features: ["Vanishing edge design", "Catch basin engineering", "Panoramic views", "Premium finishing"],
    popular: true
  },
  {
    name: "Plunge Pools",
    description: "Compact yet elegant plunge pools ideal for smaller villas and urban properties. Maximum impact in minimal space with sophisticated design.",
    features: ["Space-efficient design", "Cool water option", "Contemporary styling", "Quick installation"],
    popular: false
  },
  {
    name: "Lap Pools",
    description: "Long, narrow pools designed for swimming exercise and fitness. Perfect for health-conscious property owners and wellness retreats.",
    features: ["Optimal swim length", "Lane markers available", "Resistance features", "Fitness focused"],
    popular: false
  },
  {
    name: "Freeform Pools",
    description: "Organic, nature-inspired shapes that complement tropical gardens and traditional Balinese architecture. Each pool is uniquely designed.",
    features: ["Custom shapes", "Natural integration", "Rock features", "Tropical landscaping"],
    popular: false
  },
  {
    name: "Resort Pools",
    description: "Large-scale commercial pools for hotels, resorts, and villa developments. Designed for high capacity and stunning visual impact.",
    features: ["High capacity", "Multiple zones", "Commercial grade", "Accessibility features"],
    popular: false
  },
  {
    name: "Renovation & Remodeling",
    description: "Transform your existing pool with modern upgrades, new surfaces, improved equipment, and updated aesthetics.",
    features: ["Surface refinishing", "Equipment upgrades", "Design updates", "Efficiency improvements"],
    popular: false
  }
];

const installationProcess = [
  {
    step: 1,
    title: "Consultation & Design",
    description: "We begin with a detailed site visit to understand your vision, assess the property, and discuss design options. Our team creates custom designs that complement your architecture and landscape.",
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Planning & Permits",
    description: "We handle all necessary permits and approvals with local authorities. Our team prepares detailed construction plans, material specifications, and project timelines.",
    duration: "2-4 weeks"
  },
  {
    step: 3,
    title: "Excavation & Foundation",
    description: "Professional excavation followed by steel reinforcement and foundation work. We ensure proper ground preparation and drainage for long-term pool stability.",
    duration: "1-2 weeks"
  },
  {
    step: 4,
    title: "Shell Construction",
    description: "Gunite or shotcrete application to create the pool shell, followed by waterproofing treatments. This forms the structural core of your pool.",
    duration: "2-3 weeks"
  },
  {
    step: 5,
    title: "Finishing & Equipment",
    description: "Installation of tiles, coping, and interior finishes. Pool equipment including pumps, filters, and sanitation systems are installed and configured.",
    duration: "2-3 weeks"
  },
  {
    step: 6,
    title: "Fill, Balance & Handover",
    description: "Pool filling, water chemistry balancing, equipment testing, and final inspections. We provide complete documentation and maintenance training.",
    duration: "1 week"
  }
];

export default function PoolInstallation() {
  return (
    <>
      <Helmet 
        title="Swimming Pool Installation Bali | Custom Pool Construction | Bali Pool Pros"
        description="Expert swimming pool installation and construction in Bali. Custom infinity pools, plunge pools, and lap pools for villas and resorts. Professional pool builders with 14+ years experience."
        keywords="pool installation Bali, swimming pool construction Bali, pool builder Bali, infinity pool Bali, custom pool design, pool contractors Bali, aquapure bali, bali pool service"
        canonical="/pool-installation"
      />
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="installation-hero-heading">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Custom swimming pool installation in Bali villa - infinity pool overlooking tropical landscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
              <div className="max-w-3xl">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Pool Installation Bali</span>
                <h1 id="installation-hero-heading" className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Custom <span className="text-primary">Pool Installation</span> in Bali
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed mb-8">
                  Transform your Bali property with a stunning custom swimming pool. From breathtaking infinity pools to elegant plunge pools, Bali Pool Pros brings your vision to life with expert design and construction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <a className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors">
                      Start Your Pool Project
                      <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Expert Pool Builders</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                    Building Bali's Most Beautiful Pools Since 2010
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                      A swimming pool is the centerpiece of any Bali property. Whether you're developing a luxury villa, upgrading a family home, or creating a resort experience, the right pool design transforms your space and enhances its value. At Bali Pool Pros, we've been designing and building exceptional pools across Bali for over 14 years.
                    </p>
                    <p>
                      Our <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">pool installation</a> team combines international engineering standards with deep knowledge of local conditions. We understand Bali's unique challenges—from volcanic soil composition to monsoon drainage requirements, from salt air corrosion near coastal areas to the high water tables in some regions. This expertise ensures your pool is not only beautiful but built to last.
                    </p>
                    <p>
                      Every pool we build is custom-designed to complement your property's architecture, maximize your views, and suit your lifestyle. From the initial concept to final handover, our team guides you through the <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">process</a> with clear communication, transparent pricing, and meticulous attention to quality.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <img 
                    src={cleaningImage}
                    alt="Bali Pool Pros team installing a luxury swimming pool in Bali villa"
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold font-heading text-primary">200+</div>
                      <div className="text-xs text-slate-600 mt-1">Pools Built</div>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold font-heading text-primary">14+</div>
                      <div className="text-xs text-slate-600 mt-1">Years Experience</div>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold font-heading text-primary">5 Yr</div>
                      <div className="text-xs text-slate-600 mt-1">Warranty</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pool Types */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Pool Types</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Swimming Pool Styles We Build in Bali</h2>
                <p className="text-slate-600 text-lg">
                  From stunning infinity pools to space-efficient plunge pools, we design and build pools that perfectly suit your property and lifestyle.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {poolTypes.map((type, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-2xl p-8 ${type.popular ? 'ring-2 ring-primary' : ''} shadow-sm hover:shadow-lg transition-shadow relative`}
                  >
                    {type.popular && (
                      <div className="absolute -top-3 left-6 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    )}
                    <h3 className="font-heading font-bold text-xl mb-3">{type.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Process</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Pool Installation Process in Bali</h2>
                <p className="text-slate-600 text-lg">
                  From initial design to final handover, here's how we bring your dream pool to life. Most residential pools are completed within 10-14 weeks.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                {installationProcess.map((phase, index) => (
                  <div key={index} className="flex gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                        {phase.step}
                      </div>
                      {index < installationProcess.length - 1 && (
                        <div className="w-0.5 h-full bg-primary/20 mx-auto mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="font-heading font-bold text-xl">{phase.title}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Why Bali Pool Pros</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Your Trusted Pool Builder in Bali</h2>
                <p className="text-slate-600 text-lg">
                  Choosing the right pool builder is crucial. Here's why property owners across Bali trust us with their pool projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Compass className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">Custom Design</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every pool is uniquely designed to match your property, views, and lifestyle. No cookie-cutter solutions.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Award className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">Premium Quality</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We use only high-grade materials and equipment sourced from trusted suppliers for lasting durability.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Clock className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">On-Time Delivery</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Detailed project planning and experienced crews ensure we meet agreed timelines and milestones.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Shield className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">5-Year Warranty</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our comprehensive warranty covers structural integrity, waterproofing, and workmanship for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bali-Specific Expertise */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src={heroImage}
                    alt="Infinity pool installation overlooking Bali rice terraces"
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Bali Expertise</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                    Pool Construction for Bali's Unique Conditions
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                      Building pools in Bali requires specialized knowledge that goes beyond standard construction practices. Our team has mastered the unique challenges of this tropical island environment.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <span className="font-semibold text-slate-900">Volcanic Soil Engineering: </span>
                          Bali's volcanic soil requires specific foundation techniques to ensure pool stability and prevent shifting.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <span className="font-semibold text-slate-900">Monsoon Drainage: </span>
                          Proper drainage design prevents flooding and protects pool structures during heavy rainy season downpours.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <span className="font-semibold text-slate-900">High Water Table Solutions: </span>
                          In areas with high ground water, we implement specialized construction methods to prevent pool "floating."
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <span className="font-semibold text-slate-900">Corrosion-Resistant Equipment: </span>
                          Coastal properties receive marine-grade equipment and materials to withstand salt air exposure.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Materials & Equipment */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Quality Materials</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Premium Pool Materials & Equipment</h2>
                <p className="text-slate-600 text-lg">
                  We partner with leading manufacturers to bring you the best pool finishing materials and equipment available.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="font-heading font-bold text-xl mb-4">Pool Finishes</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Natural stone tiles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Glass mosaic tiles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Pebble finishes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Quartz surfaces</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Colored plaster</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="font-heading font-bold text-xl mb-4">Filtration & Sanitation</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Variable speed pumps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Sand & cartridge filters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Salt chlorinators</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>UV sanitation systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Mineral systems</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="font-heading font-bold text-xl mb-4">Pool Features</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>LED pool lighting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Water features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Spa jets & bubbles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Pool heating</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>Automation systems</span>
                    </li>
                  </ul>
                </div>
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
                Ready to Build Your Dream Pool in Bali?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contact Bali Pool Pros for a free consultation. Let's discuss your vision and create a stunning pool that transforms your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    Schedule Free Consultation
                  </a>
                </Link>
                <Link href="/about">
                  <a className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                    View Our Projects
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
