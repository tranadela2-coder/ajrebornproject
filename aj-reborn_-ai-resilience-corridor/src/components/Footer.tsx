import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#070E1A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-6 uppercase font-display font-bold text-2xl tracking-tighter">
             <div className="w-8 h-8 bg-phoenix rounded-full flex items-center justify-center text-navy text-xs">AJ</div>
             AJ-REBORN
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            An Giang Economic Resilience Corridor. A collaborative initiative for climate adaptation and cross-border digital trade between Vietnam and Japan.
          </p>
          <div className="flex gap-4">
             {/* Simple Icon placeholders */}
             <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">X</div>
             <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">In</div>
             <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">Fb</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-phoenix mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/50 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Mechanism</li>
              <li className="hover:text-white cursor-pointer transition-colors">Phoenix Label</li>
              <li className="hover:text-white cursor-pointer transition-colors">Synergy Map</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-mekong mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">IP Rights</li>
              <li className="hover:text-white cursor-pointer transition-colors">MRL Compliance</li>
              <li className="hover:text-white cursor-pointer transition-colors">Governance</li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">Stay Connected</h4>
            <div className="flex">
               <input 
                type="email" 
                placeholder="Secure Email" 
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-md text-xs focus:outline-none focus:border-phoenix w-full" 
              />
               <button className="bg-white text-navy px-4 py-2 rounded-r-md text-[10px] font-bold uppercase">Join</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
        <span>© 2026 AJ-REBORN INITIATIVE. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-8">
           <span>An Giang, Vietnam</span>
           <span>Tokyo, Japan</span>
        </div>
      </div>
    </footer>
  );
};
