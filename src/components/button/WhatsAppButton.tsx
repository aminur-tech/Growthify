import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "8801327694078"; // Replace with your actual number
  const message = "Hello Growthify! I'm interested in starting a project.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 left-8 z-[99]">
      {/* Tooltip/Label */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="absolute left-16 top-1/2 -translate-y-1/2 hidden md:block bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 whitespace-nowrap"
      >
        <p className="text-xs font-bold text-slate-600 dark:text-slate-300">Chat with us</p>
      </motion.div>

      {/* Main Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] transition-colors hover:bg-[#20ba5a]"
      >
        {/* Pulsing Ring Effect */}
        <motion.span 
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
        />
        
        <FaWhatsapp size={30} />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;