import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaGem, FaHeart } from "react-icons/fa";

const portfolioItems = [
  {
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Elegant Wedding",
    description: "Romantic ceremony design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Corporate Gala",
    description: "Professional event styling",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Birthday Celebration",
    description: "Festive balloon styling",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Intimate Dinner",
    description: "Luxury table design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Garden Party",
    description: "Outdoor event design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Baby Shower",
    description: "Pastel balloon artistry",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-[#f6ead0] dark:bg-[#47360e] px-4 relative overflow-hidden">
      {/* Animated Gradient Background Shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-yellow-200 via-yellow-400 to-yellow-600 blur-3xl z-0"
      />
      {/* Subtle Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-100/60 via-transparent to-yellow-200/90 dark:from-yellow-900/20 dark:to-yellow-700/30 z-0" />


      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-100/60 via-transparent to-yellow-200/90 dark:from-yellow-900/20 dark:to-yellow-700/30 z-0" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#392013] dark:text-gray-200 font-serif mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-700 dark:text-yellow-100 max-w-2xl mx-auto">
            Explore our collection of beautifully crafted events and celebrations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg group border-2 border-yellow-100 hover:border-yellow-400 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <FaGem className="text-yellow-400 text-2xl animate-pulse mb-2" />
                <div className="text-center text-white px-4">
                  <h3 className="text-xl font-bold font-serif mb-2 flex items-center justify-center gap-2">
                    <FaStar className="text-yellow-300 animate-bounce" /> {item.title}
                  </h3>
                  <p className="text-sm flex items-center justify-center gap-1">
                    {item.description} <FaHeart className="text-pink-400 animate-bounce" />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
