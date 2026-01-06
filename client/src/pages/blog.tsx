import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQ } from "@/components/sections/faq";
import { Helmet } from "@/components/seo/helmet";
import heroImage from "@assets/generated_images/luxury_bali_villa_pool_hero.png";
import waterTexture from "@assets/generated_images/crystal_clear_water_texture.png";
import cleaningImage from "@assets/generated_images/professional_pool_cleaning_service.png";
import { Link } from "wouter";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Essential Pool Maintenance Tips for Bali's Monsoon Season",
    excerpt: "The monsoon season in Bali brings heavy rainfall that can dramatically affect your pool's water chemistry and cleanliness. Learn how to keep your pool pristine during the wet months with these essential maintenance tips from our expert technicians.",
    content: `The monsoon season in Bali (November to March) presents unique challenges for pool owners. Heavy rainfall dilutes chlorine levels, introduces organic debris, and can quickly turn a crystal-clear pool into a murky mess. Here's how to maintain your pool during these challenging months.

First, increase your maintenance frequency. What works during dry season won't be sufficient during monsoon. Consider moving from weekly to bi-weekly service, or even more frequent visits during periods of heavy rain. This helps maintain consistent chemical balance and prevents algae blooms.

Second, adjust your chemical treatment approach. Rain water is typically acidic and will lower your pool's pH. After significant rainfall, test your water and adjust pH levels accordingly. You may also need to shock your pool more frequently to combat the increased bacterial load from rainwater runoff.

Third, keep up with debris removal. Falling leaves, flowers, and organic matter accelerate chlorine consumption and provide nutrients for algae growth. Run your skimmer continuously and consider adding an automatic pool cleaner during monsoon season.

Finally, protect your pool equipment. Ensure pump housings are sealed, electrical connections are protected, and drainage around the pool deck is functioning properly. Water damage to equipment can be costly to repair.

At Bali Pool Pros, our monsoon maintenance packages are specifically designed to address these seasonal challenges. Contact us to learn more about protecting your pool during the wet season.`,
    image: heroImage,
    author: "I Made Putra",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Pool Maintenance"
  },
  {
    id: 2,
    title: "Understanding Pool Chemistry in Bali's Tropical Climate",
    excerpt: "Maintaining proper water chemistry in Bali's hot and humid environment requires a different approach than temperate climates. Discover the key factors affecting your pool's chemical balance and how to keep water safe and sparkling.",
    content: `Pool chemistry in Bali is affected by factors unique to our tropical environment. Understanding these factors helps you maintain safe, clear water throughout the year.

Temperature is the biggest factor. Bali's warm climate accelerates chemical reactions and promotes faster evaporation. This means chlorine gets used up more quickly, requiring higher doses or more frequent treatment. Saltwater pools may need their chlorine generators running longer hours.

Humidity plays a dual role. While high humidity slows evaporation somewhat, it also promotes algae and bacteria growth. The warm, moist environment is paradise for microorganisms, making sanitizer levels critically important.

Bali's water supply varies significantly by region. Some areas have very hard water with high mineral content, while others have softer water. Understanding your local water chemistry helps you adjust treatment accordingly. Hard water areas may require regular descaling treatments.

Sun exposure in tropical latitudes is intense. UV light degrades chlorine rapidly, so using cyanuric acid (stabilizer) is essential for outdoor pools. However, stabilizer levels need monitoring as they can build up over time.

Regular professional testing is the key to maintaining proper balance. DIY test kits are useful for daily monitoring, but periodic comprehensive testing by pool professionals ensures all parameters are within optimal ranges.`,
    image: cleaningImage,
    author: "James Mitchell",
    date: "December 8, 2024",
    readTime: "6 min read",
    category: "Water Chemistry"
  },
  {
    id: 3,
    title: "Green Pool Recovery: How We Rescue Algae-Infested Pools in Bali",
    excerpt: "Returned from vacation to find your pool has turned green? This common problem in Bali's climate can be resolved quickly with the right approach. Here's how our team tackles severe algae infestations.",
    content: `A green pool is one of the most common emergency calls we receive at Bali Pool Pros. In Bali's tropical climate, an untreated pool can develop a severe algae bloom in just 48-72 hours, especially during monsoon season.

The first step in green pool recovery is assessing the severity. Light green water indicates early-stage algae and can usually be treated within 24-48 hours. Dark green or black water suggests a severe infestation that may take 3-5 days to fully resolve. If you can't see the bottom of a shallow pool, the problem is severe.

Our recovery process begins with balancing pH. Chlorine works most effectively at a pH between 7.2-7.4. If pH is too high, even large amounts of chlorine won't kill algae effectively. We adjust pH first, then shock the pool with high-dose chlorine treatment.

Next comes the brushing phase. Algae clings to pool surfaces, and brushing breaks up the biofilm, exposing algae cells to the sanitizer. Our technicians thoroughly brush all surfaces – walls, floor, steps, and behind ladders.

Continuous filtration is essential during recovery. We run the pump 24 hours a day and clean or backwash filters multiple times during the process. Dead algae must be removed, or it will cloud the water and potentially restart the bloom.

After the water clears, we vacuum the pool to waste (bypassing the filter) to remove dead algae debris. Final water testing and chemical adjustment restores normal conditions, and we schedule a follow-up visit to confirm the pool remains clear.

Prevention is always better than cure. Regular maintenance, especially during high-risk monsoon season, prevents the conditions that allow algae blooms to develop.`,
    image: waterTexture,
    author: "I Gede Surya",
    date: "November 28, 2024",
    readTime: "7 min read",
    category: "Pool Problems"
  },
  {
    id: 4,
    title: "Choosing the Right Pool for Your Bali Villa: Design Considerations",
    excerpt: "Planning to build a pool at your Bali property? From infinity pools overlooking rice terraces to compact plunge pools for urban villas, learn what factors should guide your pool design decisions.",
    content: `Building a pool in Bali is an exciting investment that can transform your property and significantly increase its value. But with so many options available, how do you choose the right pool design for your specific situation?

Start with your primary use case. Is this pool for swimming laps, relaxing, entertaining guests, or all of the above? A lap pool needs length and straight lines. A social pool benefits from shallow lounging areas and perhaps an integrated spa. A villa rental pool should photograph well and require minimal maintenance.

Consider your views and orientation. Bali is blessed with stunning landscapes – rice terraces, jungle, ocean horizons. An infinity edge positioned correctly can create breathtaking visual effects. We help clients maximize their unique views through careful pool placement and design.

Size matters, but bigger isn't always better. A well-designed smaller pool can provide more satisfaction than an oversized one that overwhelms your outdoor space. Consider the proportions of your property and leave adequate deck space for furniture and circulation.

Bali's tropical climate means your pool will likely be used year-round, but it also affects construction. We build pools that can handle monsoon rains, resist algae growth, and incorporate proper drainage. Materials matter too – some finishes perform better in tropical conditions than others.

Budget considerations extend beyond construction costs. Factor in ongoing maintenance, equipment operation, and eventual renovation. Quality construction and equipment may cost more initially but save money long-term through reduced repairs and energy costs.

Our team at Bali Pool Pros provides free design consultations to help you explore options and create a pool that perfectly suits your property and lifestyle.`,
    image: heroImage,
    author: "I Ketut Dharma",
    date: "November 20, 2024",
    readTime: "8 min read",
    category: "Pool Installation"
  },
  {
    id: 5,
    title: "Salt vs. Chlorine: Which Sanitization System Works Best in Bali?",
    excerpt: "Debating between traditional chlorine and a saltwater system for your Bali pool? Both have advantages and drawbacks in tropical conditions. Here's an honest comparison to help you decide.",
    content: `One of the most common questions we receive is whether to use traditional chlorine or a saltwater chlorination system. Both methods have their place in Bali, and the best choice depends on your specific circumstances.

Saltwater pools have gained popularity for good reasons. They produce chlorine continuously through electrolysis, maintaining more consistent sanitizer levels. The water feels softer on skin and eyes, and you don't need to handle harsh chemicals. For vacation rentals, guests often prefer the saltwater swimming experience.

However, saltwater systems in Bali require careful consideration. Salt cells have a limited lifespan and can be expensive to replace. In coastal areas, equipment corrosion is already a concern – adding salt to the mix can accelerate damage to metal components. The initial installation cost is higher than traditional chlorine systems.

Traditional chlorine systems are simpler, less expensive to install, and easier to repair. Parts are readily available throughout Bali. The flexibility to adjust dosing quickly makes them easier to manage during water chemistry fluctuations.

The downside of traditional chlorine is the ongoing effort of adding chemicals and the potential for inconsistent levels between additions. Storage of chlorine products requires care in tropical heat and humidity.

Some properties benefit from hybrid approaches – perhaps saltwater for the main pool and traditional chlorine for a smaller spa that sees heavier use. Others opt for mineral systems or UV/ozone supplementation to reduce chemical reliance.

Our recommendation? Consider your budget, property location, maintenance preferences, and guest expectations. We're happy to discuss options during a free consultation.`,
    image: cleaningImage,
    author: "James Mitchell",
    date: "November 12, 2024",
    readTime: "6 min read",
    category: "Equipment"
  },
  {
    id: 6,
    title: "Pool Equipment Maintenance: Extending the Life of Your Investment",
    excerpt: "Pool pumps, filters, and heaters represent a significant investment. Learn how proper maintenance can extend equipment life and prevent costly breakdowns in Bali's challenging climate.",
    content: `Pool equipment in Bali faces a challenging environment. High humidity, salt air (especially near the coast), power fluctuations, and year-round operation all take their toll. Proper maintenance can double or triple the lifespan of your equipment.

Pumps are the heart of your pool system. Keep pump baskets clear of debris to prevent straining the motor. Check for air leaks in the suction line that can cause cavitation. Listen for unusual sounds that might indicate bearing wear. In areas with unreliable power, a surge protector can prevent damage from voltage spikes.

Filters require regular cleaning – the frequency depends on your pool's debris load and usage. Sand filters need backwashing when pressure rises 8-10 PSI above clean levels. Cartridge filters should be cleaned monthly and replaced every 1-3 years. DE filters need the diatomaceous earth replenished after each backwash.

Salt cells accumulate calcium deposits in Bali's hard water. Regular inspection and cleaning (typically every 3-4 months) extends cell life significantly. We use acid washing to remove scale buildup without damaging the cell plates.

For pools with heaters, annual professional inspection is recommended. Gas heaters need ventilation checks and burner cleaning. Heat pumps benefit from coil cleaning and refrigerant level verification.

Automation systems and controls should be protected from humidity and insects. Regular firmware updates and battery replacements keep these systems functioning properly.

Investing in quality maintenance pays dividends. Equipment failures are disruptive, repairs are expensive, and emergency service fees add up quickly. A proactive maintenance approach costs less in the long run and ensures your pool is always ready for use.`,
    image: waterTexture,
    author: "I Made Putra",
    date: "November 5, 2024",
    readTime: "5 min read",
    category: "Equipment"
  }
];

export default function Blog() {
  return (
    <>
      <Helmet 
        title="Pool Service Blog | Pool Maintenance Tips & Advice for Bali | Bali Pool Pros"
        description="Expert advice on pool maintenance, cleaning, and care for Bali properties. Tips for tropical pool care, equipment maintenance, and solving common pool problems in Bali's climate."
        keywords="pool maintenance tips Bali, pool care blog, swimming pool advice, tropical pool maintenance, Bali pool tips, aquapure bali, bali pool service"
        canonical="/blog"
      />
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[50vh] flex items-center overflow-hidden" aria-labelledby="blog-hero-heading">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Pool maintenance tips and advice from Bali pool experts" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
              <div className="max-w-3xl">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Our Blog</span>
                <h1 id="blog-hero-heading" className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Pool Care Tips & <span className="text-primary">Expert Advice</span>
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed">
                  Stay informed with the latest pool maintenance tips, industry insights, and expert advice tailored for Bali's tropical environment. 
                  From seasonal care guides to equipment recommendations, our blog helps you keep your pool in perfect condition.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Latest Article</span>
                <h2 className="text-3xl font-heading font-bold text-slate-900">Featured Post</h2>
              </div>

              <div className="bg-slate-50 rounded-3xl overflow-hidden max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-0">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title + " - pool service blog article"}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {blogPosts[0].category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        {blogPosts[0].date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <User className="w-4 h-4" aria-hidden="true" />
                        <span>{blogPosts[0].author}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                      >
                        Read More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">All Articles</span>
                <h2 className="text-3xl font-heading font-bold text-slate-900">Pool Care Knowledge Base</h2>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                  Explore our collection of articles covering pool maintenance, water chemistry, equipment care, and more for Bali pool owners.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <img 
                      src={post.image}
                      alt={post.title + " - pool maintenance article for Bali"}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-heading font-bold text-slate-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <User className="w-3 h-3" aria-hidden="true" />
                          <span>{post.author}</span>
                        </div>
                        <span className="text-xs text-slate-400">{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-slate-500 mb-4">More articles coming soon!</p>
                <Link href="/contact">
                  <a className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                    Subscribe to Our Newsletter <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </Link>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Browse by Topic</span>
                <h2 className="text-3xl font-heading font-bold text-slate-900">Article Categories</h2>
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {["Pool Maintenance", "Water Chemistry", "Pool Problems", "Equipment", "Pool Installation", "Seasonal Care", "DIY Tips", "Eco-Friendly"].map((category) => (
                  <a 
                    key={category}
                    href="#"
                    className="flex items-center gap-2 bg-slate-100 hover:bg-primary hover:text-white px-5 py-3 rounded-full font-medium transition-colors"
                  >
                    <Tag className="w-4 h-4" aria-hidden="true" />
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-primary">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Need Professional Pool Service in Bali?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                While our blog provides helpful tips, nothing beats professional care. Let Bali Pool Pros handle your pool maintenance so you can enjoy worry-free swimming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    Get Free Quote
                  </a>
                </Link>
                <Link href="/services">
                  <a className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                    View Our Services
                  </a>
                </Link>
              </div>
            </div>
          </section>

          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
}
