import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const points = [
    { label: "Conversion Lift", value: "45%+", color: "text-blue-600 dark:text-blue-400" },
    { label: "Site Speed", value: "1.2s", color: "text-indigo-600 dark:text-indigo-400" },
    { label: "Uptime Rate", value: "99.9%", color: "text-purple-600 dark:text-purple-400" },
  ];

  const features = [
    "Performance-first architecture",
    "Conversion-optimized UI/UX",
    "Real-time analytics integration",
  ];

  return (
    <section ref={containerRef} className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="w-full md:w-11/12 mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left Content Column */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Why partner with <span className="text-blue-600">Growthify</span>?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
              We don't just build websites; we build growth engines. Every line of code
              is optimized for performance, and every design choice is made to drive 
              measurable user action.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
              {points.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className={`text-2xl md:text-3xl font-black ${p.color} mb-1`}>
                    {p.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 dark:text-slate-500 font-bold uppercase tracking-wider">
                    {p.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Visual Column (Mockup) */}
        <motion.div 
          className="flex-1 relative w-full"
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Card Mockup */}
          <div className="relative z-10 bg-slate-100 dark:bg-slate-900 aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 shadow-inner flex items-center justify-center border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                    <img src="/img.png" alt="" />
                </div>
            </div>
          </div>

          {/* Floating Element 1 */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-6 z-20 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-bold dark:text-white">Active Traffic</div>
                <div className="text-xs text-slate-500">+12.5% this week</div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

export default Benefits;