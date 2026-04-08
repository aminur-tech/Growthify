import { motion, type Variants} from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  // Variants for staggered entrance
  const containerVariants = {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 py-20 transition-colors duration-500">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.span 
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-8 inline-block border border-blue-100 dark:border-blue-800"
          >
            🚀 Next-Gen Growth Solutions
          </motion.span>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8"
          >
            Scale Your Business <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
              With Data-Driven Logic
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Growthify empowers brands to dominate their niche through expert web 
            development, aggressive SEO strategies, and high-conversion advertising.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 dark:shadow-blue-900/20"
            >
              <Link to="/contact">
                Get a Free Consultation
              </Link>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all backdrop-blur-sm"
            >
              <Link to="/services">
                View Our Services
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Dynamic Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[120px] -z-0" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, -50, 0] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-[120px] -z-0" 
      />
    </section>
  );
};

export default Hero;