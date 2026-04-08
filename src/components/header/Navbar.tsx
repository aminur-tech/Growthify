import { Link, NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = resolvedTheme || theme;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center p-0 md:p-4 pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? "90%" : "100%",
          maxWidth: scrolled ? "1100px" : "100%",
          borderRadius: scrolled ? "100px" : "0px",
          marginTop: scrolled ? "10px" : "0px",
        }}
        className={`pointer-events-auto flex flex-col transition-all duration-500 border-b md:border ${
          scrolled
            ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/10"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-3">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-1">
            <img src="/logo.png" alt=""  className="w-12 h-12"/>
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              Growthify
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {link.name}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2" />

            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-slate-700 dark:text-slate-300"
            >
              {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* CTA */}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40 transition-all active:scale-95"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 text-slate-900 dark:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-slate-900 px-6"
            >
              <div className="flex flex-col gap-4 pb-8 pt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                  >
                    <NavLink
                      to={link.path}
                      className="text-2xl font-black text-slate-800 dark:text-slate-200"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <div className="h-px bg-slate-100 dark:border-slate-800 my-2" />
                <button
                  onClick={() => {
                    setTheme(currentTheme === "dark" ? "light" : "dark");
                    setOpen(false);
                  }}
                  className="flex items-center justify-between w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl"
                >
                  <span className="font-bold">Appearance</span>
                  {currentTheme === "dark" ? <Sun /> : <Moon />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;