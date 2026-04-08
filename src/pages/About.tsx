import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Award, TrendingUp, Zap, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const statsRef = useRef(null);
  const heroRef = useRef(null);
  const pillarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance Timeline
      const tl = gsap.timeline();
      tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, x: -50, stagger: 0.2, duration: 0.8 }, "-=0.4")
        .from(".hero-p", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
        .from(".hero-image", { opacity: 0, scale: 0.9, rotate: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.8");

      // 2. Stats Count-Up & Stagger
      const stats = gsap.utils.toArray('.stat-item');
      gsap.fromTo(stats, 
        { opacity: 0, scale: 0.8, y: 50 },
        { 
          opacity: 1, scale: 1, y: 0,
          duration: 0.8, 
          stagger: 0.15,
          ease: "elastic.out(1, 0.75)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          }
        }
      );

      // 3. Strategy Pillars Reveal
      gsap.from(".pillar-card", {
        scrollTrigger: {
          trigger: pillarRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out"
      });
    }, [heroRef]);

    return () => ctx.revert(); // Cleanup
  }, []);

  const stats = [
    { label: "Active Clients", value: 150, suffix: "+", icon: <Users size={20} /> },
    { label: "Projects Delivered", value: 480, suffix: "+", icon: <Zap size={20} /> },
    { label: "Conversion Lift", value: 45, suffix: "%", icon: <TrendingUp size={20} /> },
    { label: "Awards Won", value: 12, suffix: "", icon: <Award size={20} /> },
  ];

  return (
    <div className=" min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 pt-20 overflow-x-hidden">
      
      {/* 1. Vision & Hero Section */}
      <section ref={heroRef} className="w-full md:w-11/12 mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="hero-badge inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
              Our Vision
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
              Engineering the <br />
              <span className="text-blue-600">Future of Growth.</span>
            </h1>
            <p className="hero-p text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-lg">
              At Growthify, we don't believe in "pretty" websites. We build 
              performance-engineered digital ecosystems that turn visitors into fans.
            </p>
            <div className="hero-p flex items-center gap-6">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 bg-slate-300 dark:bg-slate-800" />
                 ))}
               </div>
               <p className="text-sm font-bold text-slate-500">Trusted by 200+ Developers</p>
            </div>
          </div>

          <div className="hero-image relative">
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative z-10 group">
               <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
               <div className="p-12 h-full flex flex-col justify-end text-white relative z-20">
                  <Target size={48} className="mb-6 animate-bounce" />
                  <h3 className="text-3xl font-bold mb-2">Precision-Driven</h3>
                  <p className="opacity-80">Data doesn't lie. Our code doesn't fail.</p>
               </div>
            </div>
            <div className="absolute inset-0 bg-blue-200 dark:bg-blue-900/20 rounded-[3rem] -rotate-3 -z-10 translate-x-4 translate-y-4" />
          </div>
        </div>
      </section>

      {/* 2. Success Metrics */}
      <section ref={statsRef} className="py-20 w-full md:w-11/12 mx-auto  bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item text-center p-8 bg-white dark:bg-slate-950 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 group hover:border-blue-500 transition-colors">
                <div className="inline-flex p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategy Pillars */}
      <section ref={pillarRef} className="w-full md:w-11/12 mx-auto px-6 py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Our DNA</h2>
          <p className="text-slate-500 leading-relaxed">Three pillars. One goal. Unstoppable momentum for your brand.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Technical Audit", desc: "We find the leaks in your conversion funnel before we build.", icon: <ShieldCheck className="text-emerald-500" /> },
            { title: "MERN Core", desc: "No-compromise speed with MongoDB, Express, React, and Node.", icon: <Zap className="text-blue-500" /> },
            { title: "Growth Loop", desc: "Continuous SEO and performance tuning for long-term dominance.", icon: <TrendingUp className="text-purple-500" /> },
          ].map((item, i) => (
            <div key={i} className="pillar-card group relative p-8 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300">
              <div className="mb-6 w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl shadow-lg shadow-blue-500/5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;