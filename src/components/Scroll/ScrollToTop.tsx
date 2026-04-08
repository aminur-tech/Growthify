import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type Lenis from "@studio-freight/lenis"; 

// 1. Extend the Window interface
declare global {
  // Using var here automatically augments both global and window
  var lenis: Lenis | undefined;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 2. Access it safely without 'any'
    const lenis = window.lenis;

    if (lenis) {
      // smooth scroll using Lenis
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3), 
      });
    } else {
      // fallback for standard browser scroll
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;