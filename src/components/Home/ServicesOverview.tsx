import { motion} from "framer-motion";
import type { Variants } from "framer-motion";
import { Globe, BarChart3, Megaphone, Calendar, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Custom, high-performance web applications built for speed and conversion.",
    icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    className: "md:col-span-2",
  },
  {
    title: "SEO Mastery",
    desc: "Dominate search results and drive organic traffic.",
    icon: <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Paid Advertising",
    desc: "ROI-focused ad campaigns tailored for your brand.",
    icon: <Megaphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Booking Systems",
    desc: "Seamless automation for appointments and client management.",
    icon: <Calendar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    className: "md:col-span-2",
  },
];


// Type-safe variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="w-full md:w-11/12 mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Our Core Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We merge design with logic to solve complex digital problems.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all ${s.className}`}
            >
              {/* Decorative Background Glow */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />

              {/* Icon */}
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>

              {/* Title & Arrow */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {s.desc}
              </p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-indigo-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;