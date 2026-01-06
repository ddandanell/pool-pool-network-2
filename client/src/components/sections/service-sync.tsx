import { ArrowRight, Smartphone, Clock, Check, Phone, Calendar, Droplets, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function ServiceSync() {
  return (
    <section className="py-24 bg-white" id="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">How It Works</span>
          <h2 id="how-it-works-heading" className="text-4xl font-heading font-bold text-slate-900 mb-6">Getting Started is Easy</h2>
          <p className="text-slate-600 text-lg">
            From your first call to regular maintenance, we make pool service in Bali simple and stress-free. Here's how to get professional pool care for your property.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" aria-hidden="true" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/20 transition-colors group text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 mb-6">
                <Phone className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Contact Us</h3>
              <p className="text-slate-500">
                Reach out via WhatsApp, phone, or our contact form. Tell us about your pool and what you need.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/20 transition-colors group text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 mb-6">
                <Calendar className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Free Inspection</h3>
              <p className="text-slate-500">
                We visit your property, assess your pool's needs, and provide a customized service plan and quote.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/20 transition-colors group text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 mb-6">
                <Droplets className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Enjoy Your Pool</h3>
              <p className="text-slate-500">
                We handle all maintenance while you enjoy crystal-clear water. Regular reports keep you informed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" aria-hidden="true" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="text-white max-w-xl">
              <h3 className="text-3xl font-heading font-bold mb-4">Complete Property Care Package</h3>
              <p className="text-slate-300 mb-8">
                Managing multiple villas or a large property? Our comprehensive package combines pool maintenance with additional property services for a complete solution.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-secondary" aria-hidden="true" /> Pool Maintenance
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-secondary" aria-hidden="true" /> Equipment Care
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-secondary" aria-hidden="true" /> Emergency Support
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
