import { ArrowRight, Smartphone, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceSync() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">The Workflow</span>
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">How We Sync With Your Ops</h2>
          <p className="text-slate-600 text-lg">
            Forget chasing pool guys. We integrate directly into your management workflow so you never have to wonder if the pool is ready.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/20 transition-colors group text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Add Us to WhatsApp</h3>
              <p className="text-slate-500">
                Create a group with your villa manager and our dispatch team.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/20 transition-colors group text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Share Calendar</h3>
              <p className="text-slate-500">
                Drop a link to your iCal or booking schedule. We auto-schedule cleanings 4 hours before check-in.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/20 transition-colors group text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Get Proof</h3>
              <p className="text-slate-500">
                Receive a photo timestamp and chemical reading instantly after every service.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="text-white max-w-xl">
              <h3 className="text-3xl font-heading font-bold mb-4">Operations Partnership Bundle</h3>
              <p className="text-slate-300 mb-8">
                Manage multiple villas? Get our "One Number" package including mosquito fogging, garden maintenance, and small repairs.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-secondary" /> Fogging
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-secondary" /> Garden
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-secondary" /> Handyman
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Inquire for Ops Bundle
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
