import { Link, NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use resolved theme (no mounted needed)
  const currentTheme = resolvedTheme || theme;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium transition ${
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "bg-white/80 dark:bg-black/70 backdrop-blur shadow"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Growthify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkStyle}>
              {link.name}
            </NavLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(currentTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-lg border dark:border-gray-700 hover:scale-105 transition"
          >
            {currentTheme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* CTA */}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white dark:bg-black">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkStyle}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Theme Toggle Mobile */}
          <button
            onClick={() =>
              setTheme(currentTheme === "dark" ? "light" : "dark")
            }
            className="flex items-center gap-2"
          >
            {currentTheme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
            Toggle Theme
          </button>

          {/* CTA Mobile */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-blue-600 text-white py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;