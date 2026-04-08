import { useState } from 'react';
import { motion} from 'framer-motion';
import { FileText, UserCheck, Ban, Scale, AlertCircle, ChevronRight, Download } from 'lucide-react';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("acceptance");

  const sections = [
    {
      id: "acceptance",
      icon: <UserCheck className="text-emerald-500" size={24} />,
      title: "Acceptance of Terms",
      summary: "By clicking 'Sign Up' or using our app, you're agreeing to these rules. It's a legal contract.",
      content: "These Terms of Service ('Terms') constitute a legally binding agreement between you and Growthify Inc. Accessing or using the Service signifies that you have read, understood, and agree to be bound by these Terms and to the collection and use of your information as set forth in our Privacy Policy."
    },
    {
      id: "accounts",
      icon: <FileText className="text-blue-500" size={24} />,
      title: "User Accounts",
      summary: "You are responsible for your password and everything that happens under your account.",
      content: "When you create an account, you must provide accurate info. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. We encourage you to use 'strong' passwords (passwords that use a combination of upper and lower case letters, numbers and symbols)."
    },
    {
      id: "conduct",
      icon: <Ban className="text-rose-500" size={24} />,
      title: "Acceptable Use",
      summary: "Don't hack us, don't scrape our data, and don't be a jerk to other users.",
      content: "You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or disclosing any part of the Service in any medium; (ii) using any automated system, including without limitation 'robots,' 'spiders,' or 'offline readers,' to access the Service; (iii) transmitting spam, chain letters, or other unsolicited email."
    },
    {
      id: "liability",
      icon: <Scale className="text-amber-500" size={24} />,
      title: "Limitation of Liability",
      summary: "We provide the tool 'as is.' If your business loses money using it, we aren't liable for damages.",
      content: "To the maximum extent permitted by applicable law, Growthify shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Pro Header Section */}
        <header className="max-w-4xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 mb-6"
          >
            <AlertCircle size={16} />
            <span className="text-xs font-black uppercase tracking-widest">Legal Agreement</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
            Terms of <span className="text-blue-600">Service.</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400">
            <p className="text-lg">Last updated: <span className="font-bold text-slate-900 dark:text-white">April 08, 2026</span></p>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <button className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
              <Download size={18} /> Download as PDF
            </button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* 2. Sticky Sidebar Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-32 space-y-2">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-[0.2em]">Navigation</p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className={`group flex items-center justify-between py-2 text-sm font-bold transition-all ${
                    activeSection === section.id 
                    ? 'text-blue-600' 
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                  }`}
                >
                  {section.title}
                  <ChevronRight size={14} className={`transition-transform ${activeSection === section.id ? 'translate-x-0' : '-translate-x-4 opacity-0'}`} />
                </a>
              ))}
            </nav>
          </aside>

          {/* 3. Main Legal Content */}
          <main className="flex-grow max-w-3xl">
            {sections.map((section) => (
              <motion.section 
                key={section.id} 
                id={section.id} 
                className="mb-24 scroll-mt-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {section.title}
                  </h2>
                </div>

                {/* The "Plain English" Summary Callout */}
                <div className="group relative p-8 mb-10 bg-slate-50 dark:bg-slate-900/40 rounded-[2rem] border-l-4 border-blue-600 transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none">
                  <span className="block text-[10px] font-black uppercase text-blue-600 mb-2 tracking-widest italic">In Plain English:</span>
                  <p className="text-slate-700 dark:text-slate-300 text-lg font-semibold leading-relaxed">
                    {section.summary}
                  </p>
                </div>

                {/* Standard Legal Body Text */}
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-slate-500 dark:text-slate-400 leading-extra-loose text-lg">
                    {section.content}
                  </p>
                </div>
              </motion.section>
            ))}

            <div className="mt-20 p-10 bg-blue-600 rounded-[3rem] text-center text-white">
              <h3 className="text-3xl font-black mb-4">Questions?</h3>
              <p className="text-blue-100 mb-8 max-w-md mx-auto">
                If you have any questions regarding these terms, our legal team is ready to help.
              </p>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black hover:scale-105 transition-transform active:scale-95">
                Contact Legal Support
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;