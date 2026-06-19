import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Search, 
  Globe2, 
  ChevronDown, 
  Sprout, 
  PhoneCall, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onSearchTerm: (term: string) => void;
  openSearchModal: () => void;
}

export default function Navbar({ onSearchTerm, openSearchModal }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [hasScrolled, setHasScrolled] = useState(false);

  const languages = [
    { code: "EN", name: "English (Global)" },
    { code: "FR", name: "Français (France)" },
    { code: "ES", name: "Español (Ibéria)" },
    { code: "IT", name: "Italiano (Italia)" },
    { code: "PT", name: "Português (Brasil)" },
    { code: "TH", name: "ไทย (Siam)" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About Us", link: "#about-heritage" },
    { name: "Our Crops", link: "#crops-catalog" },
    { name: "Innovation & Sciences", link: "#research-spotlight" },
    { name: "Agronomic Advisor", link: "#agronomic-advisor" },
    { name: "Global Offices", link: "#global-presence" },
    { name: "News & Events", link: "#news-highlights" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "bg-brand-dark-green/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
            : "bg-gradient-to-b from-brand-dark-green/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group focus:outline-none">
              <div id="navbar-logo-badge" className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-brand-green to-brand-dark-green border border-white/20 flex items-center justify-center shadow-lg shadow-brand-green/20 group-hover:scale-105 transition-transform">
                <Sprout className="h-6 w-6 text-white stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white flex items-center leading-none">
                  HM<span className="text-brand-lime font-sans font-extrabold mx-0.5">.</span>CLAUSE
                </span>
                <span className="text-[9px] text-brand-lime font-mono tracking-widest uppercase font-bold mt-1">
                  Vegetable Seeds • Limagrain
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="px-3 py-2 rounded-lg text-[14px] font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              
              {/* Search Toggle */}
              <button
                onClick={openSearchModal}
                className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                title="Search database"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Language Picker */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold text-white hover:bg-white/15 transition-all"
                >
                  <Globe2 className="h-4 w-4 text-brand-lime" />
                  <span>{currentLanguage}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform ${isLanguageDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isLanguageDropdownOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsLanguageDropdownOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl border border-slate-100 py-1.5 z-20"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setCurrentLanguage(lang.code);
                              setIsLanguageDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-all ${
                              currentLanguage === lang.code
                                ? "text-brand-green font-bold bg-green-50"
                                : "text-slate-700"
                            }`}
                          >
                            <span>{lang.name}</span>
                            {currentLanguage === lang.code && (
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Callback button */}
              <a
                href="#grower-contact"
                className="flex items-center space-x-1.5 bg-brand-lime hover:bg-brand-lime/90 text-brand-dark-green px-4 py-2 rounded-xl text-xs font-extrabold transition-all shadow-md hover:shadow-lg shadow-brand-lime/10"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Grower Hotline</span>
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={openSearchModal}
                className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6 text-brand-lime" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-soil z-40"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white text-slate-800 z-50 shadow-2xl flex flex-col"
            >
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-brand-dark-green text-white">
                <div className="flex items-center space-x-2">
                  <Sprout className="h-5 w-5 text-brand-lime" />
                  <span className="font-serif font-bold text-md">HM.CLAUSE</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-white/80 hover:text-brand-lime hover:bg-white/10 transition-all"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-2 mb-2">Navigation</p>
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-lg text-[14px] font-semibold text-slate-700 hover:text-brand-green hover:bg-slate-50 transition-all"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <hr className="border-slate-100" />

                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-2">Local Settings</p>
                  <div className="grid grid-cols-3 gap-2 px-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                          currentLanguage === lang.code
                            ? "bg-brand-green text-white border-brand-green"
                            : "bg-slate-50 text-slate-600 border-slate-200"
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="#grower-contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 bg-brand-green text-white w-full py-3 rounded-xl font-bold text-xs hover:bg-brand-dark-green transition-all"
                  >
                    <PhoneCall className="h-4 w-4 text-brand-lime" />
                    <span>Talk to an Agronomist</span>
                  </a>
                </div>
              </div>

              <div className="p-5 bg-slate-50 border-t border-slate-100 text-center">
                <p className="text-[10px] text-slate-400 font-mono tracking-widest">
                  HM.CLAUSE • BY LIMAGRAIN
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
