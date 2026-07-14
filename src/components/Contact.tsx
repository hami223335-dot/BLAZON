import { motion } from "motion/react";
import { MapPin, Phone, Clock, MessageSquare, Compass, Send, Instagram, Facebook, Video, Share2 } from "lucide-react";

export default function Contact() {
  const socialPlatforms = [
    { name: "Instagram", icon: Instagram, link: "#", color: "hover:text-pink-500 hover:shadow-pink-500/25" },
    { name: "Facebook", icon: Facebook, link: "#", color: "hover:text-blue-500 hover:shadow-blue-500/25" },
    { name: "TikTok", icon: Share2, link: "#", color: "hover:text-cyan-400 hover:shadow-cyan-400/25" },
    { name: "WhatsApp", icon: MessageSquare, link: "https://wa.me/923216331122", color: "hover:text-emerald-400 hover:shadow-emerald-400/25" },
    { name: "YouTube", icon: Video, link: "#", color: "hover:text-red-500 hover:shadow-red-500/25" }
  ];

  const handleDirections = () => {
    // Exact location mapping for F-11 Markaz Islamabad
    window.open("https://maps.google.com/?q=Bizzon+Plaza+F-11+Markaz+Islamabad+Pakistan", "_blank");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block mb-3">
            Location & Access
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white mb-4">
            Visit The <span className="font-serif italic text-gold">Salon</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-8">
              <div>
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold block mb-1">
                  Brand Headquarter
                </span>
                <h3 className="text-2xl font-sans font-light text-white tracking-wide uppercase">
                  Blazon Salon
                </h3>
              </div>

              {/* Detail Blocks */}
              <div className="space-y-6 font-sans text-sm font-light text-zinc-300">
                {/* Map pin */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-[#141414] border border-white/5 flex items-center justify-center text-gold flex-shrink-0 mt-1">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-1">
                      Our Location
                    </span>
                    <p className="leading-relaxed">
                      1st Floor, Bizzon Plaza, F-11 Markaz,<br />
                      Islamabad, Pakistan 44000
                    </p>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-[#141414] border border-white/5 flex items-center justify-center text-gold flex-shrink-0 mt-1">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-1">
                      Phone Line
                    </span>
                    <a href="tel:03216331122" className="text-base font-semibold hover:text-gold transition-colors font-mono block">
                      0321-6331122
                    </a>
                  </div>
                </div>

                {/* Operating timings */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-[#141414] border border-white/5 flex items-center justify-center text-gold flex-shrink-0 mt-1">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-1">
                      Opening Hours
                    </span>
                    <p className="leading-relaxed font-mono">
                      10:00 AM - 12:00 AM (Midnight)<br />
                      <span className="text-gold/80 text-[11px] block mt-1 uppercase">7 Days A Week</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:03216331122"
                className="flex-1 justify-center bg-[#141414] hover:bg-gold border border-white/5 hover:text-black group text-white font-sans text-xs font-semibold tracking-widest py-4 px-6 text-center rounded-sm uppercase flex items-center gap-2.5 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-gold group-hover:text-black transition-colors" />
                <span>Call Hotline</span>
              </a>
              <button
                onClick={() => {
                  const text = encodeURIComponent("Hello Blazon Salon, I'd like to book a luxury session.");
                  window.open(`https://wa.me/923216331122?text=${text}`, "_blank");
                }}
                className="flex-1 justify-center bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-500/35 text-emerald-300 font-sans text-xs font-semibold tracking-widest py-4 px-6 rounded-sm uppercase flex items-center gap-2.5 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Lounge</span>
              </button>
            </div>

            {/* Neon Gold Animated Social Platforms */}
            <div className="space-y-4">
              <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                Join our Inner Circle
              </span>
              <div className="flex items-center gap-4">
                {socialPlatforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <motion.a
                      key={platform.name}
                      href={platform.link}
                      whileHover={{ scale: 1.15, y: -4 }}
                      className={`w-11 h-11 rounded-sm bg-[#141414]/80 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-gold transition-all shadow-md ${platform.color} duration-300 hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]`}
                      aria-label={`Follow Blazon Salon on ${platform.name}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Map Panel */}
          <div className="lg:col-span-7 relative h-[420px] lg:h-auto rounded-sm overflow-hidden border border-white/5 bg-black flex flex-col justify-between">
            {/* Elegant Map Header overlay */}
            <div className="absolute top-4 left-4 right-4 z-20 p-4 rounded-sm bg-[#0A0A0A]/80 backdrop-blur-md border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-black">
                  <Compass className="w-4.5 h-4.5 animate-spin-slow" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-white tracking-wide">F-11 Markaz Location Map</span>
                  <span className="block text-[9px] font-mono text-zinc-500 uppercase">33.6844° N, 72.9889° E</span>
                </div>
              </div>
              <button
                onClick={handleDirections}
                className="px-3 py-1.5 bg-gold hover:bg-gold-hover text-black rounded-sm text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-3 h-3" /> Go
              </button>
            </div>

            {/* Custom Luxury Aesthetic Vector Map Layout */}
            <div className="relative w-full h-full bg-[#0A0A0A] flex-grow overflow-hidden flex items-center justify-center select-none">
              
              {/* Grid map lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:30px_30px] opacity-80" />

              {/* Diagonal Sector Roads */}
              <div className="absolute w-[200%] h-4 bg-[#141414]/40 rotate-[12deg] -translate-x-10" />
              <div className="absolute w-[200%] h-6 bg-[#141414]/40 -rotate-[35deg] translate-y-20" />
              <div className="absolute w-5 h-[200%] bg-[#141414]/40 left-1/4 -translate-y-10" />
              <div className="absolute w-5 h-[200%] bg-[#141414]/40 right-1/4 -translate-y-10" />

              {/* Neighboring landmark bubbles */}
              <div className="absolute top-1/4 left-[15%] p-2 rounded-sm border border-white/5 bg-black/60 text-[9px] text-zinc-500 uppercase tracking-widest font-mono">
                Margalla Road Sector
              </div>
              <div className="absolute bottom-1/4 left-[20%] p-2 rounded-sm border border-white/5 bg-black/60 text-[9px] text-zinc-500 uppercase tracking-widest font-mono">
                F-11 Park Area
              </div>
              <div className="absolute top-1/3 right-[15%] p-2 rounded-sm border border-white/5 bg-black/60 text-[9px] text-zinc-500 uppercase tracking-widest font-mono">
                Markaz Square plaza
              </div>

              {/* F-11 Circular Markaz Outline */}
              <div className="absolute w-60 h-60 rounded-full border-2 border-gold/10 flex items-center justify-center bg-gold/1">
                <div className="absolute w-44 h-44 rounded-full border border-gold/20" />
                <span className="font-mono text-[9px] tracking-[0.3em] text-gold/40 uppercase font-semibold">
                  F-11 MARKAZ
                </span>
              </div>

              {/* Pulsing Salon Pin Marker */}
              <div className="absolute z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-12 bg-gold/20 rounded-full animate-ping pointer-events-none" />
                  <div className="absolute w-6 h-6 bg-gold/40 rounded-full animate-pulse pointer-events-none" />
                  <div className="w-4.5 h-4.5 rounded-full bg-gold border-2 border-black shadow-lg shadow-gold/50 flex items-center justify-center" />
                </div>
                {/* Visual Label Bubble */}
                <div className="mt-2.5 px-3 py-1.5 bg-black border border-gold rounded-sm shadow-xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-sans text-[10px] font-bold text-white uppercase tracking-wider">
                    BIZZON PLAZA (1st Floor)
                  </span>
                </div>
              </div>

              {/* Compass overlay at bottom right */}
              <div className="absolute bottom-4 right-4 p-2 rounded-sm bg-black/80 border border-white/5 text-[10px] text-zinc-500 font-mono uppercase tracking-widest flex items-center gap-1">
                <span>N 🔼</span>
              </div>
            </div>

            {/* Navigation action block */}
            <div className="p-4 bg-[#141414]/60 border-t border-white/5 text-center">
              <button
                onClick={handleDirections}
                className="w-full text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors py-1 flex items-center justify-center gap-2"
              >
                <span>Navigate using Google Maps App</span>
                <span>⟶</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
