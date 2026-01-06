import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQ } from "@/components/sections/faq";
import { Helmet } from "@/components/seo/helmet";
import heroImage from "@assets/generated_images/luxury_bali_villa_pool_hero.png";
import waterTexture from "@assets/generated_images/crystal_clear_water_texture.png";
import cleaningImage from "@assets/generated_images/professional_pool_cleaning_service.png";
import { Link } from "wouter";
import { CheckCircle2, Wrench, AlertTriangle, Clock, Phone, Settings, Droplet, Shield, ArrowRight } from "lucide-react";

const repairServices = [
  {
    icon: Settings,
    title: "Pump & Motor Repair",
    description: "Expert diagnosis and repair of pool pump issues including motor failures, impeller damage, seal leaks, and electrical problems. We service all major pump brands.",
    issues: ["Motor not running", "Unusual noises", "Low water flow", "Pump leaks", "Overheating"]
  },
  {
    icon: Droplet,
    title: "Filter System Repairs",
    description: "Comprehensive filter repairs for sand, cartridge, and DE filtration systems. We restore filter efficiency and water clarity.",
    issues: ["Poor water clarity", "Pressure problems", "Filter leaks", "Sand in pool", "Cartridge damage"]
  },
  {
    icon: AlertTriangle,
    title: "Leak Detection & Repair",
    description: "Advanced leak detection using pressure testing and dye testing methods. We locate and repair leaks in pools, plumbing, and equipment.",
    issues: ["Water level drops", "Wet spots around pool", "Air bubbles", "High water bills", "Structural cracks"]
  },
  {
    icon: Shield,
    title: "Tile & Surface Repair",
    description: "Professional repair of pool tiles, grout, plaster, and other surface materials. We match colors and textures for seamless repairs.",
    issues: ["Cracked tiles", "Missing grout", "Plaster damage", "Surface stains", "Delamination"]
  },
  {
    icon: Wrench,
    title: "Plumbing Repairs",
    description: "Complete pool plumbing services including pipe repairs, valve replacements, and circulation system fixes.",
    issues: ["Blocked pipes", "Broken valves", "Skimmer problems", "Return jet issues", "Main drain repairs"]
  },
  {
    icon: Clock,
    title: "Emergency Services",
    description: "24/7 emergency repair response for urgent pool issues. Fast arrival times and immediate solutions when you need them most.",
    issues: ["Green pool recovery", "Equipment failure", "Major leaks", "Electrical issues", "Safety concerns"]
  }
];

const commonIssues = [
  {
    problem: "Green Pool / Algae Bloom",
    cause: "Algae outbreaks in Bali often result from missed maintenance, heavy rainfall diluting chemicals, or equipment failure during owner absence.",
    solution: "Our green pool recovery service includes shock treatment, algaecide application, thorough brushing, and filter cleaning. Most pools are restored within 48-72 hours.",
    timeframe: "2-3 days"
  },
  {
    problem: "Pump Motor Failure",
    cause: "High humidity, power fluctuations, and salt air accelerate motor wear in Bali's tropical environment.",
    solution: "We diagnose pump issues on-site and carry common replacement parts. Many repairs are completed same-day; motor replacements typically within 24-48 hours.",
    timeframe: "Same day to 48 hours"
  },
  {
    problem: "Pool Leaks",
    cause: "Ground movement, aging materials, and tree root intrusion can cause leaks in Bali pools.",
    solution: "Our leak detection team uses pressure testing and dye testing to locate leaks precisely. Repairs vary from simple plumbing fixes to structural patching.",
    timeframe: "1-5 days depending on severity"
  },
  {
    problem: "Cloudy Water",
    cause: "Poor filtration, chemical imbalance, or high bather load common in rental properties.",
    solution: "We test water chemistry, inspect filtration systems, and apply clarifiers as needed. Most cloudy pool issues resolve within 24-48 hours.",
    timeframe: "1-2 days"
  },
  {
    problem: "Salt Chlorinator Issues",
    cause: "Scale buildup from Bali's hard water and cell degradation from heavy use.",
    solution: "Cell cleaning, inspection, and replacement if needed. We also balance water chemistry to extend cell life.",
    timeframe: "Same day to 3 days"
  },
  {
    problem: "Cracked or Missing Tiles",
    cause: "Ground settlement, pool age, and thermal expansion in tropical heat.",
    solution: "We source matching tiles and complete repairs with proper waterproof grouting. Surface preparation ensures long-lasting results.",
    timeframe: "1-3 days"
  }
];

export default function PoolRepair() {
  return (
    <>
      <Helmet 
        title="Pool Repair Bali | Expert Pool Pump, Leak & Equipment Repair | Bali Pool Pros"
        description="Professional pool repair services in Bali. Fast pump repairs, leak detection, equipment fixes, and emergency pool services. 24/7 availability for Bali villas and resorts."
        keywords="pool repair Bali, pool pump repair Bali, pool leak repair, pool equipment repair, swimming pool fix Bali, emergency pool repair, aquapure bali, bali pool service"
        canonical="/pool-repair"
      />
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="repair-hero-heading">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Professional pool repair services in Bali - expert technicians for all pool issues" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
              <div className="max-w-3xl">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Pool Repair Bali</span>
                <h1 id="repair-hero-heading" className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Expert <span className="text-primary">Pool Repair</span> Services in Bali
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed mb-8">
                  When your pool needs repair, Bali Pool Pros delivers fast, reliable solutions. From pump failures to leak detection, our expert technicians diagnose and fix pool problems quickly to get you back in the water.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <a className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors">
                      Request Repair Service
                    </a>
                  </Link>
                  <a 
                    href="tel:+6282237565997" 
                    className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    Emergency: +62 822-3756-5997
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Banner */}
          <section className="bg-red-600 py-4">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center md:text-left">
                <AlertTriangle className="w-6 h-6" aria-hidden="true" />
                <span className="font-bold text-lg">24/7 Emergency Pool Repair Available</span>
                <span className="opacity-75">|</span>
                <span>Call us anytime for urgent pool issues: <a href="tel:+6282237565997" className="underline font-bold">+62 822-3756-5997</a></span>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Professional Repairs</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                    Why Choose Bali Pool Pros for Pool Repair?
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                      Pool equipment failures and structural issues don't follow a schedule. When problems arise, you need a <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">repair team</a> that responds quickly, diagnoses accurately, and fixes things right the first time. Bali Pool Pros has been repairing pools across Bali since 2010, and we've seen every type of issue the tropical climate can cause.
                    </p>
                    <p>
                      Our technicians are trained on all major pool equipment brands and carry common replacement parts to ensure many <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">repairs</a> can be completed during the first visit. For more complex issues, we provide clear timelines and fair, transparent pricing before any work begins.
                    </p>
                    <p>
                      We understand that a broken pool isn't just an inconvenience—it can impact your rental income, guest satisfaction, and property value. That's why we prioritize speed without sacrificing quality. Our goal is to get your pool back in perfect condition as quickly as possible.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-6">
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                      <span className="font-medium">Same-day service available</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                      <span className="font-medium">All major brands serviced</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                      <span className="font-medium">Warranty on all repairs</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <img 
                    src={cleaningImage}
                    alt="Pool repair technician fixing equipment in Bali villa pool"
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Repair Services */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Repair Services</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Complete Pool Repair Solutions in Bali</h2>
                <p className="text-slate-600 text-lg">
                  From minor fixes to major overhauls, our experienced technicians handle all aspects of pool repair for Bali properties.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repairServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <service.icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Common Issues We Fix:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.issues.map((issue, idx) => (
                          <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                            {issue}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Problems */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Common Pool Problems</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Pool Issues We Solve Every Day in Bali</h2>
                <p className="text-slate-600 text-lg">
                  Bali's tropical environment creates specific pool challenges. Here's how we address the most common issues our clients face.
                </p>
              </div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="bg-slate-50 rounded-2xl p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-xl mb-2 text-slate-900">{issue.problem}</h3>
                        <div className="space-y-4 text-slate-600">
                          <div>
                            <span className="font-semibold text-slate-700">Cause: </span>
                            {issue.cause}
                          </div>
                          <div>
                            <span className="font-semibold text-slate-700">Our Solution: </span>
                            {issue.solution}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-48 text-center bg-white rounded-xl p-4">
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Typical Resolution</div>
                        <div className="text-primary font-bold text-lg">{issue.timeframe}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Repair Process */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Process</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">How Pool Repair Works</h2>
                <p className="text-slate-600 text-lg">
                  We follow a systematic approach to ensure accurate diagnosis and effective repairs.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">1</div>
                  <h3 className="font-heading font-bold text-lg mb-3">Report Issue</h3>
                  <p className="text-slate-600 text-sm">Contact us via WhatsApp, phone, or email. Describe the problem and send photos if possible.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">2</div>
                  <h3 className="font-heading font-bold text-lg mb-3">Diagnosis</h3>
                  <p className="text-slate-600 text-sm">Our technician visits to inspect and diagnose the issue. We explain findings and provide a repair quote.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">3</div>
                  <h3 className="font-heading font-bold text-lg mb-3">Repair</h3>
                  <p className="text-slate-600 text-sm">Upon approval, we complete repairs using quality parts. Many fixes are done same-day.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">4</div>
                  <h3 className="font-heading font-bold text-lg mb-3">Follow-Up</h3>
                  <p className="text-slate-600 text-sm">We test the repair, provide usage guidelines, and follow up to ensure everything works perfectly.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Warranty Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="bg-primary/5 rounded-3xl p-12 max-w-4xl mx-auto text-center">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Repair Warranty Guarantee</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  All Bali Pool Pros repairs come with our workmanship warranty. If the same issue reoccurs within the warranty period, we'll fix it at no additional charge. Parts carry manufacturer warranties where applicable. Your satisfaction is guaranteed.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-heading text-primary">90 Days</div>
                    <div className="text-sm text-slate-600">Workmanship Warranty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-heading text-primary">1 Year+</div>
                    <div className="text-sm text-slate-600">Parts Warranty (varies)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-heading text-primary">100%</div>
                    <div className="text-sm text-slate-600">Satisfaction Guarantee</div>
                  </div>
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
                Need Pool Repair in Bali?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Don't let pool problems ruin your day. Contact Bali Pool Pros for fast, reliable repair services. Free diagnosis with all repair jobs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    Request Repair Quote
                  </a>
                </Link>
                <a 
                  href="tel:+6282237565997" 
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Call Now
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
