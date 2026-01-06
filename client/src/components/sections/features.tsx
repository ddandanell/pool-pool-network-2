import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Clock, ShieldCheck, Droplets, CalendarCheck, FileCheck, Wrench, Leaf } from "lucide-react";
import cleaningImage from "@assets/generated_images/professional_pool_cleaning_service.png";
import { Link } from "wouter";

const features = [
  {
    icon: CalendarCheck,
    title: "Regular Maintenance",
    description: "Weekly and bi-weekly pool maintenance programs tailored to Bali's tropical climate and your specific needs."
  },
  {
    icon: Droplets,
    title: "Water Chemistry",
    description: "Expert chemical balancing and water testing to ensure safe, crystal-clear pool water year-round."
  },
  {
    icon: Wrench,
    title: "Pool Repair",
    description: "Fast, reliable repair services for pumps, filters, and all pool equipment with 24/7 emergency support."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Sustainable pool care options including saltwater systems, mineral treatment, and reduced-chemical approaches."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="services" aria-labelledby="features-heading">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={cleaningImage} 
                alt="Professional pool cleaning service in Bali - technician maintaining villa pool" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                    <span className="font-semibold text-sm uppercase tracking-wider">Serving All of Bali</span>
                  </div>
                  <h3 className="text-2xl font-bold">Ubud • Seminyak • Canggu • Uluwatu</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Services</span>
            <h2 id="features-heading" className="text-4xl font-heading font-bold text-slate-900 mb-6">
              Complete Pool Service <br/>
              <span className="text-primary">for Bali Properties</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              From routine maintenance to emergency repairs, Bali Pool Pros provides comprehensive pool services 
              designed for the unique challenges of tropical pool ownership. Our expert team keeps your pool pristine, 
              safe, and ready for use year-round.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <feature.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
