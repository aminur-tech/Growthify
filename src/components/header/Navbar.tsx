import { Link, NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

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

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium transition duration-300 ${
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "md:top-4 bg-white/80 dark:bg-black/70 backdrop-blur-md shadow-lg md:rounded-full md:max-w-5xl md:mx-auto border border-transparent dark:md:border-gray-800"
          : "bg-transparent py-2"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-blue-600">
          Growthify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkStyle}>
              {link.name}
            </NavLink>
          ))}

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-2" />

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all active:scale-90"
          >
            {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-8 pt-4 space-y-4 bg-white dark:bg-black border-t dark:border-gray-900 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="block text-lg font-semibold text-gray-800 dark:text-gray-200"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className="flex flex-col gap-4 pt-4">
            <button
              onClick={() => {
                setTheme(currentTheme === "dark" ? "light" : "dark");
                setOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-3 border dark:border-gray-800 rounded-xl"
            >
              {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              <span>Switch Theme</span>
            </button>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-blue-600 text-white py-3 rounded-xl font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;