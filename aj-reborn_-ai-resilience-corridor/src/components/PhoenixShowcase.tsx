import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "./LanguageContext";
import { QrCode, X, ArrowRight, ShieldCheck, Zap, History } from "lucide-react";

export const PhoenixShowcase = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="showcase" className="py-24 px-8 bg-navy">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Label Title Column */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <h3 className="text-mekong uppercase font-bold tracking-[0.3em] text-[10px] mb-4">
              {t.showcase.subtitle}
            </h3>
            <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-none mb-6 text-white">
              The <span className="text-phoenix">Phoenix</span> Label
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              A digital-first certification bridge. Every unit is a verified resilient asset, bridging Mekong heritage with Japanese logistics precision.
            </p>
          </div>

          {/* Product Image Column */}
          <div className="md:col-span-6 bg-navy-light geometric-border rounded-t-3xl flex flex-col items-center justify-center p-12 relative group overflow-hidden">
             <div className="absolute top-4 left-6 text-[10px] uppercase tracking-widest text-phoenix font-bold italic">The Phoenix Label</div>
             
             {/* Jar Mockup Shape */}
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="w-40 h-56 bg-slate-800 border-2 border-white/10 rounded-xl relative flex flex-col items-center justify-center shadow-2xl"
             >
               <div className="w-32 h-40 bg-phoenix/90 rounded-sm p-3 flex flex-col justify-between overflow-hidden">
                 <div className="text-[10px] font-bold text-navy uppercase tracking-tighter">再生 - REBORN</div>
                 <div className="text-[8px] text-navy font-medium leading-none mb-2">Mekong x AI Precision</div>
                 <div className="w-full h-2 bg-navy/20 mb-1" />
                 <div className="w-3/4 h-1 bg-navy/10" />
               </div>
               
               {/* QR Component */}
               <div 
                 onClick={() => setIsModalOpen(true)}
                 className="absolute -bottom-4 -right-4 w-14 h-14 bg-white p-1 rounded-sm shadow-2xl cursor-pointer hover:rotate-6 transition-transform"
               >
                 <div className="grid grid-cols-4 gap-0.5 pointer-events-none">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className={cn("w-full h-2.5", Math.random() > 0.4 ? "bg-navy" : "bg-white")} />
                    ))}
                 </div>
               </div>
             </motion.div>

             <p className="mt-12 text-[11px] text-center text-slate-500 italic max-w-xs">
               "Survival Timeline: AI-driven pivot certified for direct export to Japan."
             </p>
          </div>

          {/* Features Column */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-4">
             {[
              { icon: <ShieldCheck size={16} />, label: "MRL Verification" },
              { icon: <Zap size={16} />, label: "AI Adaptability" },
              { icon: <History size={16} />, label: "Trust Blockchain" }
             ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center p-4 bg-white/5 geometric-border hover:bg-white/10 transition-all cursor-default">
                <div className="text-phoenix">{item.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">{item.label}</span>
              </div>
             ))}
          </div>
        </div>
      </div>

      {/* Modal remains largely same but updated styling */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-navy/95 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-navy-light geometric-border p-10 rounded-sm shadow-3xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/30 hover:text-white"
              >
                <X size={20} />
              </button>

              <h2 className="font-display text-2xl font-bold uppercase tracking-widest mb-10 text-white">
                Survival <span className="text-phoenix">Timeline</span>
              </h2>

              <div className="space-y-12 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                {[
                  { phase: t.showcase.timeline.pre, date: "Day 0", status: "STATUS_NORMAL", color: "bg-white/20" },
                  { phase: t.showcase.timeline.pivot, date: "Day 5", status: "PIVOT_ACTIVE", color: "bg-phoenix" },
                  { phase: t.showcase.timeline.ready, date: "Day 21", status: "CERTIFIED_READY", color: "bg-mekong" }
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-12">
                    <div className={cn("absolute left-0 top-1 w-8 h-8 rounded-full geometric-border bg-navy z-10 flex items-center justify-center")}>
                      <div className={cn("w-2 h-2 rounded-full", step.color)} />
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-bold text-sm uppercase tracking-tight text-white">{step.phase}</h4>
                        <span className="text-[9px] font-mono opacity-50">{step.date}</span>
                      </div>
                      <p className="text-white/20 text-[9px] font-mono tracking-widest uppercase">{step.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
