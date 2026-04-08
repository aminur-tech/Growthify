import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'bn', label: 'বাংলা', flag: '🇧🇩' }
  ];

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  const toggleLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      >
        <Languages size={16} className="text-blue-600" />
        <span className="text-xs font-bold uppercase tracking-wider dark:text-white">
          {currentLanguage.code}
        </span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Invisible backdrop to close menu */}
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-20 overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => toggleLanguage(lang.code)}
                  className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${
                    i18n.language === lang.code ? 'text-blue-600 bg-blue-50/50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span>{lang.flag}</span>
                  {lang.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;