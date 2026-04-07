import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Growthify didn't just rebuild our site; they fundamentally redesigned our growth trajectory. Our conversion rate increased by 45% in the first quarter alone.",
    name: "Sarah Chen",
    role: "VP of Marketing",
    company: "SvelteDynamics",
  },
  {
    quote: "Their data-driven logic approach is a game-changer. Finally, a team that uses analytics, not guesswork. Our ROAS has never been higher.",
    name: "Marcus Dubois",
    role: "Co-Founder & CEO",
    company: "LinearSolutions",
  },
  {
    quote: "From initial audit to final launch, the process was seamless. The booking system they integrated has cut our scheduling overhead by half.",
    name: "Aisha Patel",
    role: "Operations Director",
    company: "ApexWellness",
  },
  {
    quote: "SEO results that actually move the needle. Within three months, we ranked number one for our primary high-intent keywords. Exceptional service.",
    name: "Ben Carter",
    role: "Growth Manager",
    company: "CipherCrypt",
  },
  {
    quote: "We've worked with several agencies, but Growthify is the first to actually deliver on their promises. Our organic traffic has tripled.",
    name: "Jessica Lee",
    role: "Brand Director",
    company: "Zenith Apparel",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 440; 
  const totalItems = duplicatedTestimonials.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // 1. Auto-play Logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  // 2. Keyboard Logic
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // 3. Infinite Loop Reset
  // If we reach the end or start of our tripled list, jump back to the middle set silently
  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      setTimeout(() => setCurrentIndex(testimonials.length), 500);
    }
    if (currentIndex < testimonials.length) {
      setTimeout(() => setCurrentIndex(testimonials.length * 2 - 1), 500);
    }
  }, [currentIndex]);

  const calculateXOffset = () => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    return -(currentIndex * CARD_WIDTH) + (windowWidth / 2) - (CARD_WIDTH / 2);
  };

  const getAvatarInfo = (name: string) => {
    const colors = ['bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-emerald-500', 'bg-rose-500', 'bg-amber-500'];
    const charCode = name.charCodeAt(0);
    return { initial: name.charAt(0), color: colors[charCode % colors.length] };
  };

  return (
    <section 
      className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6 inline-block border border-blue-100 dark:border-blue-800"
        >
          Success Stories
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="relative group/marquee px-4">
        {/* Manual Controls */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-10 z-30 pointer-events-none">
          <button 
            onClick={handlePrev} 
            className="p-4 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-xl pointer-events-auto opacity-0 group-hover/marquee:opacity-100 transition-all hover:scale-110 active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext} 
            className="p-4 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-xl pointer-events-auto opacity-0 group-hover/marquee:opacity-100 transition-all hover:scale-110 active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Window */}
        <div ref={containerRef} className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 w-32 md:w-72 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-72 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex whitespace-nowrap py-10"
            animate={{ x: calculateXOffset() }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {duplicatedTestimonials.map((t, index) => {
              const avatar = getAvatarInfo(t.name);
              const isActive = currentIndex === index;
              
              return (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-[350px] md:w-[400px] p-8 mx-5 bg-white dark:bg-slate-900 border rounded-[2.5rem] transition-all duration-700 whitespace-normal shadow-sm
                    ${isActive 
                      ? 'border-blue-500 ring-4 ring-blue-500/10 scale-105 opacity-100' 
                      : 'border-slate-100 dark:border-slate-800 opacity-40 scale-90 grayscale-[50%]'}`}
                >
                  <Quote className="w-12 h-12 text-blue-500/10 mb-6" />
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50 dark:border-slate-800">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl rotate-3 ${avatar.color}`}>
                      {avatar.initial}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white leading-none mb-1">{t.name}</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{t.company}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i + testimonials.length)}
            className={`h-2 rounded-full transition-all duration-500 
              ${(currentIndex % testimonials.length) === i 
                ? 'w-10 bg-blue-600' 
                : 'w-2 bg-slate-300 dark:bg-slate-800 hover:bg-slate-400'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;