import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import CropCatalog from "./components/CropCatalog";
import AgronomicAdvisor from "./components/AgronomicAdvisor";
import ResearchSpotlight from "./components/ResearchSpotlight";
import HeritageSplit from "./components/HeritageSplit";
import GlobalOffices from "./components/GlobalOffices";
import FooterView from "./components/FooterView";

import { 
  CROPS_DATA, 
  STATS_DATA, 
  NEWS_DATA, 
  BRANCH_LOCATIONS,
  NewsArticle
} from "./data";
import { 
  Building2, 
  Search, 
  Cpu, 
  CheckCircle, 
  MessageSquare, 
  Heart, 
  Eye, 
  ArrowRight,
  Sprout, 
  Lightbulb, 
  ShieldAlert, 
  UserPlus, 
  TrendingUp, 
  X,
  Clock,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Likes Counter state for News items to show interaction
  const [newsLikes, setNewsLikes] = useState<Record<string, number>>({
    news1: 42,
    news2: 18,
    news3: 110
  });

  // Contact Form states
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactCrop, setContactCrop] = useState("Tomato");
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  const incrementLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setNewsLikes(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setIsContactSubmitted(true);
  };

  const handleCloseContactSuccess = () => {
    setContactName("");
    setContactCompany("");
    setContactEmail("");
    setContactMessage("");
    setIsContactSubmitted(false);
  };

  // Perform full database locator scan based on user typing
  const searchResultsCrops = searchTerm.trim() === "" 
    ? [] 
    : CROPS_DATA.filter(crop => 
        crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crop.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crop.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crop.notableVarieties.some(v => v.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  const searchResultsOffices = searchTerm.trim() === "" 
    ? [] 
    : BRANCH_LOCATIONS.filter(loc => 
        loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.officeName.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-800 antialiased overflow-x-hidden">
      
      {/* Top Banner announcing Virtual Field Days */}
      <div className="bg-brand-dark-green text-white text-[11px] py-2 px-4 border-b border-white/10 relative z-50 text-center leading-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-1.5 sm:space-y-0 sm:space-x-3 text-glow-lime">
          <span className="flex items-center space-x-1 font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-lime animate-ping" />
            <span className="text-brand-lime uppercase tracking-widest font-mono">HM.CLAUSE Field Days 2026:</span>
          </span>
          <span className="font-light text-slate-200">Register for active dynamic trial plot walkthroughs starting July 15.</span>
          <a href="#grower-contact" className="text-brand-lime font-bold hover:underline ml-1 flex items-center space-x-0.5">
            <span>Book Invitation</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Main Navigation (Navbar.tsx) */}
      <Navbar 
        onSearchTerm={(t) => {
          setSearchTerm(t);
          setIsSearchModalOpen(true);
        }}
        openSearchModal={() => {
          setSearchTerm("");
          setIsSearchModalOpen(true);
        }}
      />

      {/* Immersive Hero slideshow Carousel (HeroCarousel.tsx) */}
      <HeroCarousel />

      {/* INTERACTIVE CORP VALUES / KEY METRICS SECTION */}
      <section id="key-statistics" className="py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-bold text-brand-green tracking-widest uppercase">
              HM.CLAUSE AT A GLANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-brand-dark-green font-semibold tracking-tight mt-1">
              Cultivating Worldwide Trust & Performance
            </h2>
            <p className="text-slate-500 font-light text-sm mt-2 leading-relaxed">
              We coordinate robust trial layouts globally to ensure seed genetics are precisely aligned with local climates, consumer trends, and agricultural shifts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STATS_DATA.map((stat, i) => (
              <div 
                key={stat.id}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-xl hover:border-brand-lime transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline space-x-0.5">
                    <span className="text-4xl font-mono font-bold text-brand-dark-green tracking-tight leading-none bg-gradient-to-r from-brand-dark-green to-brand-green bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-xl font-bold text-brand-green">
                      {stat.suffix}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase mt-4 mb-2">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STORY heritage SPLIT SECTION (HeritageSplit.tsx) */}
      <HeritageSplit />

      {/* BREEDING PROCESS STEP TIMELINE Spotlight (ResearchSpotlight.tsx) */}
      <ResearchSpotlight />

      {/* DYNAMIC CROPS FILTERS & CALCULATOR GRID (CropCatalog.tsx) */}
      <CropCatalog />

      {/* AGRONOMIC GROWER ADVISOR DIAGNOSTIC MATRIX (AgronomicAdvisor.tsx) */}
      <AgronomicAdvisor />

      {/* NEWS & LATEST EVENTS CARDS */}
      <section id="news-highlights" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-green tracking-widest uppercase">
                AGRICULTURAL JOURNAL & PR
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark-green mt-1 tracking-tight font-medium">
                Sowing Knowledge: Field Stories & News
              </h2>
            </div>
            <a 
              href="#grower-contact"
              className="text-xs font-bold text-brand-green hover:text-brand-dark-green flex items-center space-x-1 transition-colors hover:translate-x-1 transform"
            >
              <span>Subscribe to monthly field summaries</span>
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_DATA.map((art) => (
              <article 
                key={art.id}
                className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:border-brand-lime hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Photo area */}
                  <div className="h-48 w-full relative overflow-hidden">
                    <img 
                      src={art.imageUrl} 
                      alt={art.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200 px-2.5 py-1 text-[9px] font-bold font-mono text-brand-dark-green uppercase">
                      {art.tag}
                    </div>
                  </div>

                  {/* Body area */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-[10px] text-slate-400 font-mono">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{art.date}</span>
                      </span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-slate-800 leading-snug group-hover:text-brand-green transition-colors">
                      {art.title}
                    </h4>

                    <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer interactives */}
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1 text-[10px]">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{art.views} read count</span>
                  </span>

                  <button
                    onClick={(e) => incrementLike(art.id, e)}
                    className="flex items-center space-x-1.5 text-brand-green hover:text-brand-dark-green font-bold bg-green-50/50 hover:bg-green-50 px-2.5 py-1.5 rounded-lg border border-brand-green/10 transition-colors cursor-pointer"
                  >
                    <Heart className="h-3.5 w-3.5 fill-brand-green stroke-brand-green text-brand-lime" />
                    <span>{newsLikes[art.id]}</span>
                  </button>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* GLOBAL SUBSIDIARY MAP CARDS & CALLBACK (GlobalOffices.tsx) */}
      <GlobalOffices />

      {/* GROWER DIRECT PHYSICAL SEED TRIAL CONSULTATION SECTION */}
      <section id="grower-contact" className="py-24 bg-gradient-to-b from-white to-slate-50 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark-green bg-gradient-to-br from-brand-dark-green to-brand-soil text-white rounded-3xl shadow-2xl p-6 sm:p-12 relative overflow-hidden">
            
            {/* Background glowing decals */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lime/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column info */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[10px] font-mono font-bold text-brand-lime tracking-widest uppercase">
                  GROWER HOTLINE CONSULTATION
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-white leading-tight font-medium">
                  Establish a Tailored Crop Trial plot with our Agronomists
                </h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Ready to test HM.CLAUSE’s elite hybrids on your acreage? Submit this professional grower dossier. Our localized seed physiology teams will organize secure delivery of trial sample packs and monitor crop logs.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-start space-x-2.5">
                    <Sprout className="h-5 w-5 text-brand-lime mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Full Sowing Safety Audits</p>
                      <p className="text-slate-400 font-light mt-0.5">We inspect local soil salinity, target humidity, and common regional vector threats prior to dispatch.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Lightbulb className="h-5 w-5 text-brand-lime mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Non-GMO Molecular Certified Seeds ONLY</p>
                      <p className="text-slate-400 font-light mt-0.5">Every hybrid is tested to guarantee genetic identity, free of transgenic mutations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Form */}
              <div className="lg:col-span-7 bg-white text-slate-800 p-6 sm:p-8 rounded-[24px] border border-white/10 shadow-lg">
                {!isContactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Grower Contact Name */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase font-mono">
                          Grower / Representative Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. John Moran"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:outline-none focus:bg-white"
                        />
                      </div>

                      {/* Estate company */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase font-mono">
                          Company / Farm Name
                        </label>
                        <input
                          type="text"
                          value={contactCompany}
                          onChange={(e) => setContactCompany(e.target.value)}
                          placeholder="e.g. Moran Agricultural Solutions"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:outline-none focus:bg-white"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Crop Category selection */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase font-mono">
                          Crop Category of Interest
                        </label>
                        <select
                          value={contactCrop}
                          onChange={(e) => setContactCrop(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:outline-none focus:bg-white"
                        >
                          <option>Tomato (Processing & Fresh)</option>
                          <option>Gourmet Melon Hybrid</option>
                          <option>Squash & Baking Pumpkins</option>
                          <option>Thick-Walled Bell Pepper</option>
                          <option>Snow-White Wrapper Cauliflower</option>
                          <option>Rind-Resilient Watermelon</option>
                        </select>
                      </div>

                      {/* Grower Email */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase font-mono">
                          Corporate / Grower Email
                        </label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="e.g. grower@estate.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold focus:border-brand-green focus:outline-none focus:bg-white"
                        />
                      </div>

                    </div>

                    {/* Detailed Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase font-mono">
                        Dossier Notes & Environmental constraints
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Provide details of past virus presence, water salinity level, temperature peaks, and desired shipping packet units..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-brand-green focus:outline-none focus:bg-white resize-none"
                      />
                    </div>

                    {/* Submit Hotline CTA */}
                    <button
                      type="submit"
                      className="w-full bg-brand-green hover:bg-brand-dark-green text-white font-bold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center space-x-1.5 shadow-md hover:shadow-lg"
                    >
                      <MessageSquare className="h-4 w-4 text-brand-lime" />
                      <span>Submit Dossier to Agronomist</span>
                    </button>
                  </form>
                ) : (
                  // Success confirmation overlay
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-brand-green/20">
                      <CheckCircle className="h-10 w-10 text-brand-green" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-lg font-bold text-slate-800">
                        Consultation Request Submitted
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        Thank you, <strong>{contactName}</strong>. A localized technical supervisor from our Davis or Valence testing facility will review your environmental constraints for <strong>{contactCrop}</strong> and contact you directly at <strong>{contactEmail}</strong> to arrange plot delivery.
                      </p>
                    </div>

                    <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                      HM.CLAUSE CUSTOMER PROTOCOL ID: {Math.floor(10000 + Math.random() * 90000)}
                    </p>

                    <button
                      onClick={handleCloseContactSuccess}
                      className="px-6 py-2.5 bg-brand-green hover:bg-brand-dark-green hover:shadow-md text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                    >
                      Establish New Request
                    </button>
                  </motion.div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* HIGH VISIBILITY SEARCH UTILITY OVERLAY MODAL */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchModalOpen(false)}
              className="fixed inset-0 bg-brand-soil z-50 backdrop-blur-xs"
            />

            {/* Modal Screen */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              className="fixed top-10 sm:top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-50 overflow-hidden max-h-[80vh] flex flex-col"
            >
              
              {/* Header search bar inside modal */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
                <div className="flex items-center space-x-2.5 flex-1 mr-4">
                  <Search className="h-5 w-5 text-brand-green" />
                  <input
                    type="text"
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search crops, scientific names, varieties, global offices..."
                    className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => setIsSearchModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Results Listing */}
              <div className="flex-1 overflow-y-auto pt-6 space-y-6">
                {searchTerm.trim() === "" ? (
                  <div className="text-center py-8 text-xs text-slate-400 space-y-2 font-light">
                    <Sprout className="h-10 w-10 text-slate-300 mx-auto animate-pulse" />
                    <p>Enter key terms to parse the physical genome or corporate directory database.</p>
                    <div className="flex justify-center gap-1.5 flex-wrap pt-2 max-w-sm mx-auto">
                      {["Tomato", "Melon", "California", "France", "Claudio", "Pepper", "Cauliflower"].map((keyword) => (
                        <button
                          key={keyword}
                          onClick={() => setSearchTerm(keyword)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-2.5 py-1 rounded-lg text-[10px] font-semibold cursor-pointer"
                        >
                          "{keyword}"
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Crop Results */}
                    {searchResultsCrops.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">
                          Matched Crops ({searchResultsCrops.length})
                        </h4>
                        <div className="space-y-2">
                          {searchResultsCrops.map((crop) => (
                            <a
                              key={crop.id}
                              href="#crops-catalog"
                              onClick={() => setIsSearchModalOpen(false)}
                              className="p-3 bg-slate-50 border border-slate-100 rounded-2xl block hover:border-brand-lime hover:bg-gradient-to-r hover:from-white hover:to-white hover:shadow-md transition-all group"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm font-bold text-slate-800 group-hover:text-brand-green">
                                    {crop.name}
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-400 font-light italic">
                                    ({crop.scientificName})
                                  </span>
                                </div>
                                <span className="text-[10px] bg-brand-green/10 text-brand-green font-bold px-2 py-0.5 rounded-lg">
                                  {crop.category}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-500 font-light leading-relaxed mt-1">
                                {crop.tagline}
                              </p>
                              <div className="flex flex-wrap gap-1 mt-1.5">
                                {crop.notableVarieties.map((v) => (
                                  <span key={v} className="text-[8px] font-bold text-brand-green bg-white border border-brand-green/10 px-1.5 rounded-md">
                                    {v}
                                  </span>
                                ))}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Office Results */}
                    {searchResultsOffices.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">
                          Matched Regional Offices ({searchResultsOffices.length})
                        </h4>
                        <div className="space-y-2">
                          {searchResultsOffices.map((office) => (
                            <a
                              key={office.officeName}
                              href="#global-presence"
                              onClick={() => setIsSearchModalOpen(false)}
                              className="p-3 bg-slate-50 border border-slate-100 rounded-2xl block hover:border-brand-lime hover:bg-gradient-to-r hover:from-white hover:to-white hover:shadow-md transition-all group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-800 group-hover:text-brand-green">
                                  {office.officeName}
                                </span>
                                <span className="text-[9px] bg-slate-200 border border-slate-300 text-slate-500 font-bold px-2 py-0.5 rounded-lg">
                                  {office.region}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-500 font-light mt-1 flex items-center space-x-1">
                                <Building2 className="h-3 w-3 inline text-slate-400" />
                                <span>{office.address} | Tel: {office.phone}</span>
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* No matches */}
                    {searchResultsCrops.length === 0 && searchResultsOffices.length === 0 && (
                      <div className="text-center py-10 text-xs text-slate-400 space-y-1 font-light">
                        <ShieldAlert className="h-8 w-8 text-brand-accent mx-auto" />
                        <p>No specifications matched your query: <strong>"{searchTerm}"</strong>.</p>
                        <p>Try searching for core species like "Tomato" or "Melon", or key locations like "France" or "California".</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Floating footer tip */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 text-center shrink-0">
                <span className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">
                  HM.CLAUSE SECURE HYBRID DIRECTORY SCANNER
                </span>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Botanical Dark Footer Component (FooterView.tsx) */}
      <FooterView />

    </div>
  );
}
