import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, BarChart3, CalendarCheck, Check, Zap, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

interface PricingPlan {
  name: string;
  price?: string;
  price_monthly?: string;
  price_yearly?: string;
  description: string;
  features: string[];
  highlight: boolean;
}

const Services = () => {
  const { t } = useTranslation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Icons mapping for translated list
  const icons = [<Code key="code" size={32} />, <Search key="search" size={32} />, <BarChart3 key="chart" size={32} />, <CalendarCheck key="cal" size={32} />];
  const iconColors = ["text-blue-500", "text-emerald-500", "text-purple-500", "text-rose-500"];

  // Helper to get translated arrays (ensure your i18n is configured for returnObjects: true)
  const rawServices = t('services_list', { returnObjects: true });
  const servicesList = Array.isArray(rawServices) ? (rawServices as ServiceItem[]) : [];

  const rawPricing = t('pricing_list', { returnObjects: true });
  const pricingList = Array.isArray(rawPricing) ? (rawPricing as PricingPlan[]) : [];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pt-20">

      {/* 1. Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-8"
        >
          <Zap size={14} fill="currentColor" />
          <span className="text-xs font-bold uppercase tracking-widest">{t('services_page.hero_badge')}</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          {t('services_page.hero_title')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">{t('services_page.hero_highlight')}</span>
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {t('services_page.hero_desc')}
        </p>
      </section>

      {/* 2. Service Bento Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className={`mb-6 p-4 bg-slate-50 dark:bg-slate-800 w-fit rounded-2xl group-hover:scale-110 transition-transform ${iconColors[idx]}`}>
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Pricing Section */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">{t('services_page.pricing_title')}</h2>

            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-blue-600' : 'text-slate-400'}`}>{t('services_page.toggle_monthly')}</span>
              <button
                onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-8 bg-slate-200 dark:bg-slate-800 rounded-full p-1 transition-colors relative"
              >
                <motion.div
                  animate={{ x: billingCycle === 'monthly' ? 0 : 24 }}
                  className="w-6 h-6 bg-blue-600 rounded-full shadow-md"
                />
              </button>
              <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-blue-600' : 'text-slate-400'}`}>
                {t('services_page.toggle_yearly')} <span className="ml-1 text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 px-2 py-0.5 rounded-full">{t('services_page.save_badge')}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingList.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${plan.highlight
                  ? 'bg-slate-900 dark:bg-blue-600 border-transparent shadow-2xl scale-105 z-10'
                  : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                    {t('services_page.popular_badge')}
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-5xl font-black ${plan.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.name === "Premium" ? plan.price : (billingCycle === 'monthly' ? plan.price_monthly : plan.price_yearly)}
                  </span>
                  {plan.name !== 'Premium' && (
                    <span className={plan.highlight ? 'text-blue-100' : 'text-slate-500'}>{t('services_page.per_month')}</span>
                  )}
                </div>
                <p className={`text-sm mb-8 ${plan.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <Check size={18} className={plan.highlight ? 'text-blue-200' : 'text-blue-500'} />
                      <span className={`text-sm font-medium ${plan.highlight ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight
                  ? 'bg-white text-blue-600 hover:scale-[1.02]'
                  : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800'
                  }`}>
                  {t('services_page.btn_choose')} {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact/CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8" dangerouslySetInnerHTML={{ __html: t('services_page.cta_title') }} />
            <p className="text-blue-100 mb-10 max-w-xl mx-auto opacity-80">
              {t('services_page.cta_desc')}
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:gap-5 transition-all shadow-lg hover:shadow-white/20 active:scale-95"
            >
              {t('services_page.cta_btn')}
              <ArrowRight className="transition-all" />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </div>
      </section>

    </div>
  );
};

export default Services;