import { motion, type Variants } from "framer-motion";
import { Globe, BarChart3, Megaphone, Calendar, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ServiceTranslation {
  title: string;
  desc: string;
}

const ServicesOverview = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  // 1. Define Icons & Layout mapping separately from text
  const serviceConfigs = [
    { icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />, className: "md:col-span-2" },
    { icon: <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />, className: "md:col-span-1" },
    { icon: <Megaphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />, className: "md:col-span-1" },
    { icon: <Calendar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />, className: "md:col-span-2" },
  ];

  // 2. Safely fetch translated list
  const rawList = t('services_sec.list', { returnObjects: true });
  const translatedList = Array.isArray(rawList) ? rawList : [];

  // 3. Merge translation with local icons
  const services = translatedList.map((item: ServiceTranslation, index: number) => ({
    ...item,
    ...serviceConfigs[index]
  }));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="w-full md:w-11/12 mx-auto px-4">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            {t('services_sec.heading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium"
          >
            {t('services_sec.subheading')}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group relative p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all ${s.className} ${isRtl ? 'text-right' : 'text-left'}`}
            >
              {/* Decorative Glow */}
              <div className={`absolute ${isRtl ? '-left-4' : '-right-4'} -top-4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors`} />

              {/* Icon Container */}
              <div className={`w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-500 ${isRtl ? 'mr-0 ml-auto' : ''}`}>
                {s.icon}
              </div>

              {/* Title & Arrow */}
              <div className={`flex justify-between items-start mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  {s.title}
                </h3>
                <div className={`opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${isRtl ? '-translate-x-2 group-hover:translate-x-0' : 'translate-x-2 group-hover:translate-x-0'}`}>
                  <ArrowUpRight className={`w-8 h-8 text-blue-600 dark:text-blue-400 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                {s.desc}
              </p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-blue-600 to-indigo-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;