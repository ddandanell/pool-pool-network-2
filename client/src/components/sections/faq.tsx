import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How often should I maintain my pool in Bali's tropical climate?",
    answer: "In Bali's tropical climate with high humidity and frequent rainfall, we recommend weekly pool maintenance at minimum. During the monsoon season (November to March), bi-weekly or even twice-weekly service may be necessary to prevent algae growth and maintain proper chemical balance. Regular pool maintenance in Bali is essential due to increased organic debris and accelerated evaporation rates."
  },
  {
    question: "What are common pool issues in tropical areas like Bali?",
    answer: "Common pool problems in Bali include rapid algae growth due to warm temperatures and humidity, mineral buildup from hard water, debris accumulation from tropical vegetation, pH imbalances caused by heavy rainfall, and equipment corrosion from salt air. Our Bali pool experts are trained to address these specific challenges with eco-friendly solutions."
  },
  {
    question: "Do you provide pool services for villas and resorts in Bali?",
    answer: "Yes! Bali Pool Pros specializes in pool service for both private villas and commercial resorts throughout Bali. We serve areas including Ubud, Seminyak, Canggu, Uluwatu, Sanur, and Nusa Dua. Our team understands the unique requirements of hospitality properties and provides flexible scheduling to minimize guest disruption."
  },
  {
    question: "What does your pool cleaning service in Bali include?",
    answer: () => (
      <>
        Our comprehensive pool cleaning service in Bali includes skimming and removing surface debris, vacuuming the pool floor and walls, brushing tiles and waterline, cleaning skimmer and pump baskets, backwashing filters, testing and balancing water chemistry, inspecting equipment, and providing a detailed service report with before/after photos. Learn more at <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">aquapurebali.com</a>.
      </>
    )
  },
  {
    question: "How do you handle pool repair emergencies in Bali?",
    answer: () => (
      <>
        We offer 24/7 emergency pool repair services across Bali. Common emergencies we handle include pump failures, leaks, filter malfunctions, and green pool recovery. Our technicians carry essential parts and can respond within 2-4 hours for urgent issues. Contact us via WhatsApp for immediate assistance with any <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">pool repair needs</a>.
      </>
    )
  },
  {
    question: "What eco-friendly pool maintenance options do you offer?",
    answer: "Bali Pool Pros is committed to sustainable pool care. We offer saltwater system conversions, mineral-based sanitization, UV purification systems, and eco-friendly chemical alternatives. These options reduce chlorine usage, are gentler on skin and the environment, and are ideal for Bali's eco-conscious property owners and resorts."
  },
  {
    question: "How much does pool service cost in Bali?",
    answer: "Pool service costs in Bali vary based on pool size, service frequency, and specific needs. Contact us to get a price tailored to your pool's requirements. We offer free site inspections and customized quotes for all properties."
  },
  {
    question: "Do you offer pool installation services in Bali?",
    answer: "Yes, we provide complete swimming pool installation services in Bali, from design consultation to construction and final setup. We specialize in infinity pools, plunge pools, lap pools, and custom designs that complement Bali's stunning landscapes. Our team works with architects and villa owners to create pools that withstand tropical conditions."
  },
  {
    question: "What areas in Bali do you service?",
    answer: "Bali Pool Pros provides pool services throughout Bali including Ubud, Seminyak, Canggu, Kerobokan, Uluwatu, Jimbaran, Nusa Dua, Sanur, Denpasar, and surrounding areas. We also service the Gili Islands and Lombok upon request. No location in Bali is too remote for our dedicated pool service team."
  },
  {
    question: "How do I schedule pool maintenance with Bali Pool Pros?",
    answer: "Scheduling is easy! Contact us via WhatsApp, phone, or our online contact form. We offer flexible scheduling including early morning and weekend appointments to accommodate villa check-in/check-out times. For Airbnb and villa management clients, we can sync our service schedule with your booking calendar for guest-ready pools every time."
  }
];

interface FAQProps {
  className?: string;
}

export function FAQ({ className = "" }: FAQProps) {
  return (
    <section className={`py-24 bg-slate-50 ${className}`} id="faq" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
            Frequently Asked Questions
          </span>
          <h2 id="faq-heading" className="text-4xl font-heading font-bold text-slate-900 mb-6">
            Pool Service Questions Answered
          </h2>
          <p className="text-slate-600 text-lg">
            Find answers to common questions about pool maintenance, cleaning, repair, and installation services in Bali. 
            Can't find what you're looking for? Contact our Bali pool experts today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border border-slate-100 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:no-underline hover:text-primary py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {typeof item.answer === 'function' ? item.answer() : item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
