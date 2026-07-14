import { motion } from "motion/react";
import { Check, Flame, Star, Sparkles, Scissors, Clock } from "lucide-react";
import { PACKAGES_DATA } from "../data/packages";

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  return (
    <section id="packages" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Abstract Background Overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block mb-3">
            Elite Reservations
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white mb-4">
            Special Luxury <span className="font-serif italic text-gold">Packages</span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-4" />
          <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed font-light">
            Indulge in holistic wedding and pre-wedding regimens curated by our head creative directors to guarantee absolute head-turning perfection.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PACKAGES_DATA.map((pkg, index) => {
            const isFeatured = index === 0; // Highlight the signature package

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-sm bg-zinc-900/40 border transition-all duration-500 overflow-hidden ${
                  isFeatured
                    ? "border-gold/80 shadow-2xl shadow-gold/5 bg-gradient-to-b from-[#141414]/95 to-[#0A0A0A]"
                    : "border-white/5 hover:border-gold/30 bg-[#141414]/40"
                } group`}
              >
                {/* Background decorative glows */}
                {isFeatured && (
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/20 transition-all duration-500" />
                )}

                {/* Badge Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className={`px-3 py-1 rounded-full font-mono text-[9px] tracking-widest uppercase border ${
                      isFeatured
                        ? "text-gold bg-gold/10 border-gold/40"
                        : "text-zinc-400 bg-zinc-900 border-zinc-800"
                    }`}>
                      {pkg.badge || "Standard Experience"}
                    </span>
                    {isFeatured && (
                      <span className="flex items-center gap-1 text-[10px] text-gold font-medium">
                        <Flame className="w-3.5 h-3.5 text-gold animate-pulse" /> Popular
                      </span>
                    )}
                  </div>

                  {/* Name and description */}
                  <h3 className="font-sans text-xl sm:text-2xl font-light text-white tracking-wide mb-3">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans tracking-wide leading-relaxed font-light mb-8">
                    {pkg.description}
                  </p>

                  {/* Pricing Details */}
                  <div className="border-y border-white/5 py-6 mb-8 flex items-baseline gap-4">
                    <div>
                      <span className="block text-[9px] font-mono tracking-widest uppercase text-zinc-500 mb-1">
                        Offer Price
                      </span>
                      <span className="text-3xl sm:text-4xl font-sans font-semibold text-white tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    {pkg.oldPrice && (
                      <div className="text-zinc-500">
                        <span className="block text-[9px] font-mono tracking-widest uppercase mb-1">
                          Regular
                        </span>
                        <span className="text-base sm:text-lg font-sans line-through decoration-gold/80 font-medium decoration-2">
                          {pkg.oldPrice}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Checklist lists */}
                  <div className="space-y-6">
                    {/* Pre-wedding list */}
                    <div>
                      <h4 className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-gold/80 mb-3.5">
                        <Sparkles className="w-3.5 h-3.5 text-gold" />
                        <span>Pre-Wedding Rituals</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {pkg.preWedding.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-xs text-zinc-300 font-light leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Event day list */}
                    {pkg.eventDay && pkg.eventDay.length > 0 && (
                      <div className="border-t border-white/5 pt-5">
                        <h4 className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-gold/80 mb-3.5">
                          <Clock className="w-3.5 h-3.5 text-gold" />
                          <span>Mehndi / Barat / Walima Setup</span>
                        </h4>
                        <ul className="space-y-2.5">
                          {pkg.eventDay.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-xs text-zinc-300 font-light leading-relaxed">
                              <Check className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Book Action Button */}
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full mt-10 font-sans text-xs font-bold tracking-widest uppercase py-4 rounded-sm transition-all duration-300 ${
                    isFeatured
                      ? "bg-gold hover:bg-gold-hover text-black shadow-xl shadow-gold/10"
                      : "bg-[#141414] hover:bg-gold hover:text-black hover:border-gold text-zinc-300 border border-white/5"
                  }`}
                >
                  Reserve {pkg.name.split(" ")[0]} Package
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
