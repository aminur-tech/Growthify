import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.08, // smoother (lower = smoother)
      duration: 1.2,
      smoothWheel: true,
    });

    // Sync GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Create a named function for the ticker so it can be removed properly
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;