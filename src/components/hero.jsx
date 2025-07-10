import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


export default function Hero() {
  const sliderInstanceRef = useRef(null);
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    duration: 1500, // smoother, longer transition
    dragSpeed: 1,
    easing: (t) => t * (2 - t), // easeOutQuad for smoothness
    created(slider) {
      sliderInstanceRef.current = slider;
    },
  });

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.next();
      }
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      <div ref={sliderRef} className="keen-slider absolute inset-0 h-full w-full z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center h-full w-full relative"
          >
            <img
              src={slide.image}
              alt={slide.headline}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ zIndex: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#8b6f47cc]" style={{ zIndex: 2 }} />
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto p-4 flex flex-col items-center justify-center h-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg font-playfair"
              >
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 bg-clip-text text-transparent animate-pulse">
                  {slide.headline}
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-300 mb-4 font-playfair"
              >
                {slide.sub}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-white mb-8 font-inter"
              >
                {slide.desc}
              </motion.p>
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={() => scrollToSection("services")}
                  className="cursor-pointer bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300 shadow-lg animate-pulse hover:animate-none ring-2 ring-yellow-400/50 hover:ring-yellow-600/80 font-inter"
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="cursor-pointer border border-yellow-400 text-yellow-100 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300 font-inter"
                >
                  Book Now
                </button>
              </motion.div> */}
              <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-4xl mx-auto"
        >
          <button
            onClick={() => scrollToSection("services")}
            className="cursor-pointer bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300 shadow-lg w-full sm:w-auto"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer border border-yellow-400 text-yellow-100 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300 w-full sm:w-auto"
          >
            Book Now
          </button>
        </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
