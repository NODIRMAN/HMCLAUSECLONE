import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sprout, ShieldCheck, Microscope, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  id: number;
  pretitle: string;
  title: string;
  italicWord: string;
  titleEnd: string;
  description: string;
  bgUrl: string;
  icon: React.ReactNode;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      id: 0,
      pretitle: "SOWING THE SEEDS OF TOMORROW",
      title: "Innovation in Response to a ",
      italicWord: "Changing Market",
      titleEnd: "",
      description: "As global vegetable seed experts, we work hand-in-hand with professional growers to preserve and elevate harvest yields under challenging climate environments.",
      bgUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1600",
      icon: <Sprout className="h-4 w-4 text-brand-lime" />,
      primaryCtaText: "Explore Seed Catalogue",
      primaryCtaLink: "#crops-catalog",
      secondaryCtaText: "R&D Path",
      secondaryCtaLink: "#research-spotlight"
    },
    {
      id: 1,
      pretitle: "SCIENCE & RESILIENCE INSPIRED",
      title: "Pioneering Seed Pathology & ",
      italicWord: "Genomic Selection",
      titleEnd: "",
      description: "Investing more than 15% of our annual turnover into R&D to unlock structural viral resistance and uniform crop viability using classical seed breeding.",
      bgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
      icon: <Microscope className="h-4 w-4 text-brand-lime" />,
      primaryCtaText: "Discover Our Science",
      primaryCtaLink: "#research-spotlight",
      secondaryCtaText: "Meet Our Team",
      secondaryCtaLink: "#grower-contact"
    },
    {
      id: 2,
      pretitle: "A UNION OF HERITAGE & VISION",
      title: "Growing Your Trust for ",
      italicWord: "Generations",
      titleEnd: " of Farming",
      description: "Formed by pairing historic French Clause culinary breeding with North American Harris Moran heavy field volume, we deliver elite hybrids prized internationally.",
      bgUrl: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=1600",
      icon: <ShieldCheck className="h-4 w-4 text-brand-lime" />,
      primaryCtaText: "Our Brands",
      primaryCtaLink: "#about-heritage",
      secondaryCtaText: "Regional Contacts",
      secondaryCtaLink: "#global-presence"
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="home-hero" className="relative h-[90vh] sm:h-[95vh] min-h-[580px] w-full overflow-hidden bg-brand-soil">
      
      {/* Slides with AnimatePresence */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => {
            if (index !== currentIndex) return null;
            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image with botanical overlay gradient */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-[1.01]"
                  style={{ backgroundImage: `url(${slide.bgUrl})` }}
                />
                
                {/* Gradient overlays to guarantee elegant high-contrast text rendering */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-soil via-brand-soil/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-soil via-transparent to-brand-dark-green/30" />

                {/* Grid container with beautiful text columns */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                      
                      {/* Pretitle Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="inline-flex items-center space-x-2 bg-brand-dark-green/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 mb-6 shadow-md"
                      >
                        {slide.icon}
                        <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-lime font-mono">
                          {slide.pretitle}
                        </span>
                      </motion.div>

                      {/* Main Title of the Slide */}
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.12]"
                      >
                        {slide.title}
                        <span className="font-serif italic text-brand-lime block sm:inline font-normal">
                          {slide.italicWord}
                        </span>
                        {slide.titleEnd}
                      </motion.h1>

                      {/* Paragraph */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="text-base sm:text-lg text-slate-100 mb-8 max-w-xl leading-relaxed font-light"
                      >
                        {slide.description}
                      </motion.p>

                      {/* CTAs */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4"
                      >
                        <a
                          href={slide.primaryCtaLink}
                          className="bg-brand-lime hover:bg-brand-lime/90 text-brand-dark-green font-bold text-sm px-6 py-3.5 rounded-xl text-center shadow-lg hover:shadow-brand-lime/20 transition-all flex items-center justify-center space-x-2"
                        >
                          <span>{slide.primaryCtaText}</span>
                          <span className="text-md">→</span>
                        </a>
                        <a
                          href={slide.secondaryCtaLink}
                          className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl text-center backdrop-blur-md border border-white/10 transition-all"
                        >
                          {slide.secondaryCtaText}
                        </a>
                      </motion.div>

                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Manual Arrow Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-soil/40 border border-white/10 text-white/80 hover:text-white hover:bg-brand-soil/80 transition-all z-20 group hidden sm:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-soil/40 border border-white/10 text-white/80 hover:text-white hover:bg-brand-soil/80 transition-all z-20 group hidden sm:flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Bottom Floating Info & Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          
          {/* Slogan */}
          <div className="flex items-center space-x-2">
            <span className="h-1 text-brand-lime w-6 bg-brand-lime rounded-full"></span>
            <p className="text-[11px] font-bold text-slate-300 font-mono tracking-widest uppercase">
              GROWING YOUR TRUST • PROFESSIONAL VEGETABLE SEEDS
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-brand-lime" 
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
