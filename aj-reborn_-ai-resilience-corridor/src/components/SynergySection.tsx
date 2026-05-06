import { motion } from "motion/react";
import { useTranslation } from "./LanguageContext";
import { Globe, MapPin, Activity } from "lucide-react";

export const SynergySection = () => {
  const { t } = useTranslation();

  return (
    <section id="synergy" className="py-24 px-8 bg-navy relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Stats Panel (Left) */}
          <div className="lg:col-span-4 flex flex-col justify-between py-4">
            <div className="space-y-12">
              {t.synergy.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className={cn(
                    "text-5xl font-bold tracking-tighter mb-2",
                    idx === 0 ? "text-phoenix" : idx === 1 ? "text-mekong" : "text-white"
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-navy-light geometric-border p-4 text-[10px] font-mono text-slate-500 leading-relaxed">
              SYNERGY_MAP_ACTIVE: VN_AN_GIANG &gt;&gt; JP_OSAKA <br/>
              LATENCY_MINIMIZED: [32mONLINE[0m
            </div>
          </div>

          {/* Map Visualization (Right) */}
          <div className="lg:col-span-8 relative aspect-video bg-navy-light geometric-border rounded-xl group overflow-hidden">
            <div className="absolute inset-0 opacity-10">
               <img 
                src="https://picsum.photos/seed/corridor-grid/1200/800" 
                alt="Technical Grid" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full p-12" viewBox="0 0 100 100" preserveAspectRatio="none">
               <motion.path
                d="M 10 80 Q 50 40 90 20"
                fill="none"
                stroke="#00A8E8"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
               />
               <circle cx="10" cy="80" r="1" fill="#FF8C00" />
               <circle cx="90" cy="20" r="1" fill="#00A8E8" />
            </svg>

            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-navy/80 geometric-border rounded-sm text-[9px] uppercase font-bold tracking-widest backdrop-blur-md">
              <Activity size={12} className="text-mekong animate-pulse" />
              Real-time Corridors
            </div>

            <div className="absolute bottom-8 right-8 text-right">
              <h4 className="font-display font-bold text-white uppercase tracking-tight mb-1">Mekong Digital Trust</h4>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest">{t.synergy.mapDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
