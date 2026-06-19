import React, { useState } from "react";
import { 
  Compass, 
  MapPin, 
  Layers, 
  Check, 
  RotateCw, 
  AlertTriangle, 
  ArrowRight,
  Sprout,
  TrendingUp,
  Droplet
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SeedSuggestion {
  hybridName: string;
  plantingWindow: string;
  guidelines: string[];
  treatment: string;
  moistureCheck: string;
  yieldPotential: string;
}

export default function AgronomicAdvisor() {
  const [activeStep, setActiveStep] = useState<number>(1);
  
  // Selection States
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedSoil, setSelectedSoil] = useState<string>("");
  const [selectedCrop, setSelectedCrop] = useState<string>("");

  const regions = [
    { id: "med", name: "Mediterranean & Southern Europe", climate: "Hot dry summers, mild winters", badge: "Warm Dry" },
    { id: "na_dry", name: "North America Central Valley", climate: "High solar radiation, intensive irrigation", badge: "Arid Solar" },
    { id: "sa_humid", name: "South America Subtropical", climate: "High humidity, heavy summer showers", badge: "Humid Wet" },
    { id: "asia_monsoon", name: "Asia-Pacific Monsoon Belts", climate: "Torrential rainfall, high clay retention", badge: "Rainy Clay" },
    { id: "eu_temp", name: "Northern & Central Europe", climate: "Short cool summers, heavy winter clay loam", badge: "Cool Moist" }
  ];

  const soils = [
    { id: "sandy", name: "Sandy, fast-draining soil", description: "Leaches nitrogen rapidly, needs frequent drip lines", texture: "Light & Gritty" },
    { id: "clay", name: "Dense clay loam soil", description: "Retains high humidity, susceptible to root rot and waterlogging", texture: "Heavy & Dense" },
    { id: "loam", name: "Rich organic silt loam", description: "Highly stable parameters, supreme water capillary holding", texture: "Balanced Perfect" }
  ];

  const advisorCrops = [
    { id: "tomato", name: "Solanaceous Tomato", description: "Demands deep nitrogen profile & structural virus immunity" },
    { id: "melon", name: "Gourmet Melon Hybrid", description: "Requires intense solar sugar priming & Powdery Mildew guard" },
    { id: "pepper", name: "Thick-Walled Bell Pepper", description: "Vulnerable to leaf spot, wants balanced slow-release potassium" },
    { id: "squash", name: "High-Volume Zucchini/Squash", description: "Requires erect stems & multi-viral vector shield complexes" },
    { id: "cauliflower", name: "Snow-White Cauliflower", description: "Vulnerable to heat browning, needs superb wrapper leaf snap" }
  ];

  const getSowingSuggestion = (region: string, soil: string, crop: string): SeedSuggestion => {
    // Generate tailored, high-fidelity suggestions based on user choice
    if (crop === "tomato") {
      return {
        hybridName: "Rugosa-Shield F1 Solaro",
        plantingWindow: region === "med" ? "January - March (Greenhouse), April - May (Open Field)" : "March - June",
        treatment: "Certi-Prime Biological Shield Pellet + ToBRFV Molecular Marker verification",
        moistureCheck: "Acrul-Drip 3.5 Liters/hour per seedling with split morning dosing matrix to limit root splitting.",
        yieldPotential: "92 - 110 tons per Hectare (Under stable trellis crop husbandry)",
        guidelines: [
          "Avoid excessive overhead sprinklers to prevent late-blight mycelium spore germination.",
          "Apply calcium-nitrate rich solutions during early blossom set to block blossom-end rot.",
          "Keep target soil pH levels at 6.2 - 6.5. If clay loam is used, restrict deep watering close to harvest."
        ]
      };
    } else if (crop === "melon") {
      return {
        hybridName: "Cantaloupe Claudio F1 Gold-Net",
        plantingWindow: region === "med" || region === "na_dry" ? "March - May" : "October - December (Dry Cycle)",
        treatment: "Fungus-Stop Copper-free pellet with early mycorrhiza root inoculants",
        moistureCheck: "Constant moisture during skin netting phase, then restrict irrigation 12 days before cut to spike sugar.",
        yieldPotential: "35 - 45 tons per Hectare",
        guidelines: [
          "Melons are vulnerable to damp-off under dense clay loam. We recommend planting on raised sand-mulch beds.",
          "Ensure high honeybee population during the early yellow flowering phase to secure crop set.",
          "Spray copper-based organic formulations if downy mildew warnings appear during humid snaps."
        ]
      };
    } else if (crop === "cauliflower") {
      return {
        hybridName: "Blizz-Shield Self-Wrapper F1",
        plantingWindow: region === "eu_temp" ? "Cool July - August (Fall harvest)" : "November - January (Winter harvest)",
        treatment: "Nico-Shield safe Insecticide pellet coating",
        moistureCheck: "High organic humus retention. Do not let roots dry out during curd head formation.",
        yieldPotential: "28 - 34 tons per Hectare",
        guidelines: [
          "Maintain absolute continuous soil moisture. Drying out triggers premature miniature head buttoning.",
          "Curd wrapper leaves will naturally pop shut to cover curd from UV rendering. Do not clip wrapper leaves.",
          "Boron deficiencies cause hollow-stalk. Feed micro-dose foliar Boron-solubor."
        ]
      };
    } else if (crop === "pepper") {
      return {
        hybridName: "Titan Blocky Red Dulce",
        plantingWindow: "February - April",
        treatment: "Zinc-Enriched bio-primer pelleting",
        moistureCheck: "Maintain stable relative moisture. Severe wetting-drying loops cause blossom-end rot.",
        yieldPotential: "60 - 75 tons per Hectare",
        guidelines: [
          "Keep nitrogen inputs moderate. High nitrogen triggers wild leaf bush explosion with zero fruit crop set.",
          "Support branches with physical twine lines to prevent heavy thick-walled peppers from splitting stalks.",
          "Keep target soil pH above 5.8 to support deep structural calcium transport."
        ]
      };
    } else {
      return {
        hybridName: "Zucchino Emerald-Max Giant",
        plantingWindow: "Year-Round in frost-free regions",
        treatment: "Dual-Fungicide Shield Coating",
        moistureCheck: "High soil moisture load. Water directly to soil; wet leaves breed powdery mildew quickly.",
        yieldPotential: "50 - 65 tons per Hectare",
        guidelines: [
          "Harvest daily! Emerald-Max Zucchinis grow 2-3cm per day under sunny conditions.",
          "Plant in well-drained loam. Waterboarding clay soil rots female buds prior to flower set.",
          "Check underneath leaves for aphid vector families carrying Yellow Mosaic virus."
        ]
      };
    }
  };

  const currentSuggestion = (selectedRegion && selectedSoil && selectedCrop) 
    ? getSowingSuggestion(selectedRegion, selectedSoil, selectedCrop) 
    : null;

  const handleReset = () => {
    setSelectedRegion("");
    setSelectedSoil("");
    setSelectedCrop("");
    setActiveStep(1);
  };

  return (
    <section id="agronomic-advisor" className="py-24 bg-brand-soil text-white relative overflow-hidden">
      
      {/* Decorative botanical blueprint backdrop */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none bg-radial-gradient from-brand-lime to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-lime/10 text-brand-lime px-3.5 py-1.5 rounded-full border border-brand-lime/20 mb-4">
            <TrendingUp className="h-4 w-4" />
            <span className="text-xs font-bold tracking-wider uppercase font-mono">Expert Agronomy Advisor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4 tracking-tight">
            Interactive Grower Advisor Matrix
          </h2>
          <p className="text-slate-300 font-light text-base leading-relaxed">
            Configure your local geographic parameters, soil geology, and target crop to retrieve professional seed-priming recommendations and commercial hybrid suggestions.
          </p>
        </div>

        {/* Wizard Main Panel */}
        <div className="bg-brand-dark-green rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto">
          
          {/* Step Progress indicators */}
          <div className="flex items-center justify-between mb-10 max-w-md mx-auto relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            
            {[1, 2, 3].map((stepNum) => (
              <button
                key={stepNum}
                onClick={() => {
                  if (stepNum === 1) setActiveStep(1);
                  if (stepNum === 2 && selectedRegion) setActiveStep(2);
                  if (stepNum === 3 && selectedRegion && selectedSoil) setActiveStep(3);
                }}
                disabled={
                  (stepNum === 2 && !selectedRegion) ||
                  (stepNum === 3 && (!selectedRegion || !selectedSoil))
                }
                className={`relative h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center font-mono font-bold text-xs sm:text-sm border transition-all z-10 ${
                  activeStep === stepNum
                    ? "bg-brand-lime text-brand-dark-green border-brand-lime"
                    : selectedRegion && stepNum === 1 || (selectedSoil && stepNum === 2)
                    ? "bg-brand-green text-brand-lime border-brand-lime"
                    : "bg-brand-dark-green text-white/40 border-white/10 cursor-not-allowed"
                }`}
              >
                {selectedRegion && stepNum === 1 || (selectedSoil && stepNum === 2) && stepNum < activeStep ? (
                  <Check className="h-5 w-5 stroke-[3]" />
                ) : (
                  <span>0{stepNum}</span>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            
            {/* STEP 1: REGION SELECTOR */}
            {activeStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h4 className="text-lg font-serif font-semibold text-brand-lime flex items-center justify-center space-x-1.5">
                    <MapPin className="h-5 w-5" />
                    <span>Step 1: Select Your Geographic Climate Zone</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-light">
                    Every hybrid is selected to thrive under specific atmospheric thermal indices.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {regions.map((reg) => (
                    <button
                      key={reg.id}
                      onClick={() => {
                        setSelectedRegion(reg.id);
                        setActiveStep(2);
                      }}
                      className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between group cursor-pointer ${
                        selectedRegion === reg.id
                          ? "bg-brand-green border-brand-lime shadow-lg"
                          : "bg-brand-soil/40 border-white/5 hover:border-brand-lime/30"
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <span className={`text-[10px] font-mono font-bold uppercase rounded-md px-2 py-0.5 leading-none ${
                            selectedRegion === reg.id ? "bg-white/15 text-white" : "bg-brand-green/30 text-brand-lime"
                          }`}>
                            {reg.badge}
                          </span>
                        </div>
                        <h5 className="font-semibold text-sm group-hover:text-brand-lime transition-colors">
                          {reg.name}
                        </h5>
                        <p className="text-xs text-slate-300 font-light mt-1.5 leading-relaxed">
                          {reg.climate}
                        </p>
                      </div>
                      <span className="text-xs text-brand-lime font-bold mt-4 flex items-center space-x-1 hover:translate-x-1 transition-transform">
                        <span>Select Zone</span>
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: SOIL TEXTURE SELECTOR */}
            {activeStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h4 className="text-lg font-serif font-semibold text-brand-lime flex items-center justify-center space-x-1.5">
                    <Layers className="h-5 w-5" />
                    <span>Step 2: Define Soil Geology Texture</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-light">
                    Soil pore size conditions seed gas absorption and water saturation limits.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {soils.map((soil) => (
                    <button
                      key={soil.id}
                      onClick={() => {
                        setSelectedSoil(soil.id);
                        setActiveStep(3);
                      }}
                      className={`p-5 rounded-2xl border text-left transition-all h-full flex flex-col justify-between group cursor-pointer ${
                        selectedSoil === soil.id
                          ? "bg-brand-green border-brand-lime shadow-lg"
                          : "bg-brand-soil/40 border-white/5 hover:border-brand-lime/30"
                      }`}
                    >
                      <div>
                        <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-brand-lime border border-brand-lime/20 rounded-md px-2 py-0.5 mb-3 inline-block">
                          {soil.texture}
                        </span>
                        <h5 className="font-semibold text-sm group-hover:text-brand-lime transition-colors">
                          {soil.name}
                        </h5>
                        <p className="text-xs text-slate-300 font-light mt-2 leading-relaxed">
                          {soil.description}
                        </p>
                      </div>
                      <span className="text-xs text-brand-lime font-bold mt-6 flex items-center space-x-1 hover:translate-x-1 transition-transform">
                        <span>Select Soil</span>
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="text-xs text-slate-400 font-bold hover:text-white transition-colors"
                  >
                    ← Back to Region
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CROPS SELECTOR & RESULTS */}
            {activeStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-8"
              >
                {!selectedCrop ? (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-serif font-semibold text-brand-lime flex items-center justify-center space-x-1.5">
                        <Sprout className="h-5 w-5" />
                        <span>Step 3: Choose Crop Category of Interest</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 font-light">
                        Retrieve targeted HM.CLAUSE hybrid suggestions for your soil/region matrix.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {advisorCrops.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => {
                            setSelectedCrop(c.id);
                          }}
                          className="p-5 rounded-2xl border text-left bg-brand-soil/40 border-white/5 hover:border-brand-lime hover:bg-brand-green/10 transition-all flex flex-col justify-between group cursor-pointer"
                        >
                          <div>
                            <h5 className="font-semibold text-sm group-hover:text-brand-lime transition-colors">
                              {c.name}
                            </h5>
                            <p className="text-xs text-slate-300 font-light mt-1.5 leading-relaxed">
                              {c.description}
                            </p>
                          </div>
                          <span className="text-xs text-brand-lime font-bold mt-4 flex items-center space-x-1 hover:translate-x-1 transition-transform">
                            <span>Select & Match</span>
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        onClick={() => setActiveStep(2)}
                        className="text-xs text-slate-400 font-bold hover:text-white transition-colors"
                      >
                        ← Back to Soil Settings
                      </button>
                    </div>
                  </div>
                ) : (
                  // DISPLAY RESULTS REPORT
                  <motion.div
                    initial={{ scale: 0.96, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="p-4 bg-brand-green/30 border border-brand-lime/20 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Check className="h-8 w-8 text-brand-lime bg-brand-dark-green p-1.5 rounded-full border border-brand-lime/30 shrink-0" />
                        <div>
                          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                            Diagnostic Custom Alignment Complete
                          </h4>
                          <p className="text-xs text-slate-200 font-light">
                            Soil & Climate matching metrics aligned with HM.CLAUSE Hybrid Vault.
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleReset}
                        className="flex items-center space-x-1 text-xs text-brand-lime hover:text-white font-bold bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 hover:bg-white/15 cursor-pointer"
                      >
                        <RotateCw className="h-3.5 w-3.5" />
                        <span>Reset Advisor</span>
                      </button>
                    </div>

                    {currentSuggestion && (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        
                        {/* Highlights card */}
                        <div className="md:col-span-4 bg-brand-soil/60 rounded-2xl p-6 border border-white/5 space-y-4">
                          <div>
                            <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">
                              Primary Recommended Seed
                            </p>
                            <h5 className="text-lg font-serif font-bold text-brand-lime leading-tight mt-1">
                              {currentSuggestion.hybridName}
                            </h5>
                          </div>

                          <div className="border-t border-white/10 pt-3">
                            <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                              Ideal Planting Window
                            </p>
                            <p className="text-xs text-slate-200 mt-0.5">
                              {currentSuggestion.plantingWindow}
                            </p>
                          </div>

                          <div className="border-t border-white/10 pt-3">
                            <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                              Yield Benchmark Index
                            </p>
                            <p className="text-xs text-brand-lime font-bold font-mono mt-0.5">
                              {currentSuggestion.yieldPotential}
                            </p>
                          </div>
                        </div>

                        {/* Detailed Guidelines card */}
                        <div className="md:col-span-8 bg-brand-soil/20 rounded-2xl p-6 border border-white/5 space-y-4">
                          <div>
                            <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider mb-2">
                              Target Seed Priming Spec
                            </p>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-slate-200">
                              {currentSuggestion.treatment}
                            </div>
                          </div>

                          <div>
                            <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider mb-1 flex items-center space-x-1">
                              <Droplet className="h-3.5 w-3.5 text-brand-lime" />
                              <span>Hydration Management</span>
                            </p>
                            <p className="text-xs text-slate-300 font-light leading-relaxed">
                              {currentSuggestion.moistureCheck}
                            </p>
                          </div>

                          <div>
                            <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider mb-2">
                              Specialized Husbandry Cautions
                            </p>
                            <ul className="space-y-2">
                              {currentSuggestion.guidelines.map((guide, i) => (
                                <li key={i} className="flex items-start space-x-2 text-xs text-slate-200">
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand-lime mt-1.5 shrink-0" />
                                  <span className="leading-relaxed font-light">{guide}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* Disclaimer box */}
                    <div className="p-4 bg-brand-soil/40 rounded-xl flex items-start space-x-2 border border-white/5">
                      <AlertTriangle className="h-4 w-4 text-brand-accent mt-0.5 shrink-0" />
                      <p className="text-[10px] text-slate-400 leading-relaxed font-light">
                        *Breeding estimates are derived from global trial station registries. Seasonal microclimate anomalies (unseasonable frost, moisture saturation spikes, wind events) can directly influence seedling survival percentages. Contact your local agricultural subsidiary representative in Davis, Davis CA or Portes-lès-Valence for on-site consultation.
                      </p>
                    </div>

                  </motion.div>
                )}
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
