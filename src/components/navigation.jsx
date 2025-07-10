import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
          !localStorage.getItem("theme"))
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#181a1b]/80 backdrop-blur-xl shadow-2xl border-b border-yellow-100 dark:border-yellow-900 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-serif font-bold text-yellow-700 dark:text-yellow-400 transition-transform duration-300 hover:scale-110 cursor-pointer">
              <span className="inline-block animate-pulse">Fev</span>
              <span className="text-sm font-sans font-normal text-yellow-600 dark:text-yellow-300 block -mt-1">
                EVENT DECOR
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer text-yellow-800 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200 font-medium capitalize"
              >
                {item}
              </button>
            ))}

            {/* Dark mode toggle button (desktop) */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-full hover:bg-yellow-100 dark:hover:bg-gray-800 transition duration-200 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="text-yellow-600 w-5 h-5" />
              ) : (
                <FiMoon className="text-yellow-600 w-5 h-5" />
              )}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-700 hover:to-yellow-500 text-white px-6 py-2 rounded-full font-medium transition duration-300 shadow-md"
            >
              Book Now
            </button>
          </div>

          {/* Mobile: Dark mode toggle BEFORE menu icon */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-yellow-100 dark:hover:bg-gray-800 transition duration-200 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="text-yellow-600 w-5 h-5" />
              ) : (
                <FiMoon className="text-yellow-600 w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-800 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-400 focus:outline-none cursor-pointer"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/90 dark:bg-[#181a1b] border-t dark:border-gray-800"
          role="menu"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer block w-full text-left px-3 py-2 text-yellow-800 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200 capitalize"
                role="menuitem"
                aria-label={item.charAt(0).toUpperCase() + item.slice(1) + " section"}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer block mt-4 w-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-500 text-white px-4 py-2 rounded-full font-medium transition duration-300 shadow-md"
              role="menuitem"
              aria-label="Book Now"
              style={{ width: 'calc(100% - 24px)' }}
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
