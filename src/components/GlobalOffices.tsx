import React, { useState } from "react";
import { BRANCH_LOCATIONS, BranchLocation } from "../data";
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Globe2, 
  Calendar, 
  Check, 
  UserPlus, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GlobalOffices() {
  const [activeRegion, setActiveRegion] = useState<string>("North America");
  const [callbackOffice, setCallbackOffice] = useState<BranchLocation | null>(null);

  // Callback Form states
  const [growerName, setGrowerName] = useState("");
  const [growerPhone, setGrowerPhone] = useState("");
  const [targetCrop, setTargetCrop] = useState("Tomato");
  const [farmSize, setFarmSize] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter regions listed in data
  const uniqueRegions = Array.from(new Set(BRANCH_LOCATIONS.map((loc) => loc.region)));

  const filteredOffices = BRANCH_LOCATIONS.filter((loc) => loc.region === activeRegion);

  const handleSubmitCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!growerName || !growerPhone) return;
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setCallbackOffice(null);
    setGrowerName("");
    setGrowerPhone("");
    setTargetCrop("Tomato");
    setFarmSize("");
    setIsSubmitted(false);
  };

  return (
    <section id="global-presence" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-3.5 py-1.5 rounded-full border border-brand-green/20 mb-4">
            <Globe2 className="h-4 w-4" />
            <span className="text-xs font-bold tracking-wider uppercase font-mono">30+ Subsidiary Locations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark-green font-medium mb-4 tracking-tight">
            Our Global Breeding & Subsidiary Presence
          </h2>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            Pick a continent to resolve local agronomic customer service desks. Our scientists and local reps are based directly on the fields to coordinate localized trial assessments.
          </p>
        </div>

        {/* Region Selector Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-slate-100 pb-4">
          {uniqueRegions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeRegion === region
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/10"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Offices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredOffices.map((office) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={office.officeName}
                className="bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-xl hover:border-brand-lime transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[9px] font-bold px-2 rounded-lg py-0.5 uppercase">
                      {office.city}
                    </span>
                    <Building2 className="h-4 w-4 text-brand-green opacity-40" />
                  </div>

                  <h4 className="font-serif text-base font-bold text-slate-800 tracking-tight leading-tight mb-4">
                    {office.officeName}
                  </h4>

                  {/* Physical coordinates details */}
                  <div className="space-y-3.5 text-xs text-slate-600 mb-6">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                      <span className="font-light leading-relaxed">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                      <span className="font-mono">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 overflow-hidden">
                      <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                      <span className="text-brand-green truncate font-light break-all">{office.email}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCallbackOffice(office)}
                  className="w-full bg-slate-50 hover:bg-brand-lime hover:text-brand-dark-green text-brand-green font-bold text-[11px] py-3 rounded-xl border border-slate-100 transition-all flex items-center justify-center space-x-1.5"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Rep Callback</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic callback scheduler modal popup */}
        <AnimatePresence>
          {callbackOffice && (
            <>
              {/* Backshadow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="fixed inset-0 bg-brand-soil z-50 backdrop-blur-xs"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl z-50 overflow-hidden"
              >
                
                {/* Close Button top corner */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  ✕
                </button>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmitCallback} className="space-y-5">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-brand-green tracking-widest uppercase block mb-1">
                        HM.CLAUSE Grower callback
                      </span>
                      <h4 className="font-serif text-lg font-bold text-slate-800 leading-tight">
                        Schedule a local seed consultation
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Routing through local expert desk in <strong>{callbackOffice.city} ({callbackOffice.country})</strong>.
                      </p>
                    </div>

                    <div className="space-y-4">
                      
                      {/* Grower Name */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase font-mono">
                          Grower / Farm Name
                        </label>
                        <input
                          type="text"
                          required
                          value={growerName}
                          onChange={(e) => setGrowerName(e.target.value)}
                          placeholder="e.g. Harris Farms Inc."
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:bg-white focus:outline-none"
                        />
                      </div>

                      {/* Contact Phone */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase font-mono">
                          Callback Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={growerPhone}
                          onChange={(e) => setGrowerPhone(e.target.value)}
                          placeholder="e.g. +1 (530) XXXXXXX"
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        
                        {/* Target vegetable */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase font-mono">
                            Desired Species
                          </label>
                          <select
                            value={targetCrop}
                            onChange={(e) => setTargetCrop(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:bg-white focus:outline-none"
                          >
                            <option>Tomato</option>
                            <option>Melon</option>
                            <option>Pepper</option>
                            <option>Squash</option>
                            <option>Cauliflower</option>
                            <option>Watermelon</option>
                            <option>Sweet Corn</option>
                          </select>
                        </div>

                        {/* Estimated farm size */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase font-mono">
                            Farm Size (Acres)
                          </label>
                          <input
                            type="number"
                            value={farmSize}
                            onChange={(e) => setFarmSize(e.target.value)}
                            placeholder="e.g. 25"
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:bg-white focus:outline-none"
                          />
                        </div>

                      </div>

                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-green hover:bg-brand-dark-green text-white font-bold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center space-x-1 shadow-md hover:shadow-lg hover:shadow-brand-green/10"
                    >
                      <UserPlus className="h-4 w-4 text-brand-lime" />
                      <span>Submit Request Booking</span>
                    </button>
                  </form>
                ) : (
                  // Success Message Panel
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="text-center py-6 space-y-4"
                  >
                    <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-brand-green/20">
                      <Check className="h-8 w-8 text-brand-green animate-bounce" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-lg font-bold text-slate-800">
                        Callback Reserved!
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        Hello <strong>{growerName}</strong>. Our specialty representative from our <strong>{callbackOffice.city} office ({callbackOffice.country})</strong> will call you within 24 business hours at <strong>{growerPhone}</strong> to plan trial plots on your {farmSize ? farmSize : "designated"} acres of <strong>{targetCrop}</strong>.
                      </p>
                    </div>

                    <p className="text-[10px] text-slate-400 font-mono tracking-widest">
                      REF ID: HMC-{Math.floor(100000 + Math.random() * 900000)}
                    </p>

                    <button
                      onClick={handleCloseModal}
                      className="mt-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs px-6 py-2.5 rounded-xl transition-all w-full cursor-pointer"
                    >
                      Dismiss View
                    </button>
                  </motion.div>
                )}

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
