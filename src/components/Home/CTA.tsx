import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3rem] bg-blue-600 px-8 py-16 md:px-16 md:py-24 text-center shadow-2xl shadow-blue-500/20"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className={`absolute -top-24 ${isRtl ? '-right-24' : '-left-24'} w-96 h-96 bg-blue-400/20 rounded-full blur-3xl`} />
            <div className={`absolute -bottom-24 ${isRtl ? '-left-24' : '-right-24'} w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl`} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/30 text-blue-50 border border-blue-400/30 mb-8 backdrop-blur-sm"
            >
              <Sparkles size={16} />
              <span className="text-sm font-bold tracking-wide uppercase">
                {t('cta.badge')}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
              {t('cta.title_main')} <br /> 
              <span className="text-blue-200">{t('cta.title_sub')}</span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed opacity-90 font-medium">
              {t('cta.description')}
            </p>

            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-50 transition-all"
              >
                <Link to="/contact">  
                  {t('cta.btn_consultation')}
                </Link>
                {isRtl ? (
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                )}
              </motion.button>
              
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                <Link to="/services">
                  {t('cta.btn_pricing')}
                </Link>
              </button>
            </div>

            <p className="mt-8 text-blue-200/60 text-sm font-bold tracking-wide">
              {t('cta.footer_note')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;