import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQ } from "@/components/sections/faq";
import { Helmet } from "@/components/seo/helmet";
import heroImage from "@assets/generated_images/luxury_bali_villa_pool_hero.png";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  "Pool Maintenance",
  "Pool Cleaning",
  "Pool Repair",
  "Pool Installation",
  "Equipment Service",
  "Emergency Repair",
  "Water Analysis",
  "Consultation"
];

const areas = [
  "Ubud",
  "Seminyak",
  "Canggu",
  "Kerobokan",
  "Uluwatu",
  "Jimbaran",
  "Nusa Dua",
  "Sanur",
  "Denpasar",
  "Other"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    area: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet 
        title="Contact Us | Pool Service Bali | Get Free Quote | Bali Pool Pros"
        description="Contact Bali Pool Pros for professional pool services in Bali. Get a free quote for pool maintenance, cleaning, repair, or installation. Call +62 822-3756-5997 or fill out our contact form."
        keywords="contact pool service Bali, pool maintenance quote Bali, pool repair Bali contact, swimming pool company Bali, aquapure bali, bali pool service"
        canonical="/contact"
      />
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[50vh] flex items-center overflow-hidden" aria-labelledby="contact-hero-heading">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Contact Bali Pool Pros for professional pool service in Bali" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
              <div className="max-w-3xl">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Contact Us</span>
                <h1 id="contact-hero-heading" className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Get in Touch with <span className="text-primary">Bali Pool Pros</span>
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed">
                  Ready to discuss your pool needs? Contact us for a free consultation and quote. We're here to help with all your pool service requirements in Bali.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Send Us a Message</h2>
                  <p className="text-slate-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call us directly.
                  </p>

                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                      <p className="text-green-700 mb-6">
                        Your message has been sent successfully. Our team will contact you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", service: "", area: "", message: "" });
                        }}
                        variant="outline"
                        className="border-green-600 text-green-700 hover:bg-green-50"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="+62 xxx xxxx xxxx"
                          />
                        </div>
                        <div>
                          <label htmlFor="area" className="block text-sm font-medium text-slate-700 mb-2">
                            Property Location
                          </label>
                          <select
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                          >
                            <option value="">Select area</option>
                            {areas.map(area => (
                              <option key={area} value={area}>{area}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                          placeholder="Tell us about your pool and what you need..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-slate-500 text-center">
                        By submitting this form, you agree to our privacy policy. We'll never share your information.
                      </p>
                    </form>
                  )}
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Contact Information</h2>
                  <p className="text-slate-600 mb-8">
                    Prefer to reach us directly? Here's how you can contact the Bali Pool Pros team for pool service inquiries.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Phone className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-1">Phone</h3>
                        <a href="tel:+6282237565997" className="text-primary hover:underline font-medium text-lg">
                          +62 822-3756-5997
                        </a>
                        <p className="text-slate-500 text-sm mt-1">Available 24/7 for emergencies</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <MessageCircle className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-1">WhatsApp</h3>
                        <a 
                          href="https://wa.me/6282237565997" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium text-lg"
                        >
                          Chat with Us
                        </a>
                        <p className="text-slate-500 text-sm mt-1">Fastest response time</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Mail className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-1">Email</h3>
                        <a href="mailto:hello@balipoolpros.com" className="text-primary hover:underline font-medium text-lg">
                          hello@balipoolpros.com
                        </a>
                        <p className="text-slate-500 text-sm mt-1">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <MapPin className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-1">Office Address</h3>
                        <address className="not-italic text-slate-700">
                          Jl. Raya Ubud No. 45<br />
                          Gianyar, Bali 80571<br />
                          Indonesia
                        </address>
                        <p className="text-slate-500 text-sm mt-1">By appointment only</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Clock className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-1">Business Hours</h3>
                        <div className="text-slate-700 space-y-1">
                          <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                          <p>Sunday: By appointment</p>
                          <p className="text-primary font-medium">Emergency service: 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas Map */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Service Coverage</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">We Serve All of Bali</h2>
                <p className="text-slate-600 text-lg">
                  Bali Pool Pros provides pool maintenance, repair, and installation services throughout the island. Contact us to confirm service availability in your area.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
                <h3 className="font-heading font-bold text-xl mb-6 text-center">Areas We Service</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "Ubud",
                    "Seminyak",
                    "Canggu",
                    "Kerobokan",
                    "Uluwatu",
                    "Jimbaran",
                    "Nusa Dua",
                    "Sanur",
                    "Denpasar",
                    "Tabanan",
                    "Karangasem",
                    "Singaraja",
                    "Lovina",
                    "Amed",
                    "Candidasa",
                    "Padang Bai"
                  ].map((area) => (
                    <div 
                      key={area} 
                      className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-slate-500 text-sm mt-6">
                  Don't see your area? Contact us – we may still be able to help!
                </p>
              </div>
            </div>
          </section>

          {/* Quick Contact */}
          <section className="py-24 bg-primary">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Need Immediate Pool Assistance?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                For emergency pool repairs or urgent inquiries, call us directly. Our team is available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+6282237565997" 
                  className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors text-lg"
                >
                  <Phone className="w-6 h-6 mr-2" aria-hidden="true" />
                  +62 822-3756-5997
                </a>
                <a 
                  href="https://wa.me/6282237565997" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 transition-colors text-lg"
                >
                  <MessageCircle className="w-6 h-6 mr-2" aria-hidden="true" />
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
