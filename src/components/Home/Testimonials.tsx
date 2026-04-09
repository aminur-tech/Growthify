import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, useMotionValue, type PanInfo } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  // Fetch translated testimonials
  const testimonials = useMemo(() => {
    const data = t('testimonials_sec.list', { returnObjects: true });
    return Array.isArray(data) ? (data as Testimonial[]) : [];
  }, [t]);

  const duplicatedTestimonials = useMemo(() => 
    [...testimonials, ...testimonials, ...testimonials], 
    [testimonials]
  );

  const [currentIndex, setCurrentIndex] = useState<number>(testimonials.length);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [cardWidth, setCardWidth] = useState<number>(440);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200);
  const dragX = useMotionValue(0);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setCardWidth(width < 768 ? width - 48 : 440);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    if (isTransitioning.current || testimonials.length === 0) return;
    setCurrentIndex((prev) => prev + 1);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioning.current || testimonials.length === 0) return;
    setCurrentIndex((prev) => prev - 1);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [handleNext, isPaused, testimonials.length]);

  useEffect(() => {
    if (testimonials.length === 0) return;
    let timer: number;
    if (currentIndex >= testimonials.length * 2 || currentIndex < testimonials.length) {
      isTransitioning.current = true;
      timer = window.setTimeout(() => {
        isTransitioning.current = false;
        if (currentIndex >= testimonials.length * 2) {
          setCurrentIndex(testimonials.length);
        } else {
          setCurrentIndex(testimonials.length * 2 - 1);
        }
      }, 450);
    }
    return () => clearTimeout(timer);
  }, [currentIndex, testimonials.length]);

  const calculateXOffset = () => {
    if (testimonials.length === 0) return 0;
    const margin = windowWidth < 768 ? 20 : 40;
    const offset = -(currentIndex * (cardWidth + margin)) + (windowWidth / 2) - (cardWidth / 2) - (margin / 2);
    return isRtl ? -offset : offset;
  };

  const onDragEnd = (_e: unknown, info: PanInfo) => {
    if (info.offset.x <= -50) {
      if (isRtl) handlePrev(); else handleNext();
    } else if (info.offset.x >= 50) {
      if (isRtl) handleNext(); else handlePrev();
    }
  };

  return (
    <section 
      className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          {t('testimonials_sec.heading')} <span className="text-blue-600">{t('testimonials_sec.accent')}</span>
        </h2>
      </div>

      <div className="relative group/container">
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-12 z-30 pointer-events-none">
          <button 
            onClick={() => { 
              setIsPaused(true); 
              if (isRtl) handleNext(); else handlePrev(); 
            }}
            className="w-14 h-14 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-900 dark:text-white pointer-events-auto opacity-0 group-hover/container:opacity-100 transition-all hover:bg-blue-600 hover:text-white"
          >
            {isRtl ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
          </button>
          <button 
            onClick={() => { 
              setIsPaused(true); 
              if (isRtl) handlePrev(); else handleNext(); 
            }}
            className="w-14 h-14 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-900 dark:text-white pointer-events-auto opacity-0 group-hover/container:opacity-100 transition-all hover:bg-blue-600 hover:text-white"
          >
            {isRtl ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
          </button>
        </div>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          onDragEnd={onDragEnd}
          animate={{ x: calculateXOffset() }}
          transition={{ type: "spring", stiffness: 160, damping: 22, mass: 0.8 }}
          className="flex cursor-grab active:cursor-grabbing py-10"
        >
          {duplicatedTestimonials.map((t, index) => {
            const isActive = currentIndex === index;
            return (
              <motion.div
                key={index}
                style={{ width: cardWidth }}
                className={`flex-shrink-0 p-8 md:p-12 mx-[10px] md:mx-[20px] bg-white dark:bg-slate-900 border rounded-[3rem] transition-all duration-500 shadow-2xl relative overflow-hidden
                  ${isActive ? 'border-blue-500 opacity-100 scale-100 md:scale-105 z-20' : 'border-slate-100 dark:border-slate-800 opacity-20 scale-[0.85] grayscale z-10'}`}
              >
                {isActive && <div className="absolute top-0 left-0 w-full h-2 bg-blue-600" />}
                <Quote className={`w-12 h-12 mb-6 ${isActive ? 'text-blue-600/20' : 'text-slate-300/20'}`} />
                <p className={`text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 mb-10 leading-relaxed italic ${isRtl ? 'text-right' : 'text-left'}`}>
                  "{t.quote}"
                </p>
                <div className={`flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-2xl transform -rotate-3">
                    {t.name.charAt(0)}
                  </div>
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <p className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-black mt-1">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIsPaused(true); setCurrentIndex(i + testimonials.length); }}
            className="relative py-4 group"
          >
            <div className={`h-1.5 rounded-full transition-all duration-500 bg-slate-300 dark:bg-slate-800 ${((currentIndex % testimonials.length) === i) ? 'w-14 bg-blue-600' : 'w-3'}`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;