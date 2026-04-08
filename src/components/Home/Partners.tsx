import { motion } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Zap, 
  Shield, 
  Globe,               
} from "lucide-react";
import { FaChrome, FaTwitter, FaFigma, FaSlack} from "react-icons/fa";
import { LuSigma } from "react-icons/lu";


const Partners = () => {
  const logos = [
    { icon: <FaSlack className="w-full h-full" />, name: "Slack" },
    { icon: <LuSigma className="w-full h-full" />, name: "Sigma" },
    { icon: <FaFigma className="w-full h-full" />, name: "Figma" },
    { icon: <FaChrome className="w-full h-full" />, name: "Chrome" },
    { icon: <FaTwitter className="w-full h-full" />, name: "Twitter" },
    { icon: <Cpu className="w-full h-full" />, name: "Intel" },
    { icon: <Layers className="w-full h-full" />, name: "Stack" },
    { icon: <Zap className="w-full h-full" />, name: "Fastly" },
    { icon: <Shield className="w-full h-full" />, name: "Auth0" },
    { icon: <Globe className="w-full h-full" />, name: "Vercel" },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4 mb-12">
        <p className="text-center text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
          Powering the world's most innovative teams
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-linear-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-linear-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center whitespace-nowrap" // Added items-center here
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mx-10 md:mx-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 dark:opacity-40 dark:hover:opacity-100 transition-all duration-500 cursor-pointer group/logo"
            >
              {/* Icon Wrapper with fixed dimensions and centering */}
              <div className="shrink-0 w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover/logo:text-blue-600 dark:group-hover/logo:text-blue-400 transition-colors">
                {logo.icon}
              </div>
              
              <span className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;