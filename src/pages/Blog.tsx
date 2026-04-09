import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock, User, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PostTranslation {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

const Blog = () => {
  const { t } = useTranslation();
  // Get localized categories and posts
  const categories = t('blog_page.categories', { returnObjects: true }) as string[];
  const rawPosts = t('blog_page.posts', { returnObjects: true });
  const localizedPosts = Array.isArray(rawPosts) ? (rawPosts as PostTranslation[]) : [];

  // Static assets/data that don't need translation mapping
  const postMetadata = [
    { id: 1, author: "Aminur Rahman", date: "April 05, 2026", image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800", featured: true },
    { id: 2, author: "Growthify Team", date: "April 02, 2026", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", featured: false },
    { id: 3, author: "Design Lead", date: "March 28, 2026", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", featured: false },
    { id: 4, author: "Security Architect", date: "March 20, 2026", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", featured: false },
    { id: 5, author: "Tech Insider", date: "March 15, 2026", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", featured: false },
    { id: 6, author: "Frontend Pro", date: "March 10, 2026", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800", featured: false },
  ];

  // Merge translation data with metadata
  const posts = localizedPosts.map((post, index) => ({
    ...post,
    ...postMetadata[index]
  }));

  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to "All"
  const [visibleCount, setVisibleCount] = useState(3);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const filteredPosts = activeCategory === categories[0] 
    ? posts 
    : posts.filter(post => post.category === activeCategory);
    
  const currentPosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20 px-6 transition-colors duration-500">
      
      <header className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-4">
              {t('blog_page.title')} <span className="text-blue-600">{t('blog_page.title_highlight')}</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">{t('blog_page.subtitle')}</p>
          </div>
          
          <div className="flex gap-2 p-1 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => { setActiveCategory(cat); setVisibleCount(3); }}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div ref={gridRef} className="max-w-7xl mx-auto scroll-mt-32">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {currentPosts.map((post) => (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`group flex flex-col bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  post.featured ? 'lg:col-span-8' : 'lg:col-span-4'
                }`}
              >
                <div className={`relative overflow-hidden ${post.featured ? 'h-64 lg:h-96' : 'h-64'}`}>
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-black text-blue-600 uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-tighter">
                    <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h2 className={`font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors ${post.featured ? 'text-4xl' : 'text-2xl'}`}>
                    {post.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-400">{post.date}</span>
                    <button className="flex items-center gap-2 font-black text-blue-600 text-sm group/btn">
                      {t('blog_page.read_article')} <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 flex justify-center items-center">
          <AnimatePresence mode="wait">
            {visibleCount < filteredPosts.length ? (
              <motion.button
                key="show-more"
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="group px-10 py-4 bg-blue-600 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
              >
                {t('blog_page.btn_more')}
                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </motion.button>
            ) : visibleCount > 3 && (
              <motion.button
                key="show-less"
                onClick={() => setVisibleCount(prev => prev - 3)}
                className="group px-10 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95"
              >
                {t('blog_page.btn_less')}
                <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Blog;