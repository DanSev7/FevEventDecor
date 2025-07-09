import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#f6ead0] dark:bg-[#47360e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-900 dark:text-gray-200 mb-6 font-serif">
              Our Story
            </h2>
            <p className="text-lg text-yellow-900 dark:text-yellow-100 mb-6 leading-relaxed">
              At Fev Event Decor, we believe every celebration deserves to be
              extraordinary. With over a decade of experience in luxury event
              planning and design, we transform your vision into breathtaking
              reality.
            </p>
            <p className="text-lg text-yellow-900 dark:text-yellow-100 mb-6 leading-relaxed">
              Our passionate team specializes in creating bespoke experiences
              that reflect your unique style and story. From intimate gatherings
              to grand celebrations, we handle every detail with precision and
              artistry.
            </p>
            <p className="text-lg text-yellow-900 dark:text-yellow-100 leading-relaxed">
              We're not just event planners – we're dream architects, crafting
              memories that last a lifetime through impeccable design and
              flawless execution.
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Elegant wedding reception with floral arrangements"
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-serif">
                  2+
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
