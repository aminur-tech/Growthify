import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe, Mail, ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    {
      id: "collection",
      icon: <Eye size={20} />,
      title: "Data Collection",
      summary: "We only collect what we need to make the app work. No hidden tracking.",
      content: "We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This includes your name, email address, and any other information you choose to provide."
    },
    {
      id: "usage",
      icon: <Lock size={20} />,
      title: "How We Use Data",
      summary: "Your data is used to personalize your experience, not to sell to advertisers.",
      content: "We use the information we collect to provide, maintain, and improve our services. We also use it to send you technical notices, updates, security alerts, and support messages."
    },
    {
      id: "sharing",
      icon: <Globe size={20} />,
      title: "Third-Party Sharing",
      summary: "We never sell your data. We only share it with essential service providers like Stripe.",
      content: "We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf."
    },
    {
      id: "contact",
      icon: <Mail size={20} />,
      title: "Contact Us",
      summary: "Have questions? Our privacy team usually responds within 24 hours.",
      content: "If you have any questions about this Privacy Policy, please contact us at privacy@yourbrand.com. We are committed to resolving any complaints about our collection or use of your personal data."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Hero Section */}
        <header className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-600 font-bold mb-6"
          >
            <Shield size={24} strokeWidth={2.5} />
            <span className="uppercase tracking-[0.2em] text-xs font-black">Trust & Safety</span>
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
            Privacy <span className="text-blue-600">Policy.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            Last updated: <span className="text-slate-900 dark:text-white font-bold">April 08, 2026</span>. 
            We value your trust more than your data. Here is exactly how we handle your information.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* 2. Sticky Navigation Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32">
              <div className="h-1 w-12 bg-blue-600 mb-8 rounded-full" />
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={`group flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                      activeSection === section.id 
                        ? 'bg-blue-600/10 text-blue-600' 
                        : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {React.cloneElement(section.icon, { size: 18 })}
                      {section.title}
                    </span>
                    <ChevronRight size={14} className={`transition-transform ${activeSection === section.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                  </a>
                ))}
              </nav>
              
              <div className="mt-12 p-6 bg-slate-900 dark:bg-blue-600 rounded-[2rem] text-white">
                <p className="text-xs font-black uppercase tracking-widest opacity-70 mb-2">Need a PDF?</p>
                <p className="text-sm font-medium mb-4">Download the full legal documentation for your records.</p>
                <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-black text-xs hover:scale-[1.02] transition-transform">
                  Download PDF
                </button>
              </div>
            </div>
          </aside>

          {/* 3. Main Content Content */}
          <main className="flex-grow">
            <div className="max-w-2xl space-y-24">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-blue-600 shadow-sm">
                      {section.icon}
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  {/* Summary Box */}
                  <div className="relative p-8 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-[2.5rem] mb-8 overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Shield size={80} />
                    </div>
                    <p className="relative text-blue-700 dark:text-blue-400 font-bold text-lg leading-relaxed italic">
                      "{section.summary}"
                    </p>
                  </div>

                  {/* Body Text */}
                  <div className="prose prose-slate dark:prose-invert max-w-none prose-p:text-slate-500 dark:prose-p:text-slate-400 prose-p:leading-extra-loose prose-p:text-lg">
                    <p>{section.content}</p>
                    <p>
                      In addition to the above, we implement industry-standard encryption (AES-256) 
                      to ensure that your data remains private during transit and while at rest in our databases.
                    </p>
                  </div>
                </section>
              ))}
            </div>

            {/* Footer Note */}
            <footer className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
              <p className="text-slate-400 text-sm italic">
                By using our platform, you acknowledge that you have read and understood this Privacy Policy. 
                We reserve the right to modify this policy at any time.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;