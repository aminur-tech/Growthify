import { motion, type Variants } from 'framer-motion';
import { Rocket, Award, Users, CheckCircle, Quote } from 'lucide-react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/50 dark:from-blue-900/10 to-transparent -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="text-center space-y-6"
          >
            <motion.span variants={fadeInUp} className="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-widest uppercase">
              {t('about.vision_badge')}
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tight">
              {t('about.hero_title')} <span className="text-blue-600">{t('about.hero_highlight')}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t('about.hero_desc')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { label: t('about.stat_projects'), value: "250+", icon: <Rocket /> },
              { label: t('about.stat_satisfaction'), value: "99%", icon: <CheckCircle /> },
              { label: t('about.stat_users'), value: "1.2M", icon: <Users /> },
              { label: t('about.stat_awards'), value: "12", icon: <Award /> },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center space-y-2">
                <div className="flex justify-center text-blue-600 mb-2">{stat.icon}</div>
                <h3 className="text-4xl font-black dark:text-white">{stat.value}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium uppercase text-xs tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Strategy Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-blue-600 rounded-[3rem] rotate-3 absolute inset-0 -z-10 opacity-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="rounded-[3rem] shadow-2xl"
              />
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold">{t('about.strategy_title')} <br />{t('about.strategy_subtitle')}</h2>
              <div className="space-y-6">
                {[
                  { title: t('about.feat_innov_title'), desc: t('about.feat_innov_desc') },
                  { title: t('about.feat_arch_title'), desc: t('about.feat_arch_desc') },
                  { title: t('about.feat_user_title'), desc: t('about.feat_user_desc') }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex gap-4"
                  >
                    <div className="mt-1 bg-blue-600 rounded-full p-1 h-fit">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('about.testimonial_title')}</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none relative"
            >
              <Quote className="absolute top-6 right-8 text-blue-600/20" size={40} />
              <p className="text-slate-600 dark:text-slate-300 mb-8 italic">
                "{t('about.testimonial_text')}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden" />
                <div className="text-left">
                  <p className="font-bold">Alex Rivera</p>
                  <p className="text-xs text-blue-600 font-bold uppercase">CEO, TechFlow</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;