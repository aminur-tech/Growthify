import {  Send } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About Us', 'Careers', 'Partners', 'Contact'],
    Services: ['Web Development', 'UI/UX Design', 'SEO Optimization', 'MERN Stack'],
    Resources: ['Documentation', 'Help Center', 'Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-500">
      <div className="w-full md:w-11/12 mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5  gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent mb-6">
              Growthify
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
              Empowering businesses with high-performance web solutions and data-driven growth strategies. Built for the modern digital era.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin, FaGithub].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="lg:col-span-2 lg:ml-auto w-full max-w-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
              Subscribe to Growth
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Get the latest insights on web tech and SEO delivered to your inbox.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-4 pr-12 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 dark:text-white"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">
            © {currentYear} Growthify Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Systems Operational</span>
            </div>
            <select className="bg-transparent text-xs font-bold text-slate-500 dark:text-slate-400 outline-none cursor-pointer border-none">
              <option>English (US)</option>
              <option>Bengali</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;