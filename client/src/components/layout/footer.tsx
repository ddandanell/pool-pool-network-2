import { Waves, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const serviceAreas = [
  "Ubud", "Seminyak", "Canggu", "Kerobokan", "Uluwatu", 
  "Jimbaran", "Nusa Dua", "Sanur", "Denpasar", "Tabanan",
  "Karangasem", "Singaraja", "Lovina", "Amed", "Candidasa"
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10" role="contentinfo">
      <div className="container mx-auto px-6">
        {/* Strong WhatsApp CTA Banner */}
        <div className="bg-green-600 rounded-2xl p-8 mb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]" />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Get an Instant Quote on WhatsApp
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fastest way to reach us. Send us a message and we'll respond within minutes during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/6282323011656?text=Hi%20Bali%20Pool%20Pros!%20I'd%20like%20a%20free%20quote%20for%20pool%20service." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a 
                href="tel:+62 823-2301-1656" 
                className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Call +62 823-2301-1656
              </a>
            </div>
            <p className="text-white/60 text-sm mt-3">Available 24/7 for emergencies • Free consultation</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 mb-4"
              aria-label="Bali Pool Pros - Home"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Waves className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">Bali Pool Pros</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Bali's leading pool service company since 2010. We provide professional pool maintenance, cleaning, repair, and installation services for villas, resorts, and residential properties throughout Bali.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/pool-maintenance" className="hover:text-primary transition-colors">
                  Pool Maintenance Bali
                </Link>
              </li>
              <li>
                <Link href="/pool-repair" className="hover:text-primary transition-colors">
                  Pool Repair Bali
                </Link>
              </li>
              <li>
                <Link href="/pool-installation" className="hover:text-primary transition-colors">
                  Pool Installation Bali
                </Link>
              </li>
              <li>
                <Link href="/pool-maintenance" className="hover:text-primary transition-colors">
                  Pool Cleaning Bali
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Water Analysis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/areas-served" className="hover:text-primary transition-colors">
                  Areas We Serve
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6">Contact Us</h4>
            <address className="not-italic">
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Jl. Raya Ubud No. 45,<br />Gianyar, Bali 80571,<br />Indonesia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+62 823-2301-1656" className="hover:text-primary transition-colors">+62 823-2301-1656</a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <a href="https://wa.me/6282323011656" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors font-medium">
                    WhatsApp Us
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:info@balipoolservice.com" className="hover:text-primary transition-colors">info@balipoolservice.com</a>
                </li>
              </ul>
            </address>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://wa.me/6282323011656" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://facebook.com/balipoolpros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://instagram.com/balipoolpros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://linkedin.com/company/balipoolpros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="font-heading font-semibold text-white text-sm mb-4 text-center">
            Pool Service Areas in Bali
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span key={area} className="text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-full hover:text-primary hover:bg-primary/10 transition-colors">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Bali Pool Pros. All rights reserved. Premier Pool Service in Bali.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
