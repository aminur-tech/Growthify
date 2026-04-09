import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const isRtl = i18n.dir() === 'rtl';

  // SAFE DATA FETCHING: 
  // We use a fallback empty array [] to prevent ".map is not a function"
  const rawFeatures = t('benefits.features', { returnObjects: true });
  const features = Array.isArray(rawFeatures) ? rawFeatures : [];

  const points = [
    { 
        label: t('benefits.stats.conversion', 'Conversion Lift'), 
        value: "45%+", 
        color: "text-blue-600 dark:text-blue-400" 
    },
    { 
        label: t('benefits.stats.speed', 'Site Speed'), 
        value: "1.2s", 
        color: "text-indigo-600 dark:text-indigo-400" 
    },
    { 
        label: t('benefits.stats.uptime', 'Uptime Rate'), 
        value: "99.9%", 
        color: "text-purple-600 dark:text-purple-400" 
    },
  ];

  return (
    <section 
      ref={containerRef} 
      className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      <div className={`w-full md:w-11/12 mx-auto px-4 flex flex-col ${isRtl ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
        
        {/* Left Content Column */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1]">
              {t('benefits.title')} <span className="text-blue-600">{t('benefits.company')}</span>?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
              {t('benefits.description')}
            </p>

            {/* SAFE MAPPING */}
            <ul className="space-y-4 mb-10">
              {features.map((f: string, i: number) => (
                <li 
                  key={i} 
                  className={`flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold ${isRtl ? 'flex-row-reverse text-right' : ''}`}
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span>{f}</span>
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
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className={`text-2xl md:text-4xl font-black ${p.color} mb-1 tracking-tight`}>
                    {p.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">
                    {p.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Visual Column */}
        <motion.div 
          className="flex-1 relative w-full"
          initial={{ opacity: 0, scale: 0.9, rotateY: isRtl ? -15 : 15 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Card Wrapper */}
          <div className="relative z-10 bg-slate-50 dark:bg-slate-900 aspect-[4/3] rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 shadow-inner flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <img 
                      src="/img.png" 
                      alt="Data Preview" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                    />
                </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -top-6 ${isRtl ? '-left-6' : '-right-6'} z-20 bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 hidden md:block`}
          >
            <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />
              </div>
              <div className={isRtl ? 'text-right' : 'text-left'}>
                <div className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  {t('benefits.visual.traffic')}
                </div>
                <div className="text-xs font-bold text-emerald-500">
                  {t('benefits.visual.growth')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[120px] rounded-full -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

export default Benefits;