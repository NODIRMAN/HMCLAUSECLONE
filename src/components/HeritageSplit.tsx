import React from "react";
import { BRAND_Heritage } from "../data";
import { ShieldCheck, Flame, Compass, ArrowRight, Award } from "lucide-react";

export default function HeritageSplit() {
  return (
    <section id="about-heritage" className="py-24 bg-brand-soil text-white relative">
      {/* Decorative green accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-lime/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-lime/15 text-brand-lime px-3.5 py-1.5 rounded-full border border-brand-lime/20 mb-4">
            <Award className="h-4 w-4" />
            <span className="text-xs font-bold tracking-wider uppercase font-mono">Two Legends, One Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4 tracking-tight">
            Our Heritage Story: Fusing Harris Moran & Clause
          </h2>
          <p className="text-slate-300 font-light text-base leading-relaxed">
            In 2008, two historical seed experts merged under the cooperative Limagrain group, uniting North American trial power with European gourmet refinement.
          </p>
        </div>

        {/* Brand Splits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* HARRIS MORAN CARD */}
          <div className="group relative bg-brand-dark-green rounded-[32px] p-8 md:p-10 border border-white/5 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            {/* Background design glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-lime/5 via-transparent to-transparent opacity-80 group-hover:scale-110 transition-transform" />
            
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-brand-lime">
                  <Flame className="h-6 w-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm font-mono text-brand-lime font-bold uppercase tracking-widest leading-none">
                    Since 1859 • America
                  </h4>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white mt-1">
                    {BRAND_Heritage.moranTitle}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-brand-lime/90 font-bold mb-4">
                "{BRAND_Heritage.moranSubtitle}"
              </p>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {BRAND_Heritage.moranDescription}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>USA Breeding focus: Yield Vigor</span>
              <span className="text-brand-lime flex items-center space-x-1 hover:translate-x-1 transition-transform cursor-pointer font-bold">
                <span>View America trials</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

          {/* CLAUSE CARD */}
          <div className="group relative bg-brand-dark-green rounded-[32px] p-8 md:p-10 border border-white/5 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            {/* Background design glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-lime/5 via-transparent to-transparent opacity-80 group-hover:scale-110 transition-transform" />
            
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-brand-lime">
                  <Compass className="h-6 w-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm font-mono text-brand-lime font-bold uppercase tracking-widest leading-none">
                    Since 1785 • France
                  </h4>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white mt-1">
                    {BRAND_Heritage.clauseTitle}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-brand-lime/90 font-bold mb-4">
                "{BRAND_Heritage.clauseSubtitle}"
              </p>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {BRAND_Heritage.clauseDescription}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Euro Breeding focus: Gourmet Brix</span>
              <span className="text-brand-lime flex items-center space-x-1 hover:translate-x-1 transition-transform cursor-pointer font-bold">
                <span>View Europe trials</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Unifying Cooperative Statement */}
        <div className="bg-brand-dark-green/40 border border-white/5 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="p-3 bg-brand-lime text-brand-dark-green rounded-2xl text-center flex flex-col justify-center shrink-0 w-24">
            <span className="text-2xl font-mono font-bold leading-none">4th</span>
            <span className="text-[9px] font-bold uppercase tracking-lighter mt-1 leading-none">Seed Group</span>
          </div>
          <div>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {BRAND_Heritage.combinedStatement} Today, HM.CLAUSE is proud to operate as a critical subsidiary of the <strong>Limagrain Group</strong>, an agricultural company created and directed by French cooperative farmers dedicated to global food resource stability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
