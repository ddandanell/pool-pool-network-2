import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Waves, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pool Maintenance", href: "/pool-maintenance" },
  { name: "Pool Repair", href: "/pool-repair" },
  { name: "Pool Installation", href: "/pool-installation" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-white/20 py-3" : "bg-transparent py-5"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
          aria-label="Bali Pool Pros - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <Waves className="w-5 h-5" aria-hidden="true" />
          </div>
          <span className={cn(
            "font-heading font-bold text-xl tracking-tight transition-colors",
            scrolled || mobileMenuOpen ? "text-slate-900" : "text-white"
          )}>
            Bali Pool Pros
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.slice(0, 6).map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                scrolled ? "text-slate-600" : "text-white/90 hover:text-white",
                location === item.href && "text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/blog"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              scrolled ? "text-slate-600" : "text-white/90 hover:text-white",
              location === "/blog" && "text-primary"
            )}
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block">
            <Button 
              variant={scrolled || mobileMenuOpen ? "default" : "secondary"} 
              className="font-medium"
            >
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className={cn("w-6 h-6", scrolled || mobileMenuOpen ? "text-slate-900" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", scrolled || mobileMenuOpen ? "text-slate-900" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white/95 backdrop-blur-md transition-all duration-300 overflow-y-auto",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-colors hover:bg-primary/10 hover:text-primary",
                  location === item.href ? "bg-primary/10 text-primary" : "text-slate-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <Link href="/contact" className="block">
              <Button className="w-full h-14 text-lg font-medium">
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Contact Us Now
              </Button>
            </Link>
            <p className="text-center text-slate-500 text-sm mt-4">
              Call us: +62 822-3756-5997
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
