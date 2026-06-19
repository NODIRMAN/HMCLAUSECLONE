import React, { useState } from "react";
import { 
  CROPS_DATA, 
  CropInfo 
} from "../data";
import { 
  Circle, 
  Cherry as TomatoIcon, 
  ChevronRight, 
  Calculator, 
  Compass, 
  Check, 
  X, 
  HelpCircle,
  Apple,
  Shrub,
  Sparkles,
  Leaf,
  Percent,
  Wheat
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CropCatalog() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCrop, setSelectedCrop] = useState<CropInfo | null>(null);

  // Calculator states
  const [areaSize, setAreaSize] = useState<number>(5);
  const [areaUnit, setAreaUnit] = useState<"acres" | "hectares">("acres");
  const [targetDensity, setTargetDensity] = useState<number>(12000); // plants per acre/hectare
  const [germinationCheckMode, setGerminationCheckMode] = useState<number>(95); // 95% standard germination rate

  const tabs = [
    { id: "all", label: "All Crops" },
    { id: "solanaceous", label: "Solanaceous (Tomato, Pepper)" },
    { id: "cucurbit", label: "Cucurbits (Melon, Squash, Watermelon)" },
    { id: "root-leaf", label: "Root & Leaf (Carrot, Cauliflower)" },
    { id: "field-sweet", label: "Field Crops (Sweet Corn, Beans)" }
  ];

  const filteredCrops = activeTab === "all" 
    ? CROPS_DATA 
    : CROPS_DATA.filter(crop => crop.category === activeTab);

  const getCropIcon = (iconName: string) => {
    switch (iconName) {
      case "Tomato": return <TomatoIcon className="h-5 w-5" />;
      case "Apple": return <Apple className="h-5 w-5" />;
      case "Shrub": return <Shrub className="h-5 w-5" />;
      case "Sparkles": return <Sparkles className="h-5 w-5" />;
      case "Leaf": return <Leaf className="h-5 w-5" />;
      case "Percent": return <Percent className="h-5 w-5" />;
      case "Wheat": return <Wheat className="h-5 w-5" />;
      default: return <Circle className="h-5 w-5" />;
    }
  };

  // Seed packet calculation logic
  const totalPlantsNeeded = areaSize * targetDensity;
  // Account for germination rates and some field safety overhead (e.g. 5% thinning loss)
  const marginFactor = 1.05; 
  const totalSeedsNeeded = Math.ceil((totalPlantsNeeded / (germinationCheckMode / 100)) * marginFactor);
  
  const packetOptions = [
    { size: 1000, name: "Premium Commercial S-1" },
    { size: 5000, name: "Grower Volume Hub G-5" },
    { size: 25000, name: "Estate Master Cooper E-25" }
  ];

  return (
    <section id="crops-catalog" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-3.5 py-1.5 rounded-full border border-brand-green/20 mb-4">
            <Compass className="h-4 w-4" />
            <span className="text-xs font-bold tracking-wider uppercase font-mono">100% Dedicated Vegetable Species</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark-green font-medium mb-4 tracking-tight">
            Our Crops & Elite Hybrids
          </h2>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            Every seed we breed is designed under real grower conditions, resulting in stable disease protection packets, higher pack-out weights, and outstanding flavor profile traits.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-slate-100 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs sm:text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/10"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCrops.map((crop) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={crop.id}
                onClick={() => setSelectedCrop(crop)}
                className="group relative bg-white border border-slate-100 rounded-3xl p-5 hover:border-brand-lime hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${crop.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Badge on Image */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-brand-dark-green text-[9px] font-bold font-mono uppercase px-2.5 py-1 rounded-lg border border-slate-200">
                    {crop.category.replace("-", " & ")}
                  </span>
                </div>

                {/* Content info */}
                <div>
                  <div className="flex items-center space-x-2 text-brand-green mb-1.5">
                    {getCropIcon(crop.icon)}
                    <span className="text-[11px] font-bold font-mono tracking-wider italic text-slate-400">
                      {crop.scientificName}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-800 tracking-tight group-hover:text-brand-green transition-colors mb-2">
                    {crop.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light mb-4 line-clamp-3">
                    {crop.tagline}
                  </p>
                </div>

                {/* Footer details & CTA */}
                <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">{crop.averageMaturityDays}</span>
                  <span className="font-semibold text-brand-green group-hover:translate-x-1 transition-transform flex items-center space-x-0.5">
                    <span>Specs</span>
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Deep Dive Drawer Overlay */}
        <AnimatePresence>
          {selectedCrop && (
            <>
              {/* Backshadow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCrop(null)}
                className="fixed inset-0 bg-brand-soil z-50 backdrop-blur-xs"
              />

              {/* Dynamic Center Panel Drawer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 30 }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                className="fixed inset-x-2 bottom-2 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-4xl bg-white rounded-[32px] shadow-2xl z-50 overflow-hidden flex flex-col max-h-[92vh]"
              >
                
                {/* Drawer Header Banner */}
                <div className="relative p-6 sm:p-8 bg-brand-dark-green text-white flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 shrink-0">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-2xl bg-brand-lime flex items-center justify-center text-brand-dark-green">
                      {getCropIcon(selectedCrop.icon)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                          {selectedCrop.name} Portfolio
                        </h4>
                        <span className="text-brand-lime text-xs font-mono italic">
                          ({selectedCrop.scientificName})
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-mono tracking-wider uppercase mt-1">
                        HM.CLAUSE Premium Botanical Strain
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCrop(null)}
                    className="absolute top-4 right-4 sm:static p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/95 transition-all cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Drawer Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
                  
                  {/* Grid Splitscreen */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Left Column: Image and Specs summary */}
                    <div>
                      <div className="h-56 w-full rounded-2xl overflow-hidden mb-6 shadow-md border border-slate-100 relative">
                        <img 
                          src={selectedCrop.imageUrl} 
                          alt={selectedCrop.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 left-3 bg-brand-soil/80 backdrop-blur-md text-white text-[10px] font-mono font-bold px-3 py-1 rounded-lg border border-white/10">
                          {selectedCrop.averageMaturityDays} average maturation
                        </div>
                      </div>

                      <p className="text-slate-700 text-sm leading-relaxed font-light mb-6">
                        {selectedCrop.description}
                      </p>

                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                        <h5 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase font-mono mb-3">
                          Agronomic Soil Requirements
                        </h5>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-xs text-slate-600 mb-1 font-semibold">
                              <span>Soil Optima Range</span>
                              <span className="text-brand-green font-mono">{selectedCrop.soilOptima}</span>
                            </div>
                            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden relative">
                              <div className="absolute top-0 bottom-0 left-[60%] right-[15%] bg-gradient-to-r from-brand-lime to-brand-green rounded-full" />
                            </div>
                          </div>
                          <div className="text-[10px] text-slate-400 font-light flex items-start space-x-1">
                            <HelpCircle className="h-3 w-3 mt-0.5 shrink-0" />
                            <span>These specifications describe the historical averages. Soil prep and localized nutrient ratios will directly alter actual seedling vigor. Compare with our Agronomic Advisor values.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Breeding Focus & Resistance Profile */}
                    <div className="space-y-6">
                      
                      {/* Breeding Priorities */}
                      <div>
                        <h5 className="text-xs font-bold text-slate-500 tracking-wider uppercase font-mono mb-3 flex items-center space-x-1.5">
                          <Check className="h-4 w-4 text-brand-lime" />
                          <span>Key Selection Focus Parameters</span>
                        </h5>
                        <ul className="space-y-2.5">
                          {selectedCrop.breedingFocus.map((focus, index) => (
                            <li key={index} className="flex items-start space-x-2 text-xs text-slate-700">
                              <span className="h-2.5 w-2.5 rounded-full bg-brand-lime border border-brand-green mt-1 shrink-0 flex items-center justify-center text-[6px] text-brand-dark-green font-extrabold">✓</span>
                              <span className="leading-relaxed font-light">{focus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Famous Varieties catalog */}
                      <div className="p-4 rounded-2xl border border-brand-green/20 bg-green-50/20">
                        <h5 className="text-xs font-bold text-brand-dark-green tracking-wider uppercase font-mono mb-2 flex items-center space-x-1.5">
                          <span>Verified Commercial Varieties</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedCrop.notableVarieties.map((varName) => (
                            <span key={varName} className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold border border-brand-green/15 text-brand-green shadow-xs">
                              {varName}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Disease Protection profile */}
                      <div className="p-4 bg-amber-50/20 border border-brand-accent/20 rounded-2xl">
                        <h5 className="text-xs font-bold text-brand-accent tracking-wider uppercase font-mono mb-1">
                          Pathogen Resistance Packet
                        </h5>
                        <p className="text-xs text-slate-700 leading-relaxed font-light">
                          {selectedCrop.resistanceProfile}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Seed Interactive Calculator Container */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 mt-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <Calculator className="h-5 w-5 text-brand-green" />
                      <h5 className="text-sm font-bold text-brand-dark-green uppercase tracking-wide">
                        Grower Seeding Seed-Packet Estimator
                      </h5>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-light mb-6">
                      Plan your next delivery. This calculator counts recommended seed counts based on targeted acreage density and standard crop thinning loss.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      
                      {/* Area size input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase font-mono">
                          Target Farm Land Area
                        </label>
                        <div className="relative">
                          <input 
                            type="number" 
                            min="1"
                            max="1000"
                            value={areaSize}
                            onChange={(e) => setAreaSize(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:outline-none"
                          />
                          <div className="absolute right-2 top-1.5 flex bg-slate-50 border border-slate-100 rounded-lg overflow-hidden">
                            <button 
                              onClick={() => setAreaUnit("acres")}
                              className={`px-2 py-0.5 text-[9px] font-bold uppercase transition-colors ${
                                areaUnit === "acres" ? "bg-brand-green text-white" : "text-slate-400"
                              }`}
                            >
                              Acre
                            </button>
                            <button 
                              onClick={() => setAreaUnit("hectares")}
                              className={`px-2 py-0.5 text-[9px] font-bold uppercase transition-colors ${
                                areaUnit === "hectares" ? "bg-brand-green text-white" : "text-slate-400"
                              }`}
                            >
                              Hect
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Plant Density input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase font-mono">
                          Density (seeds per {areaUnit === "acres" ? "Acre" : "Hec."})
                        </label>
                        <input 
                          type="number" 
                          step="1000"
                          min="1000"
                          max="150000"
                          value={targetDensity}
                          onChange={(e) => setTargetDensity(Math.max(1000, parseInt(e.target.value) || 1000))}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:outline-none"
                        />
                      </div>

                      {/* Germination rate specification slider */}
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase font-mono">
                          Stated Seed Germination Rate (%)
                        </label>
                        <div className="flex items-center space-x-3 pt-1">
                          <input 
                            type="range" 
                            min="80"
                            max="99"
                            value={germinationCheckMode}
                            onChange={(e) => setGerminationCheckMode(parseInt(e.target.value))}
                            className="flex-1 accent-brand-green"
                          />
                          <span className="text-xs font-bold text-slate-800 font-mono">{germinationCheckMode}%</span>
                        </div>
                      </div>

                    </div>

                    {/* Calculated Outcome */}
                    <div className="bg-brand-dark-green text-white rounded-xl p-5 flex flex-col md:flex-row justify-between items-stretch md:items-center space-y-4 md:space-y-0">
                      <div>
                        <p className="text-[10px] text-brand-lime font-mono tracking-wider font-bold uppercase">
                          Minimum Required Seed Count
                        </p>
                        <p className="text-xl sm:text-2xl font-serif font-bold tracking-tight mt-1">
                          {totalSeedsNeeded.toLocaleString()} <span className="font-sans text-xs font-light text-slate-300">individual seeds</span>
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 font-light leading-relaxed">
                          *Includes standard 5% safety margin backup and adjusts for specified germ rate.
                        </p>
                      </div>

                      {/* Packet Options translation */}
                      <div className="border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 space-y-2">
                        <p className="text-[10px] text-slate-300 font-mono uppercase font-bold text-left">
                          Packet Units Translation
                        </p>
                        <div className="space-y-1.5 text-xs">
                          {packetOptions.map((opt) => {
                            const packsNeeded = Math.ceil(totalSeedsNeeded / opt.size);
                            return (
                              <div key={opt.size} className="flex justify-between items-center space-x-4">
                                <span className="text-slate-200 text-[11px] font-light">
                                  {opt.name} ({opt.size.toLocaleString()}/pk):
                                </span>
                                <span className="text-brand-lime font-bold font-mono text-xs">
                                  {packsNeeded} {packsNeeded === 1 ? "pack" : "packs"}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Sample button */}
                    <div className="mt-4 flex justify-end">
                      <a 
                        href="#grower-contact"
                        onClick={() => setSelectedCrop(null)}
                        className="bg-brand-lime hover:bg-brand-lime/90 text-brand-dark-green font-bold text-[11px] px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center space-x-1"
                      >
                        <span>Request Custom Agronomic Trial Samples</span>
                        <span>→</span>
                      </a>
                    </div>

                  </div>

                </div>

                {/* Footer disclaimer */}
                <div className="p-4 bg-slate-100 border-t border-slate-200 text-center shrink-0 flex items-center justify-center space-x-1.5">
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest leading-none">
                    HM.CLAUSE SEED DIVISION • ALWAYS GROWING WITH YOU
                  </span>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
