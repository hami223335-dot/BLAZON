import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesGrid from "./components/ServicesGrid";
import AdvancedServicesCatalog from "./components/AdvancedServicesCatalog";
import Packages from "./components/Packages";
import FacialBenefits from "./components/FacialBenefits";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeView, setActiveView] = useState<"home" | "services">("home");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    scrollToSection("booking");
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans antialiased selection:bg-yellow-500 selection:text-black">
      {/* Dynamic Header */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        scrollToSection={scrollToSection}
      />

      {/* Main Viewport Content with transition animations */}
      <AnimatePresence mode="wait">
        {activeView === "home" ? (
          <motion.div
            key="home-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Cinematic landing scene */}
            <Hero scrollToSection={scrollToSection} />

            {/* Legacy Story narrative */}
            <About />

            {/* Featured categories preview catalog */}
            <ServicesGrid
              onExploreAdvanced={() => {
                setActiveView("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              scrollToSection={scrollToSection}
            />

            {/* Premium plus & pre-wedding packages */}
            <Packages onSelectPackage={handleSelectPackage} />

            {/* Scientific skin comparing table */}
            <FacialBenefits />

            {/* Masonry responsive transformations portfolio */}
            <Gallery />

            {/* Auto-playing client ratings slider */}
            <Testimonials />

            {/* Custom validated appointment scheduler */}
            <BookingForm
              selectedPackageFromParent={selectedPackage}
              onClearSelectedPackage={() => setSelectedPackage("")}
            />

            {/* 14 checklist services indicators */}
            <Features />

            {/* Vector mapping location & social platform bounds */}
            <Contact />
          </motion.div>
        ) : (
          <motion.div
            key="services-catalog-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
          >
            {/* Full luxurious 25+ services list */}
            <AdvancedServicesCatalog
              onBackToHome={() => setActiveView("home")}
              scrollToSection={scrollToSection}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fine-typography signature footer */}
      <Footer
        setActiveView={setActiveView}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}
