import { motion } from "motion/react";
import { useTranslation } from "./LanguageContext";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-8 pt-32 pb-16 overflow-hidden bg-mesh">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="#00A8E8" strokeWidth="0.5" />
          <path d="M0 55 Q 25 45 50 55 T 100 55" fill="none" stroke="#00A8E8" strokeWidth="0.5" />
          <path d="M0 45 Q 25 35 50 45 T 100 45" fill="none" stroke="#00A8E8" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-3xl"
        >
          <p className="text-mekong text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Economic Resilience Initiative
          </p>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-white tracking-tight">
            Re-engineering the Pulse of the <span className="text-mekong">Mekong</span> through Digital Trust.
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
            Transforming climate risk into strategic advantage by bridging An Giang’s indigenous wisdom with Japan's precision markets via AI-driven adaptive manufacturing.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-phoenix text-navy font-bold rounded-sm tracking-tight text-sm uppercase shadow-xl shadow-phoenix/20"
            >
              {t.hero.cta}
            </motion.button>
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-sm text-sm uppercase hover:bg-white/5 transition-colors">
              Recovery Protocols
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="geometric-accent-left hidden lg:block"
        >
          <div className="text-xs text-slate-500 uppercase tracking-[0.2em] mb-2 font-mono">
            経済安全保障
          </div>
          <div className="text-2xl font-serif italic text-white/90">
            信頼 / Trust Infrastructure
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-8 text-white/20"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};
