import { motion } from 'framer-motion';
import { RefreshCcw, CheckCircle2, XCircle, Clock, CreditCard, ChevronRight } from 'lucide-react';

const RefundPolicy = () => {
 

  const timeline = [
    { step: "1", title: "Request", desc: "Submit your request via our support portal." },
    { step: "2", title: "Review", desc: "Our team reviews the request within 24 hours." },
    { step: "3", title: "Processing", desc: "Refund is issued to your original payment method." },
    { step: "4", title: "Completion", desc: "Funds appear in your bank (5-10 business days)." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Header Section */}
        <header className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-blue-600 font-bold mb-6"
          >
            <RefreshCcw size={20} className="animate-spin-slow" />
            <span className="uppercase tracking-[0.2em] text-xs font-black">Customer Satisfaction</span>
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
            Refund <span className="text-blue-600">Policy.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            We want you to be 100% happy with Growthify. If things aren't working out, 
            here is our transparent process for getting your money back.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 2. Main Content Card */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Eligibility Grid */}
            <section className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Eligibility</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-emerald-500 font-bold">
                    <CheckCircle2 size={20} />
                    <span>Refundable</span>
                  </div>
                  <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
                    <li className="flex items-start gap-2">• Annual plans cancelled within 14 days</li>
                    <li className="flex items-start gap-2">• Monthly plans cancelled within 48 hours</li>
                    <li className="flex items-start gap-2">• Technical failures on our end</li>
                    <li className="flex items-start gap-2">• Duplicate accidental charges</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-rose-500 font-bold">
                    <XCircle size={20} />
                    <span>Non-Refundable</span>
                  </div>
                  <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
                    <li className="flex items-start gap-2">• Accounts banned for Terms violations</li>
                    <li className="flex items-start gap-2">• Custom enterprise development work</li>
                    <li className="flex items-start gap-2">• Partial months of service usage</li>
                    <li className="flex items-start gap-2">• Requests made after the 14-day window</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline / Process */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 tracking-tight">The Refund Process</h2>
              <div className="relative flex flex-col md:flex-row justify-between gap-8">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative flex-1 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    {idx !== timeline.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-16 w-full h-[2px] bg-slate-200 dark:bg-slate-800 -z-10" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* General Terms */}
            <section className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black">General Conditions</h2>
              <p className="text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                Refunds are processed back to the **original payment method** used during purchase. 
                We cannot issue refunds to a different card or bank account due to anti-money laundering regulations. 
                If your card has expired, your bank will usually reroute the funds automatically.
              </p>
            </section>
          </div>

          {/* 3. Sidebar Action Card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/20">
                <CreditCard size={40} className="mb-6 opacity-80" />
                <h3 className="text-2xl font-black mb-4">Need a Refund?</h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                  The fastest way to resolve billing issues is to speak with our support team directly.
                </p>
                <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors">
                  Contact Billing Support
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-emerald-500">
                    <Clock size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Typical Response</h4>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Our billing specialists are available Mon-Fri and typically respond within **4–6 hours**.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;