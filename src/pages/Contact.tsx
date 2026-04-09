import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next"; // 1. Import

const Contact = () => {
  const { t } = useTranslation(); // 2. Initialize

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contact.toast_success')); // 3. Translated Toast
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pt-32 pb-20 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="contact-info space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                {t('contact.title_line1')} <br />
                <span className="text-blue-600">{t('contact.title_highlight')}</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                {t('contact.description')}
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-blue-500" />, label: t('contact.label_email'), value: "aminur.programme@gmail.com" },
                { icon: <Phone className="text-emerald-500" />, label: t('contact.label_call'), value: "+880 1327694078" },
                { icon: <MapPin className="text-rose-500" />, label: t('contact.label_office'), value: t('contact.office_value') }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="font-bold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="flex gap-4">
               <motion.button 
                 whileHover={{ y: -5 }}
                 whileTap={{ scale: 0.9 }}
                 className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-600 hover:text-blue-600 transition-colors shadow-sm"
               >
                <Link to="https://www.linkedin.com/in/aminur-rahman4078" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                </Link>
               </motion.button>
              
               <motion.button 
                 whileHover={{ y: -5 }}
                 whileTap={{ scale: 0.9 }}
                 className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-600 hover:text-blue-400 transition-colors shadow-sm"
               >
                <Link to="https://github.com/aminur-tech" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </Link>
               </motion.button>
            </motion.div>
          </div>

          <motion.div 
            variants={formVariants}
            className="contact-form bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" 
            />
            
            <form onSubmit={handleOnSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="input-field space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t('contact.form_name')}</label>
                  <input 
                    type="text" 
                    required
                    placeholder={t('contact.placeholder_name')}
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="input-field space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t('contact.form_email')}</label>
                  <input 
                    type="email" 
                    required
                    placeholder={t('contact.placeholder_email')}
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="input-field space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t('contact.form_service')}</label>
                <select className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white appearance-none">
                  <option>{t('contact.service_web')}</option>
                  <option>{t('contact.service_seo')}</option>
                  <option>{t('contact.service_ui')}</option>
                  <option>{t('contact.service_marketing')}</option>
                </select>
              </div>

              <div className="input-field space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t('contact.form_message')}</label>
                <textarea 
                  rows={4}
                  required
                  placeholder={t('contact.placeholder_message')}
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
              >
                {t('contact.btn_send')}
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Contact;