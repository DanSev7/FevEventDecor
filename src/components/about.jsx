import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaGem, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    // <section id="about" className="py-16 lg:py-24 bg-champagne">
    <section id="about" className="py-16 lg:py-24 bg-[#f6ead0] dark:bg-[#47360e] px-4 relative overflow-hidden">
      {/* Animated Gradient Background Shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-yellow-200 via-yellow-400 to-yellow-600 blur-3xl z-0"
      />
      {/* Subtle Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-100/60 via-transparent to-yellow-200/90 dark:from-yellow-900/20 dark:to-yellow-700/30 z-0" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#392013] dark:text-gray-100 mb-6 flex items-center gap-4">
              <motion.span
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.2 }}
                className="inline-flex items-center justify-center text-yellow-500 bg-white dark:bg-yellow-900 rounded-full shadow-lg p-2 mr-2 animate-pulse"
              >
                <FaGem size={28} />
              </motion.span>
              Our Story
              <motion.span
                initial={{ scale: 0, rotate: 30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.4 }}
                className="inline-flex items-center justify-center text-yellow-600 bg-white dark:bg-yellow-900 rounded-full shadow-lg p-2 ml-2 animate-pulse"
              >
                <FaStar size={24} />
              </motion.span>
            </h2>
            <p className="text-lg text-yellow-900 dark:text-yellow-100 mb-6 leading-relaxed text-justify">
              At Fev Event Decor, we believe every celebration deserves to be
              extraordinary. With over a decade of experience in luxury event
              planning and design, we transform your vision into breathtaking
              reality.
            </p>
            <p className="text-lg text-yellow-900 dark:text-yellow-100 mb-6 leading-relaxed text-justify">
              Our passionate team specializes in creating bespoke experiences
              that reflect your unique style and story. From intimate gatherings
              to grand celebrations, we handle every detail with precision and
              artistry.
            </p>
            <p className="text-lg text-yellow-900 dark:text-yellow-100 leading-relaxed text-justify">
              We're not just event planners – we're dream architects, crafting
              memories that last a lifetime through impeccable design and
              flawless execution.
            </p>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Elegant wedding reception with floral arrangements"
                className="rounded-2xl shadow-2xl w-full h-auto border-4 border-yellow-300 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl border-4 border-yellow-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-5 -right-4 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 p-4 rounded-2xl shadow-xl animate-bounce">
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-serif animate-pulse">
                  <span id="years-exp">2+</span>
                </div>
                <div className="text-sm text-white font-medium">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
