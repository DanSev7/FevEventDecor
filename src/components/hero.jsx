import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      headline: "GET THE DREAM EXPERIENCE",
      sub: "LUXURY DECORS",
      desc: "Event Planner & Design · Event Rentals and Balloon Decor & more!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      headline: "ELEGANT CELEBRATIONS",
      sub: "BESPOKE EVENTS",
      desc: "Transforming visions into reality for every occasion.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      headline: "MEMORABLE MOMENTS",
      sub: "EXQUISITE DESIGN",
      desc: "Luxury, style, and flawless execution for your special day.",
    },
  ];

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning, heroSlides.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToSlide = (slideIndex) => {
    if (slideIndex !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(slideIndex);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Slider Container */}
      <div className="absolute inset-0 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].headline}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ zIndex: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" style={{ zIndex: 2 }} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" style={{ zIndex: 3 }} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto p-4 flex flex-col items-center justify-center h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8 rounded-full"></div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl tracking-wide"
              style={{ fontFamily: 'serif' }}
            >
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent filter drop-shadow-lg">
                {heroSlides[currentSlide].headline}
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-light text-yellow-200 mb-6 tracking-widest uppercase"
              style={{ fontFamily: 'sans-serif' }}
            >
              {heroSlides[currentSlide].sub}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-8 mx-auto"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light mx-auto"
            >
              {heroSlides[currentSlide].desc}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mx-auto"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="group relative cursor-pointer bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black px-10 py-4 rounded-full font-semibold text-lg transition-all duration-500 shadow-2xl transform hover:scale-105 hover:shadow-yellow-500/30 w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="group cursor-pointer border-2 border-yellow-400 text-yellow-100 hover:bg-yellow-400 hover:text-black px-10 py-4 rounded-full font-semibold text-lg transition-all duration-500 backdrop-blur-sm bg-white/5 hover:bg-yellow-400 transform hover:scale-105 w-full sm:w-auto relative overflow-hidden"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Slide Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              currentSlide === index
                ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-white/60"
      >
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60 mb-2"></div>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}