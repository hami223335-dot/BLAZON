import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, X, Compass, ExternalLink } from "lucide-react";

export default function DemoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingTarget, setPendingTarget] = useState<HTMLElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Check if touch device or small screen for 3D tilt fallback
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Global Interceptor logic
  useEffect(() => {
    let bypass = false;

    const handleGlobalClick = (e: MouseEvent) => {
      if (bypass) return;

      const target = (e.target as HTMLElement).closest("a, button, [role='button']");
      if (!target) return;

      const htmlTarget = target as HTMLElement;

      // Allow bypass attribute to pass through interceptor
      if (htmlTarget.getAttribute("data-bypass-intercept") === "true") {
        return;
      }

      // 1. Check if social media link
      const href = htmlTarget.getAttribute("href") || "";
      const isSocial = 
        href.includes("instagram.com") ||
        href.includes("facebook.com") ||
        href.includes("tiktok.com") ||
        href.includes("youtube.com") ||
        href.includes("twitter.com") ||
        href.includes("wa.me") ||
        href.includes("whatsapp.com") ||
        href.includes("mailto:");

      // 2. Check if booking/appointment-related button
      const text = (htmlTarget.textContent || "").toLowerCase();
      const isBooking = 
        text.includes("book") ||
        text.includes("reserve") ||
        text.includes("appointment") ||
        text.includes("schedule") ||
        text.includes("whatsapp") ||
        text.includes("social") ||
        text.includes("instagram") ||
        text.includes("facebook") ||
        htmlTarget.getAttribute("type") === "submit" && !!htmlTarget.closest("#booking");

      if (isSocial || isBooking) {
        // Intercept action
        e.preventDefault();
        e.stopPropagation();
        setPendingTarget(htmlTarget);
        setIsOpen(true);
      }
    };

    // Use capture phase to intercept BEFORE standard React/HTML event handlers can execute
    document.addEventListener("click", handleGlobalClick, true);

    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setPendingTarget(null);
  };

  const handleContinue = () => {
    if (pendingTarget) {
      setIsOpen(false);
      const target = pendingTarget;
      setPendingTarget(null);

      // Perform the original action
      setTimeout(() => {
        const href = target.getAttribute("href");
        if (href) {
          window.open(href, target.getAttribute("target") || "_blank", "noopener,noreferrer");
        } else {
          // It's a button click - trigger the original click handler by temporarily simulating it
          // We can dispatch a custom click event that will bypass our interceptor
          const clickEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          });
          
          // To ensure our interceptor doesn't catch this programmatically triggered click,
          // we can tag the event or use a temporary global flag
          const originalAttribute = target.getAttribute("data-bypass-intercept");
          target.setAttribute("data-bypass-intercept", "true");
          
          // Let's also do a standard click bypassing mechanism
          const handler = (e: MouseEvent) => {
            e.stopPropagation();
          };
          
          target.dispatchEvent(clickEvent);
          target.removeAttribute("data-bypass-intercept");
        }
      }, 350); // wait for exit animation
    }
  };

  // Mouse Tilt Logic for Premium 3D depth
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const px = (x / box.width) * 100;
    const py = (y / box.height) * 100;
    const tiltX = (py - 50) / 4; 
    const tiltY = -(px - 50) / 4; 
    
    setTilt({ x: tiltX, y: tiltY });
    setShine({ x: px, y: py });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setShine({ x: 50, y: 50 });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md select-none"
        >
          {/* Ambient global screen glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

          {/* 3D Glass Card Container */}
          <div 
            className="w-full max-w-lg h-auto flex items-center justify-center [perspective:1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              ref={cardRef}
              initial={{ scale: 0.9, y: 20, rotateX: 10 }}
              animate={
                isMobile
                  ? {
                      scale: 1,
                      y: 0,
                      rotateX: [0, 2, -2, 0],
                      rotateY: [0, -3, 3, 0],
                      transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  : {
                      scale: 1,
                      y: 0,
                      rotateX: tilt.x,
                      rotateY: tilt.y,
                      transition: { type: "spring", stiffness: 150, damping: 20 }
                    }
              }
              exit={{ scale: 0.9, y: 20, opacity: 0, transition: { duration: 0.3 } }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-full rounded-[24px] bg-[#0E0E0E]/90 border border-zinc-800 p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.85)] relative overflow-hidden"
            >
              {/* Card top golden border highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

              {/* Dynamic light reflection */}
              <div 
                className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 280px at ${shine.x}% ${shine.y}%, rgba(212,175,55,0.06), transparent)`
                }}
              />

              {/* Header Close button */}
              <button 
                onClick={handleClose}
                className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800/80 p-2 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>

              {/* FLOATING 3D ICON */}
              <div 
                style={{ transform: "translateZ(45px)" }}
                className="relative flex items-center justify-center mb-8"
              >
                {/* Rotating accent rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute w-24 h-24 rounded-full border border-dashed border-gold/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute w-20 h-20 rounded-full border border-double border-gold/10"
                />

                {/* Ambient glow behind icon */}
                <div className="absolute w-16 h-16 rounded-full bg-gold/10 blur-xl animate-pulse" />

                {/* Main 3D Icon Shell */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-zinc-950 border border-gold/30 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                  <AlertTriangle className="w-8 h-8 text-gold animate-bounce" />
                </div>
              </div>

              {/* TITLE */}
              <div 
                style={{ transform: "translateZ(30px)" }}
                className="text-center mb-6"
              >
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-[0.1em] text-white">
                  🚀 Demo Website
                </h3>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
              </div>

              {/* MESSAGE */}
              <div 
                style={{ transform: "translateZ(20px)" }}
                className="text-center mb-8 px-2"
              >
                <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed">
                  This is a demo website. All social media links and the booking system are for demonstration purposes only and may not be active.
                </p>
              </div>

              {/* ACTIONS */}
              <div 
                style={{ transform: "translateZ(35px)" }}
                className="flex flex-col sm:flex-row gap-4 relative z-20"
              >
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="flex-1 py-3.5 px-6 rounded-xl font-sans text-xs font-bold tracking-widest uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all duration-200 active:scale-95 shadow-lg"
                >
                  Close
                </button>

                {/* Continue Button */}
                <button
                  onClick={handleContinue}
                  className="flex-1 py-3.5 px-6 rounded-xl font-sans text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-gold via-yellow-500 to-amber-600 hover:brightness-110 text-black shadow-[0_4px_12px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_20px_rgba(212,175,55,0.35)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <span>Continue Anyway</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </button>
              </div>

            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
