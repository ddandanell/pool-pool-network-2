import { Waves, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
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
                <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Careers</a>
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
                  <a href="tel:+6282237565997" className="hover:text-primary transition-colors">+62 822-3756-5997</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:hello@balipoolpros.com" className="hover:text-primary transition-colors">hello@balipoolpros.com</a>
                </li>
              </ul>
            </address>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://wa.me/6282237565997" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
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
                href="https://twitter.com/balipoolpros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Bali Pool Pros. All rights reserved. Pool Service in Bali.</p>
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
