import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const footerLinks = [
    {
      title: t('footer.col_company'),
      links: [
        { name: t('footer.links.about'), path: '/about' },
        { name: t('footer.links.services'), path: '/services' },
        { name: t('footer.links.partners'), path: '/partners' },
        { name: t('footer.links.contact'), path: '/contact' },
      ],
    },
    {
      title: t('footer.col_services'),
      links: [
        { name: t('footer.links.web_dev'), path: '/services' },
        { name: t('footer.links.design'), path: '/services' },
        { name: t('footer.links.seo'), path: '/services' },
        { name: t('footer.links.mern'), path: '/services' },
      ],
    },
    {
      title: t('footer.col_resources'),
      links: [
        { name: t('footer.links.privacy'), path: '/privacy-policy' },
        { name: t('footer.links.terms'), path: '/terms' },
        { name: t('footer.links.refund'), path: '/refund-policy' },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-500">
      <div className="w-full md:w-11/12 mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent mb-6">
              Growthify
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/aminur-rahman4078' },
                { Icon: FaGithub, href: 'https://github.com/aminur-tech' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="col-span-2 md:col-span-5 lg:col-span-2 lg:ml-auto w-full max-w-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
              {t('footer.newsletter_title')}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              {t('footer.newsletter_desc')}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative group">
              <input
                type="email"
                placeholder={t('footer.placeholder')}
                required
                className="w-full pl-4 pr-12 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 dark:text-white"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500 dark:text-slate-500 font-medium text-center md:text-left">
            © {currentYear} Growthify Inc. {t('footer.copyright')} <span className="text-blue-600 font-bold">Aminur Rahman</span>.
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{t('footer.status')}</span>
            </div>
            
            <div className="relative">
              <select 
                value={i18n.language}
                onChange={handleLanguageChange}
                className="appearance-none bg-transparent pr-4 text-xs font-bold text-slate-500 dark:text-slate-400 outline-none cursor-pointer border-none focus:ring-0"
              >
                <option value="en">English (US)</option>
                <option value="bn">Bengali</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
                <option value="de">Deutsch</option>
                <option value="sv">Svenska</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;