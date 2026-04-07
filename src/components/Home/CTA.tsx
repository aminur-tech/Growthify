import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3rem] bg-blue-600 px-8 py-16 md:px-16 md:py-24 text-center shadow-2xl shadow-blue-500/20"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/30 text-blue-50 border border-blue-400/30 mb-8 backdrop-blur-sm"
            >
              <Sparkles size={16} />
              <span className="text-sm font-bold tracking-wide uppercase">Ready to scale?</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
              Transform your digital <br /> 
              <span className="text-blue-200">presence today.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed opacity-90">
              Join 200+ companies growing their revenue with our data-driven 
              MERN solutions and specialized SEO strategies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-50 transition-all"
              >
                Get a Free Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <button className="px-10 py-5 bg-transparent text-white border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                View Pricing
              </button>
            </div>

            <p className="mt-8 text-blue-200/60 text-sm font-medium">
              No credit card required • 15-minute discovery call
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;