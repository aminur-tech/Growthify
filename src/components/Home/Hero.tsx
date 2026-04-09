import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 py-20 transition-colors duration-500">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-8 inline-block border border-blue-100 dark:border-blue-800 shadow-sm"
          >
            🚀 {t('hero.badge')}
          </motion.span>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]"
          >
            {t('hero.title_line1')} <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {t('hero.title_gradient')}
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 dark:shadow-blue-900/20"
            >
              <Link to="/contact">{t('hero.btn_contact')}</Link>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-10 py-4 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all backdrop-blur-sm"
            >
              <Link to="/services">{t('hero.btn_services')}</Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background stays the same - Design untouched */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[120px] -z-0" 
      />
    </section>
  );
};

export default Hero;