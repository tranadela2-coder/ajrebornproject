import { motion } from "motion/react";
import { useTranslation } from "./LanguageContext";
import { Quote } from "lucide-react";

export const FounderSection = () => {
  const { t } = useTranslation();

  return (
    <section id="leadership" className="py-32 px-8 bg-navy relative border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-end">
        
        {/* Quote Column */}
        <div className="md:col-span-8">
           <Quote size={40} className="text-mekong/30 mb-8" />
           <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl italic text-white leading-tight mb-12 relative"
          >
            "{t.leadership.quote}"
          </motion.blockquote>
        </div>

        {/* Founder Info Column */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end md:text-right pb-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <div className="font-bold text-lg text-white">
              陳　邱　清　芳 <br/>
              <span className="text-mekong">({t.leadership.founder})</span>
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              Founder & Resilience Architect
            </div>
            <div className="text-[9px] text-mekong mt-2 uppercase tracking-tighter font-extrabold">
              Google Student Ambassador Emeritus
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Branding Line */}
      <div className="max-w-7xl mx-auto mt-24 flex justify-start gap-8 opacity-20 text-[9px] font-mono tracking-widest text-slate-400">
        <span>UNESCO_SDG_2030</span>
        <span>MEKONG_DIGITAL_TRUST</span>
        <span>JP_ECO_SECURITY</span>
      </div>
    </section>
  );
};
