import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Check if Lenis is attached to window (from your previous setup)
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic Out easing
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }} // blue-600
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-4 bg-blue-500 text-white rounded-2xl shadow-2xl shadow-blue-500/40 flex items-center justify-center group border border-blue-400/20 backdrop-blur-md"
            aria-label="Scroll to top"
          >
            <ArrowUp 
              size={24} 
              className="group-hover:-translate-y-1 transition-transform duration-300" 
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTopButton;