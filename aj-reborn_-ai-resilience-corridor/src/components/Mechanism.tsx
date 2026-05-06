import { motion } from "motion/react";
import { useTranslation } from "./LanguageContext";
import { BrainCircuit, Cpu, ShieldCheck } from "lucide-react";

export const Mechanism = () => {
  const { t } = useTranslation();

  const phases = [
    {
      id: "PHASE_01",
      icon: <BrainCircuit size={20} />,
      title: "Digital DNA Vault",
      description: t.mechanism.phase1.desc,
      color: "hover:border-mekong",
      labelColor: "text-mekong"
    },
    {
      id: "PHASE_02",
      icon: <Cpu size={20} />,
      title: "Generative Pivot",
      description: t.mechanism.phase2.desc,
      color: "bg-mekong/10 border-mekong/30",
      labelColor: "text-phoenix",
      isPremium: true
    },
    {
      id: "PHASE_03",
      icon: <ShieldCheck size={20} />,
      title: "Blockchain Bridge",
      description: t.mechanism.phase3.desc,
      color: "hover:border-mekong",
      labelColor: "text-mekong"
    }
  ];

  return (
    <section id="mechanism" className="py-24 px-8 bg-navy relative border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl uppercase tracking-tighter text-white">
            System <span className="text-mekong">Architecture</span>
          </h2>
          <div className="w-12 h-1 bg-phoenix mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group p-6 geometric-border transition-all relative overflow-hidden",
                phase.color,
                !phase.isPremium && "bg-white/5"
              )}
            >
              <div className={cn("font-mono text-[10px] mb-4 font-bold tracking-widest", phase.labelColor)}>
                {phase.id}
              </div>
              
              <h3 className="font-display font-bold text-lg uppercase mb-3 tracking-tight flex items-center gap-2">
                <span className="text-white/20">│</span> {phase.title}
              </h3>
              
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {phase.description}
              </p>

              {phase.isPremium && (
                <div className="absolute top-0 right-0 p-3">
                  <div className="w-2 h-2 rounded-full bg-phoenix animate-pulse" />
                </div>
              )}

              <div className="absolute -bottom-4 -right-4 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.07] transition-opacity">
                {phase.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
