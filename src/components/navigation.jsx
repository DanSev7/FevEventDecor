import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-serif font-bold text-amber-900">
              Fev
              <span className="text-sm font-sans font-normal text-amber-700 block -mt-1">
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
                className="text-amber-900 hover:text-amber-700 transition duration-200 font-medium capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full font-medium transition duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-900 hover:text-amber-700 focus:outline-none"
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
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-amber-900 hover:text-amber-700 transition duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="block mt-4 w-full bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-full font-medium transition duration-200"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
