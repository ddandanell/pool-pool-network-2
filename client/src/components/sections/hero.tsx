import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_bali_villa_pool_hero.png";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury villa pool overlooking tropical Bali landscape - professional pool service in Bali" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-white text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Star className="w-3 h-3 fill-primary text-primary" aria-hidden="true" />
            Bali's #1 Pool Service Company
          </motion.div>
          
          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">Pool Service</span> in Bali
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-200 mb-8 leading-relaxed max-w-lg"
          >
            Professional pool maintenance, cleaning, repair, and installation for Bali's finest villas and resorts. Trusted by 500+ properties since 2010.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/80 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" aria-hidden="true" />
              <span>Pool Maintenance Bali</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" aria-hidden="true" />
              <span>Pool Cleaning Bali</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" aria-hidden="true" />
              <span>Pool Repair Bali</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
