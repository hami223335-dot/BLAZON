import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scissors, Sparkles, Crown, Heart, Check, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA, SERVICE_CATEGORIES } from "../data/services";
import { ServiceItem } from "../types";

interface ServicesGridProps {
  onExploreAdvanced: () => void;
  scrollToSection: (id: string) => void;
}

export default function ServicesGrid({ onExploreAdvanced, scrollToSection }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("hair");

  // Show a curated subset for the homepage preview
  const filteredServices = SERVICES_DATA.filter(
    (s) => s.category === activeCategory
  ).slice(0, 4); // Show top 4 for aesthetic balance

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors":
        return <Scissors className="w-4.5 h-4.5" />;
      case "Crown":
        return <Crown className="w-4.5 h-4.5" />;
      case "Heart":
        return <Heart className="w-4.5 h-4.5" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-4.5 h-4.5" />;
    }
  };

  return (
    <section id="services-preview" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block mb-3">
            Elite Collections
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white mb-4">
            Our Signature <span className="font-serif italic text-gold">Services</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed font-light">
            Indulge in our carefully selected elite offerings. Filter by department to find the perfect grooming solution.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {SERVICE_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative flex items-center gap-2.5 px-5 py-3 rounded-sm font-sans text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-500 border ${
                  isActive
                    ? "text-black border-gold bg-gold font-medium"
                    : "text-zinc-400 border-white/5 bg-zinc-900/20 hover:text-white hover:border-gold/30"
                }`}
              >
                <span>{category.emoji}</span>
                <span>{category.name}</span>
                {getCategoryIcon(category.icon)}
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service: ServiceItem, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-sm bg-gradient-to-br from-[#141414]/90 to-[#0A0A0A]/90 border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-xl overflow-hidden"
              >
                {/* Image Frame with Zoom */}
                <div className="relative w-full sm:w-44 h-44 rounded-sm overflow-hidden border border-white/5 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content details */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-sans text-lg font-medium text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                        {service.name}
                      </h3>
                      <span className="font-mono text-sm font-semibold text-gold">
                        {service.price}
                      </span>
                    </div>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
                      {service.description}
                    </p>

                    {service.benefits && (
                      <ul className="space-y-1.5 mb-5">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-300 font-light">
                            <Check className="w-3 h-3 text-gold flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => scrollToSection("booking")}
                    className="self-start text-[10px] tracking-[0.2em] uppercase font-semibold text-gold group-hover:text-white flex items-center gap-1 transition-colors duration-300"
                  >
                    Book Seat <span>⟶</span>
                  </button>
                </div>

                {/* Bottom luxury thin glow line */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-full transition-all duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Banner to Catalog Page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-sm p-8 sm:p-12 overflow-hidden border border-gold/20 bg-gradient-to-br from-[#141414] via-[#0F0F0F]/30 to-[#141414] text-center max-w-4xl mx-auto shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-sans font-light text-white tracking-wide mb-3">
            Looking for our exhaustive service collection?
          </h3>
          <p className="text-xs text-zinc-400 font-sans tracking-wider mb-8 max-w-xl mx-auto leading-relaxed">
            From specialized wedding manicure regimes to premium keratin lockouts, explore our complete list of 25+ luxury procedures.
          </p>

          <button
            onClick={onExploreAdvanced}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-gold/60 hover:border-gold text-gold hover:text-black hover:bg-gold font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm"
          >
            <span>Explore Advanced Services Lounge</span>
            <ArrowUpRight className="w-4.5 h-4.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
