import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQ } from "@/components/sections/faq";
import { Helmet } from "@/components/seo/helmet";
import heroImage from "@assets/generated_images/luxury_bali_villa_pool_hero.png";
import waterTexture from "@assets/generated_images/crystal_clear_water_texture.png";
import cleaningImage from "@assets/generated_images/professional_pool_cleaning_service.png";
import { Link } from "wouter";
import { Users, Award, Leaf, Clock, CheckCircle2 } from "lucide-react";

const teamMembers = [
  {
    name: "I Made Putra",
    role: "Lead Pool Technician",
    bio: "With over 15 years of experience in pool repair and maintenance, Made specializes in understanding Bali's unique water systems and tropical climate challenges. He leads our technical team with expertise in pump systems, filtration, and chemical balancing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Ni Wayan Sari",
    role: "Operations Manager",
    bio: "Wayan manages our day-to-day operations, ensuring seamless coordination between our field teams and clients. With a background in hospitality management, she understands the needs of Bali's villa and resort owners.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "James Mitchell",
    role: "Technical Director",
    bio: "Originally from Australia, James brings international pool industry standards to Bali Pool Pros. His engineering background helps us implement the latest eco-friendly technologies and efficient maintenance systems.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "I Ketut Dharma",
    role: "Senior Pool Installer",
    bio: "Ketut has built over 200 pools across Bali, from infinity pools overlooking rice terraces to plunge pools in luxury villas. His craftsmanship combines traditional Balinese aesthetics with modern engineering.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Sarah Chen",
    role: "Customer Relations Manager",
    bio: "Sarah ensures every client receives personalized attention and prompt communication. Fluent in English, Mandarin, and Indonesian, she bridges the gap between our international clientele and local teams.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "I Gede Surya",
    role: "Water Quality Specialist",
    bio: "Surya is our certified water chemistry expert, trained in the latest water testing and treatment methods. He develops customized water care programs for each pool based on usage patterns and local conditions.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face"
  }
];

const milestones = [
  { year: "2010", title: "Founded in Ubud", description: "Started as a small team serving luxury villas in the Ubud area." },
  { year: "2013", title: "Expanded to Seminyak", description: "Grew our service area to cover Bali's bustling Seminyak district." },
  { year: "2015", title: "100 Properties Served", description: "Reached a milestone of 100 regular clients across Bali." },
  { year: "2017", title: "Eco-Friendly Initiative", description: "Launched our green pool care program with sustainable practices." },
  { year: "2019", title: "Pool Installation Services", description: "Expanded to offer complete pool design and construction." },
  { year: "2021", title: "500+ Properties", description: "Now trusted by over 500 villas, resorts, and residences." },
  { year: "2024", title: "Island-Wide Coverage", description: "Full service coverage across all regions of Bali." }
];

export default function About() {
  return (
    <>
      <Helmet 
        title="About Us | Bali Pool Pros - Expert Pool Service Company in Bali Since 2010"
        description="Learn about Bali Pool Pros, Bali's leading pool service company. Founded in 2010, our team of expert technicians provides professional pool maintenance, cleaning, repair, and installation throughout Bali."
        keywords="about Bali Pool Pros, pool service company Bali, pool experts Bali, pool maintenance team, Bali pool professionals"
        canonical="/about"
      />
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="about-hero-heading">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Bali Pool Pros team providing expert pool service in Bali" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
              <div className="max-w-3xl">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">About Us</span>
                <h1 id="about-hero-heading" className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Bali's Most Trusted <span className="text-primary">Pool Service</span> Experts
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed">
                  Founded in 2010, Bali Pool Pros has grown from a small maintenance team to Bali's premier pool service company. 
                  We combine local expertise with international standards to deliver exceptional pool care for villas, resorts, and homes across the island.
                </p>
              </div>
            </div>
          </section>

          {/* Company Story */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                    From Ubud Villas to Island-Wide Excellence
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                      Bali Pool Pros was founded in 2010 by a group of local Balinese experts and expatriate engineers who saw a need for reliable, professional pool services in Bali. Starting as a small maintenance team serving luxury villas in Ubud, we quickly earned a reputation for excellence and attention to detail.
                    </p>
                    <p>
                      Our founders understood that maintaining pools in Bali's tropical climate presented unique challenges that required specialized knowledge. The high humidity, monsoon seasons, intense sun exposure, and mineral-rich water demanded expertise beyond standard pool maintenance practices.
                    </p>
                    <p>
                      Over the years, we've grown to become Bali's leading pool service provider, handling over 500 properties annually. Our commitment to sustainable practices, eco-friendly products, and exceptional customer service has made us the trusted choice for villa owners, resort managers, and homeowners throughout the island.
                    </p>
                    <p>
                      Today, our team of certified technicians serves all regions of Bali, from the cultural heart of Ubud to the beach communities of Seminyak, Canggu, Uluwatu, and beyond. We continue to innovate with the latest pool technology while honoring our commitment to Bali's beautiful environment.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <img 
                    src={cleaningImage}
                    alt="Professional pool cleaning service in Bali by Bali Pool Pros technician"
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold font-heading text-primary">500+</div>
                      <div className="text-sm text-slate-600 mt-1">Properties Served</div>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold font-heading text-primary">14+</div>
                      <div className="text-sm text-slate-600 mt-1">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Values</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">What Drives Our Pool Service Excellence</h2>
                <p className="text-slate-600 text-lg">
                  At Bali Pool Pros, our commitment to quality pool service in Bali is guided by core values that shape everything we do.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Users className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Customer First</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every decision we make prioritizes our clients' satisfaction and pool care needs. Your success is our success.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Award className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Excellence</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We maintain the highest standards in pool maintenance, using premium products and proven techniques.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Leaf className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Sustainability</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Eco-friendly pool care solutions that protect Bali's beautiful environment while keeping pools pristine.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Clock className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Reliability</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Consistent, on-time service you can count on. We show up when we say we will, every time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Journey</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Milestones in Pool Service Excellence</h2>
                <p className="text-slate-600 text-lg">
                  From humble beginnings to island-wide coverage, see how Bali Pool Pros has evolved to become Bali's trusted pool service provider.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />
                  
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                          <span className="text-primary font-bold text-lg">{milestone.year}</span>
                          <h3 className="font-heading font-bold text-xl mt-2 mb-2">{milestone.title}</h3>
                          <p className="text-slate-600 text-sm">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-white shadow" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-24 bg-slate-50" id="team">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Team</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Meet the Bali Pool Experts</h2>
                <p className="text-slate-600 text-lg">
                  Our team of experienced professionals brings together local Balinese expertise and international pool industry knowledge to deliver the best pool service in Bali.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <img 
                      src={member.image}
                      alt={`${member.name} - ${member.role} at Bali Pool Pros pool service company`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-xl">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
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
                alt="Crystal clear pool water texture" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready to Experience the Best Pool Service in Bali?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join over 500 satisfied property owners who trust Bali Pool Pros for their pool maintenance, cleaning, and repair needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    Contact Us Today
                  </a>
                </Link>
                <Link href="/services">
                  <a className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                    View Our Services
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
