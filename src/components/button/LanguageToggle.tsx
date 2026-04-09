import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Language list matched to your image
  const languages = [
    { code: 'en', label: 'English', country: 'US' },
    { code: 'bn', label: 'বাংলা', country: 'BD' },
    { code: 'es', label: 'Spanish', country: 'ES' },
    { code: 'fr', label: 'Français', country: 'FR' },
    { code: 'ar', label: 'Arabic', country: 'SA' },
    { code: 'sv', label: 'Swedish', country: 'SE' },
    { code: 'de', label: 'German', country: 'DE' },
  ];

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block text-left">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2.5 bg-slate-900 text-white rounded-xl border border-slate-800 hover:border-blue-500 transition-all shadow-lg"
      >
        <span className="text-[10px] font-bold text-slate-500 w-5">{currentLanguage.country}</span>
        <span className="text-sm font-semibold tracking-wide">{currentLanguage.label}</span>
        <ChevronDown size={16} className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-52 bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between w-full px-4 py-3 text-sm transition-all hover:bg-slate-800 group ${
                      i18n.language === lang.code ? 'text-blue-400 bg-blue-500/5' : 'text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-400 w-5">
                        {lang.country}
                      </span>
                      <span className="font-medium">{lang.label}</span>
                    </div>
                    {i18n.language === lang.code && <Check size={14} className="text-blue-400" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;