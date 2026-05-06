import { motion } from "motion/react";
import { useTranslation } from "./LanguageContext";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 border-b border-white/10 bg-navy/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4"
      >
        <div className="w-10 h-10 bg-phoenix rounded-sm flex items-center justify-center font-bold text-xl text-navy">
          AJ
        </div>
        <h1 className="text-xl tracking-[0.2em] font-light hidden sm:block">
          AJ-REBORN 
          <span className="text-[10px] bg-mekong px-1.5 py-0.5 ml-3 text-navy font-bold align-middle">
            RECOVERY V2.0
          </span>
        </h1>
      </motion.div>

      <div className="flex gap-8 items-center">
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-slate-400">
          <a href="#mechanism" className="hover:text-phoenix transition-colors">{t.nav.mechanism}</a>
          <a href="#showcase" className="hover:text-phoenix transition-colors">{t.nav.showcase}</a>
          <a href="#synergy" className="hover:text-phoenix transition-colors">{t.nav.synergy}</a>
        </nav>

        <div className="flex border border-white/20 rounded overflow-hidden">
          <button 
            onClick={() => setLanguage('en')}
            className={cn(
              "px-3 py-1 text-[11px] font-bold transition-all",
              language === 'en' ? "bg-white/10 text-phoenix" : "text-white/60 hover:bg-white/5"
            )}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('jp')}
            className={cn(
              "px-3 py-1 text-[11px] font-bold transition-all border-l border-white/20",
              language === 'jp' ? "bg-white/10 text-phoenix" : "text-white/60 hover:bg-white/5"
            )}
          >
            日本語
          </button>
        </div>
      </div>
    </nav>
  );
};
