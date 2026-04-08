import { motion, type Variants } from 'framer-motion';
import { Rocket, Award, Users, CheckCircle, Quote } from 'lucide-react';

const About = () => {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      
      {/* 1. Hero Section: Vision & Expertise */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/50 dark:from-blue-900/10 to-transparent -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="text-center space-y-6"
          >
            <motion.span variants={fadeInUp} className="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-widest uppercase">
              Our Vision
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tight">
              Engineering the <span className="text-blue-600">Digital Future.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We don't just build software; we craft digital experiences that scale. Our expertise lies at the intersection of high-performance engineering and human-centric design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section: Success Metrics */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { label: "Projects Delivered", value: "250+", icon: <Rocket /> },
              { label: "Client Satisfaction", value: "99%", icon: <CheckCircle /> },
              { label: "Active Users", value: "1.2M", icon: <Users /> },
              { label: "Global Awards", value: "12", icon: <Award /> },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center space-y-2">
                <div className="flex justify-center text-blue-600 mb-2">{stat.icon}</div>
                <h3 className="text-4xl font-black dark:text-white">{stat.value}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium uppercase text-xs tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Strategy & Awards */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-blue-600 rounded-[3rem] rotate-3 absolute inset-0 -z-10 opacity-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="rounded-[3rem] shadow-2xl"
              />
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Driven by Strategy, <br />Proven by Results</h2>
              <div className="space-y-6">
                {[
                  { title: "Innovation First", desc: "We utilize cutting-edge stacks like Next.js and AI integration." },
                  { title: "Scalable Architecture", desc: "Systems built to handle millions of requests without breaking." },
                  { title: "User-Centric Design", desc: "If the user can't use it, it doesn't matter how fast it is." }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex gap-4"
                  >
                    <div className="mt-1 bg-blue-600 rounded-full p-1 h-fit">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials (Glassmorphism) */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Partners Say</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none relative"
            >
              <Quote className="absolute top-6 right-8 text-blue-600/20" size={40} />
              <p className="text-slate-600 dark:text-slate-300 mb-8 italic">
                "Growthify transformed our workflow entirely. Their engineering team is top-tier and they delivered ahead of schedule."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden" />
                <div className="text-left">
                  <p className="font-bold">Alex Rivera</p>
                  <p className="text-xs text-blue-600 font-bold uppercase">CEO, TechFlow</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;