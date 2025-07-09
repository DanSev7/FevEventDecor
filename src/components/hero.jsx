import React from 'react';
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
        }}
      />

      {/* Darker Yellow Shaded Overlay */}
      <div className="absolute inset-0 bg-yellow-900/60 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto p-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          GET THE DREAM EXPERIENCE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-300 mb-4"
        >
          LUXURY DECORS 💌
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-white mb-8"
        >
          Event Planner & Design · Event Rentals and Balloon Decor & more!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("services")}
            className="cursor-pointer bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300 shadow-lg"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer border border-yellow-400 text-yellow-100 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300"
          >
            Book Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
