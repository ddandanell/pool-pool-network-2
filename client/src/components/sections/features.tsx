import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Clock, ShieldCheck, Droplets, CalendarCheck, FileCheck } from "lucide-react";
import cleaningImage from "@assets/generated_images/professional_pool_cleaning_service.png";

const features = [
  {
    icon: CalendarCheck,
    title: "Calendar Sync",
    description: "We align our cleaning schedule with your check-ins, not just a random day of the week."
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Updates",
    description: "Real-time 'Before & After' photos sent to your operations group after every service."
  },
  {
    icon: ShieldCheck,
    title: "Algae Prevention",
    description: "Proactive 48-hour algae risk dosing during rainy season to prevent green pools."
  },
  {
    icon: FileCheck,
    title: "Turnover Checklist",
    description: "Detailed guest-ready SOPs ensuring the pool area is pristine, not just the water."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={cleaningImage} 
                alt="Professional Pool Cleaning" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-semibold text-sm uppercase tracking-wider">Currently Servicing</span>
                  </div>
                  <h3 className="text-2xl font-bold">Canggu • Seminyak • Uluwatu</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
              More Than Just <br/>
              <span className="text-primary">Skimming Leaves</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Standard pool guys come when they want. We come when your guests need us. 
              Our service is built specifically for the high-stakes world of short-term rentals.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
