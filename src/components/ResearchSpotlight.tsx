import React, { useState } from "react";
import { 
  RD_STEPS_DATA, 
  RDEvaluationStep 
} from "../data";
import { 
  Dna, 
  FlaskConical, 
  ShieldCheck, 
  Award, 
  Cpu, 
  Microscope, 
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ResearchSpotlight() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const activeData = RD_STEPS_DATA.find((s) => s.step === activeStep) || RD_STEPS_DATA[0];

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <FlaskConical className="h-5 w-5" />;
      case 2: return <Dna className="h-5 w-5" />;
      case 3: return <Microscope className="h-5 w-5" />;
      case 4: return <ShieldCheck className="h-5 w-5" />;
      default: return <Award className="h-5 w-5" />;
    }
  };

  return (
    <section id="research-spotlight" className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-3.5 py-1.5 rounded-full border border-brand-green/20 mb-4">
              <Cpu className="h-4 w-4" />
              <span className="text-xs font-bold tracking-wider uppercase font-mono">15%+ Annual Reinvestment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark-green font-medium tracking-tight">
              Science & Research: Our Breeding Journey
            </h2>
            <p className="text-slate-600 font-light mt-3 max-w-2xl text-base leading-relaxed">
              We never guess; we select. From our seed vaults representing centuries of resilient heirloom profiles to high-tech genomic diagnostic microarrays, explore our certified non-GMO pathways.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <div className="bg-brand-green bg-gradient-to-br from-brand-green to-brand-dark-green text-white p-5 rounded-2xl inline-block max-w-[280px] shadow-lg text-left">
              <span className="text-3xl font-mono font-bold text-brand-lime">40+</span>
              <p className="text-xs font-semibold mt-1">Global Breeding Stations protecting regional crops in real time.</p>
            </div>
          </div>
        </div>

        {/* Dynamic Horizontal Timeline Selector */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0 hidden md:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {RD_STEPS_DATA.map((s) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-4 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left transition-all border cursor-pointer ${
                  activeStep === s.step
                    ? "bg-brand-green text-white border-brand-green shadow-xl shadow-brand-green/10"
                    : "bg-white text-slate-600 border-slate-100 hover:border-slate-300"
                }`}
              >
                <div className={`p-2.5 rounded-xl mb-3 flex items-center justify-center ${
                  activeStep === s.step
                    ? "bg-brand-lime text-brand-dark-green"
                    : "bg-slate-50 text-brand-green"
                }`}>
                  {getStepIcon(s.step)}
                </div>
                <span className={`text-[10px] font-mono font-extrabold uppercase ${
                  activeStep === s.step ? "text-brand-lime" : "text-brand-green"
                }`}>
                  Phase 0{s.step}
                </span>
                <span className="text-xs font-bold leading-tight mt-1 line-clamp-1 block">
                  {s.title.split("&")[0].split(":")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Viewer Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden min-h-[460px] flex flex-col lg:flex-row"
          >
            {/* Left side: Photo with science focus tag */}
            <div className="lg:w-1/2 relative min-h-[260px] lg:min-h-auto">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${activeData.imageUrl})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-green/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-brand-dark-green/75 backdrop-blur-md border border-white/10">
                <div className="flex items-center space-x-2 text-brand-lime">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase">Laboratory Science Rigor</span>
                </div>
                <p className="text-xs font-semibold leading-relaxed mt-1.5 text-slate-100 italic">
                  "{activeData.scienceFocus}"
                </p>
              </div>
            </div>

            {/* Right side: Extensive textual details */}
            <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-brand-green tracking-widest uppercase border-b-2 border-brand-lime pb-1 block w-max">
                  Scientific Breeding Phase 0{activeData.step}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-dark-green tracking-tight mt-5">
                  {activeData.title}
                </h3>
                <p className="text-sm text-slate-400 font-semibold italic mt-1.5">
                  {activeData.subtitle}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed font-light mt-4">
                  {activeData.description}
                </p>

                <p className="text-slate-700 text-sm leading-relaxed font-light bg-slate-50 border border-slate-100 p-4 rounded-xl mt-6">
                  {activeData.longDescription}
                </p>
              </div>

              {/* Navigation help */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-light">
                  Compare with our growers’ database.
                </span>
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev % 4) + 1);
                  }}
                  className="flex items-center space-x-1 text-xs font-bold text-brand-green hover:text-brand-dark-green group transition-colors cursor-pointer"
                >
                  <span>Next Science Phase</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
