import React, { useState } from "react";
import { 
  Sprout, 
  Linkedin, 
  Youtube, 
  Mail, 
  Send, 
  Check, 
  CheckCircle, 
  BookOpen, 
  ExternalLink 
} from "lucide-react";

export default function FooterView() {
  const [newsEmail, setNewsEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-brand-soil text-slate-300 pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      
      {/* Botanical backdrop vectors */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top interactive grid: Newsletter + Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-white/10 pb-16">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div id="footer-logo-badge" className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-green to-brand-dark-green border border-white/20 flex items-center justify-center shadow-lg shadow-brand-green/20">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                HM<span className="text-brand-lime">.</span>CLAUSE
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed font-light">
              HM.CLAUSE is the 100% vegetable seed business unit of Limagrain. We specialize in breeding, sorting, diagnostics, and global distribution of elite vegetable genetics designed to maximize grower profitability.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-brand-lime hover:bg-white/10 text-slate-400 hover:text-brand-lime transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-brand-lime hover:bg-white/10 text-slate-400 hover:text-brand-lime transition-all">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-tight">
              Subscribe to the HM.CLAUSE Agronomy Journal
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Stay updated with physical and virtual field days calendar launches, recent melon index reports, and molecular resistance updates.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSub} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="Enter professional grower email"
                  className="bg-white/5 border border-white/5 px-4 py-3 rounded-xl text-xs font-semibold focus:outline-none focus:border-brand-lime flex-1 text-white placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="bg-brand-lime hover:bg-brand-lime/90 text-brand-dark-green font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center space-x-1 uppercase shrink-0"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div className="p-3 bg-brand-green/30 border border-brand-lime/20 rounded-xl max-w-md flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-lime shrink-0" />
                <p className="text-xs text-brand-lime font-bold">
                  Newsletter reservation logged! Check <strong>{newsEmail}</strong> for confirmation.
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Mid grid: multi-column link grids */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/10 pb-16 text-xs">
          
          <div className="space-y-4">
            <h5 className="font-mono text-brand-lime font-bold uppercase tracking-wider">
              About HM.CLAUSE
            </h5>
            <ul className="space-y-2.5 font-light text-slate-400">
              <li><a href="#about-heritage" className="hover:text-white transition-colors">Our History Timeline</a></li>
              <li><a href="#about-heritage" className="hover:text-white transition-colors">Parent Group Limagrain</a></li>
              <li><a href="#global-presence" className="hover:text-white transition-colors">Key Figures At a Glance</a></li>
              <li><a href="#news-highlights" className="hover:text-white transition-colors">CSR Reports & Sustainability</a></li>
              <li><a href="#grower-contact" className="hover:text-white transition-colors">Careers & Internships</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-mono text-brand-lime font-bold uppercase tracking-wider">
              Elite Species Catalogs
            </h5>
            <ul className="space-y-2.5 font-light text-slate-400">
              <li><a href="#crops-catalog" className="hover:text-white transition-colors">Tomato Solanaceous</a></li>
              <li><a href="#crops-catalog" className="hover:text-white transition-colors">Premium Melon Hybrids</a></li>
              <li><a href="#crops-catalog" className="hover:text-white transition-colors">Squashes & Pumpkins</a></li>
              <li><a href="#crops-catalog" className="hover:text-white transition-colors">Peppers & Lamuyo</a></li>
              <li><a href="#crops-catalog" className="hover:text-white transition-colors">Cauliflowers & Carrots</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-mono text-brand-lime font-bold uppercase tracking-wider">
              R&D & Science Certification
            </h5>
            <ul className="space-y-2.5 font-light text-slate-400">
              <li><a href="#research-spotlight" className="hover:text-white transition-colors">Non-GMO Breeding Statement</a></li>
              <li><a href="#research-spotlight" className="hover:text-white transition-colors">Genetics Molecular Marking</a></li>
              <li><a href="#research-spotlight" className="hover:text-white transition-colors">Seed Priming & Physiology</a></li>
              <li><a href="#agronomic-advisor" className="hover:text-white transition-colors">Pathogen Defense Packs</a></li>
              <li><a href="#research-spotlight" className="hover:text-white transition-colors">Trial Station Protocols</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-mono text-brand-lime font-bold uppercase tracking-wider">
              Legendary Heritage Brands
            </h5>
            <ul className="space-y-2.5 font-light text-slate-400 font-serif">
              <li><a href="#about-heritage" className="hover:text-white transition-colors italic">Harris Moran Seeds (est. 1859)</a></li>
              <li><a href="#about-heritage" className="hover:text-white transition-colors italic">Clause Seeds France (est. 1785)</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & technical disclaimers */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] text-slate-500 font-light">
          <div>
            <p>© 2026 HM.CLAUSE SAS. All rights reserved. • A Business Unit of <a href="https://www.limagrain.com/" target="_blank" rel="noreferrer" className="text-brand-lime hover:underline font-bold inline-flex items-center space-x-0.5"><span>Limagrain Group</span><ExternalLink className="h-3 w-3" /></a></p>
            <p className="mt-1">All hybrid specs represent typical yields under stable trial schedules. Regional weather, soil, and sowing timings alter results.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Terms of Seed Sales</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy & Cookies Statement</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors font-mono">ENGL-v1.09</a>
          </div>
        </div>

      </div>

      {/* CLONING SYSTEM CHECKLIST AS AN HTML COMMENT BLOCK TO RESPECT RULE 4
          ------------------------------------------------------------------
          <!--
          [HM.CLAUSE CLONING CHECKLIST - REALIZED TARGET FEATURES]
          1. HEADER NAVIGATION MENU (Navbar.tsx): Fully responsive with sticky scroll transitions, responsive burger menu, language picker drawer, and search modal interface.
          2. CAROUSEL HERO SECTION (HeroCarousel.tsx): Beautiful sliding 3-state engine with pretitle badges, high-contrast Unsplash visuals, and action anchors.
          3. KEY METRICS COUNTER GRID (App.tsx): Interactive corporate metrics with high scale numbers (100%, 15%+, 3000+, 40+, 30+).
          4. INTUITIVE CROPS FILTER CATALOGUE (CropCatalog.tsx): Dynamic sorting categories with detailed species specifications.
          5. EXPERT SEED ESTIMATOR UTILITY (CropCatalog.tsx - Calculator): Active mathematical estimator that translates farm area plus density into seed packet requirement metrics adjusting for specified germination percentages.
          6. AGRONOMIC WIZARD (AgronomicAdvisor.tsx): 3-Step tailored selector recommending varieties, sowing timings, moisture constraints, and target yields.
          7. SCIENTIFIC BREEDING TIMELINE Spotlight (ResearchSpotlight.tsx): Staggered stages from botanical genebanks to physical diagnostics under real latitude scenarios.
          8. LEGENDARY HERITAGE BRANDS (HeritageSplit.tsx): Compelling side-by-side narrative history detailing Harris Moran and Clause convergence.
          9. SEARCH DATABASE MODAL (App.tsx): Full-text overlay locator searching crops by scientific names, tags, varieties, or locations.
          10. GLOBAL OFFICES & CALL CALLBACK SUBMISSION (GlobalOffices.tsx): Interactive continents tabs filter. Form submits mock callbacks with localized success variables.
          11. BOTANICAL DARK FOOTER (FooterView.tsx): Highly detailed professional footer layout with multi-column links, social anchors, newsletter validator state, and copyright rules.
          -->
      */}
    </footer>
  );
}
