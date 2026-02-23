
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled 
        ? "py-3 bg-white/90 dark:bg-black/90 shadow-md backdrop-blur-md" 
        : "py-5 bg-white/70 dark:bg-black/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 hover:scale-105 transition duration-300 group"
        >
          <img
            src="/favicon.svg"
            alt="BinaryBase Logo"
            className="w-7 h-7 transition-transform duration-300 group-hover:rotate-6"
          />

          <span className="text-xl font-semibold tracking-tight">
            <span className="text-black dark:text-white">Binary</span>
            <span className="text-indigo-600 dark:text-indigo-400 ml-1">
              Base
            </span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-black dark:text-white">
          <a href="#services" className="hover:opacity-70 transition">
            Services
          </a>
          <a href="#work" className="hover:opacity-70 transition">
            Work
          </a>
          <a href="#contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4 flex-row-reverse md:flex-row">

          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black dark:text-white text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Binary Toggle */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-16 h-8 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full bg-gray-300 dark:bg-gray-700 transition"></div>

            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-transform duration-300 ${
                darkMode
                  ? "translate-x-0 bg-white text-black"
                  : "translate-x-8 bg-black text-white"
              }`}
            >
              {darkMode ? "1" : "0"}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 pb-6 pt-2 space-y-4 shadow-lg transition-colors">
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block text-black dark:text-white"
          >
            Services
          </a>
          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="block text-black dark:text-white"
          >
           Work
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-black dark:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}