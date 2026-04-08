import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Clock, User, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const containerRef = useRef(null);

  const posts = [
    {
      id: 1,
      title: "Mastering Next.js 15: The Future of Full-Stack Performance",
      excerpt: "Explore how the latest React features and server components are revolutionizing how we build scalable SaaS platforms.",
      author: "Aminur Rahman",
      date: "April 05, 2026",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
      featured: true,
    },
    {
      id: 2,
      title: "SEO Strategies for 2026: Beyond Keywords",
      excerpt: "Deep dive into semantic search, AI-driven content clusters, and Core Web Vitals dominance.",
      author: "Growthify Team",
      date: "April 02, 2026",
      readTime: "5 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 3,
      title: "The Rise of Bento Grids in Modern UI Design",
      excerpt: "Why the world's leading brands are switching to modular, card-based layouts for their landing pages.",
      author: "Design Lead",
      date: "March 28, 2026",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 4,
      title: "Node.js Security Best Practices for Enterprise Apps",
      excerpt: "Protecting your MERN stack application from injection, XSS, and broken authentication.",
      author: "Security Architect",
      date: "March 20, 2026",
      readTime: "12 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      featured: false,
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.from(".blog-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Staggered post reveal
      gsap.from(".post-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pt-28 pb-20">
      
      {/* 1. Header Section */}
      <header className="container mx-auto px-6 mb-16 text-center lg:text-left blog-header">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Latest <span className="text-blue-600">Insights.</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              The latest news, strategy, and technical breakdowns from the forefront of digital growth.
            </p>
          </div>
          <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar">
            {['All', 'Development', 'Design', 'Marketing'].map(cat => (
              <button key={cat} className="px-6 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 2. Blog Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {posts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -8 }}
              className={`post-card group relative flex flex-col bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 ${
                post.featured ? 'lg:col-span-8' : 'lg:col-span-4'
              }`}
            >
              {/* Image Wrapper */}
              <div className={`relative overflow-hidden ${post.featured ? 'h-64 lg:h-96' : 'h-64'}`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-600">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Wrapper */}
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-tighter">
                  <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                </div>
                
                <h2 className={`font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors ${
                  post.featured ? 'text-3xl lg:text-4xl' : 'text-2xl'
                }`}>
                  {post.title}
                </h2>
                
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-400">{post.date}</span>
                  <button className="flex items-center gap-2 font-black text-blue-600 text-sm group/btn">
                    Read Article 
                    <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}

        </div>

        {/* 3. Pagination / Load More */}
        <div className="mt-20 text-center">
           <button className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-black flex items-center gap-3 mx-auto hover:scale-105 transition-all active:scale-95">
             Load More Stories
             <ChevronRight size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default Blog;