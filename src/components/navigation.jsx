import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage?.getItem("theme") === "dark" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
          !localStorage?.getItem("theme"))
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage?.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage?.setItem("theme", "light");
    }
  }, [darkMode]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👋" },
    { id: "services", label: "Services", icon: "⭐" },
    { id: "portfolio", label: "Portfolio", icon: "📸" },
    { id: "contact", label: "Contact", icon: "📞" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-yellow-200/50 dark:border-yellow-800/50"
          : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-yellow-100/30 dark:border-yellow-900/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <div className="text-2xl font-serif font-bold text-transparent bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 bg-clip-text transition-all duration-300 group-hover:scale-110">
                <span className="inline-block">Fev</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 absolute bottom-0 left-0"
                />
              </div>
              <div className="text-xs font-sans font-medium text-yellow-600 dark:text-yellow-400 tracking-widest uppercase opacity-80 mt-0.5">
                EVENT DECOR
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="group relative cursor-pointer px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-300 font-medium capitalize rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.button>
            ))}

            {/* Enhanced Dark Mode Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={toggleDarkMode}
              className="relative ml-4 p-3 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-gray-800 dark:to-gray-700 hover:from-yellow-200 hover:to-yellow-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl group"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="text-yellow-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="text-yellow-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative cursor-pointer bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Book Now</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✨
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </motion.div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-yellow-100 dark:bg-gray-800 hover:bg-yellow-200 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer shadow-md"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun-mobile"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="text-yellow-600 w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-mobile"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="text-yellow-600 w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-yellow-100 dark:bg-gray-800 hover:bg-yellow-200 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer shadow-md"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-yellow-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className="text-yellow-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-t border-yellow-200/50 dark:border-yellow-800/50 shadow-2xl"
            role="menu"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="group cursor-pointer flex items-center gap-3 w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-300 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800/50"
                  role="menuitem"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                  <motion.div
                    className="ml-auto w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-6 transition-all duration-300"
                  />
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer flex items-center justify-center gap-2 mt-6 w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                role="menuitem"
              >
                <span>Book Now</span>
                <span className="animate-pulse">✨</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}