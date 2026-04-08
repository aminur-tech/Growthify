import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  // 1. Define Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child's animation
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pt-32 pb-20 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animation triggers on scroll
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 1. Contact Info Card */}
          <div className="contact-info space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                Let's Build <br />
                <span className="text-blue-600">Something Big.</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                Have a project in mind? We're ready to help you scale your digital presence with high-performance engineering.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-blue-500" />, label: "Email us", value: "aminur.programme@gmail.com" },
                { icon: <Phone className="text-emerald-500" />, label: "Call us", value: "+880 1327694078" },
                { icon: <MapPin className="text-rose-500" />, label: "Office", value: "Satkhira, Bangladesh" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ x: 10 }} // Subtle interaction on hover
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
                  <FaLinkedin size={20} />
               </motion.button>
               <motion.button 
                 whileHover={{ y: -5 }}
                 whileTap={{ scale: 0.9 }}
                 className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-600 hover:text-blue-400 transition-colors shadow-sm"
               >
                  <FaTwitter size={20} />
               </motion.button>
            </motion.div>
          </div>

          {/* 2. Modern Form */}
          <motion.div 
            variants={formVariants}
            className="contact-form bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden"
          >
            {/* Animated background glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" 
            />
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="input-field space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="input-field space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="input-field space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Service Required</label>
                <select className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white appearance-none">
                  <option>Web Development</option>
                  <option>SEO Optimization</option>
                  <option>UI/UX Design</option>
                  <option>Full Scale Marketing</option>
                </select>
              </div>

              <div className="input-field space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project goals..."
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
              >
                Send Proposal
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