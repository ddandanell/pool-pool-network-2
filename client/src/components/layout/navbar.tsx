import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Waves } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <Waves className="w-5 h-5" />
            </div>
            <span className={cn(
              "font-heading font-bold text-xl tracking-tight transition-colors",
              scrolled ? "text-slate-900" : "text-white"
            )}>
              TurnoverPool
            </span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "How it Works", "Pricing", "FAQ"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                scrolled ? "text-slate-600" : "text-white/90 hover:text-white"
              )}
            >
              {item}
            </a>
          ))}
        </div>

        <Button 
          variant={scrolled ? "default" : "secondary"} 
          className="font-medium"
        >
          <Phone className="w-4 h-4 mr-2" />
          WhatsApp Us
        </Button>
      </div>
    </nav>
  );
}
