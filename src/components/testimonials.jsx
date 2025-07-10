import React from "react";
import { motion } from "framer-motion";
// import { Star } from "lucide-react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah & Michael",
    role: "Wedding Clients",
    initials: "SM",
    text: "Fev Event Decor transformed our wedding into a fairy tale. Every detail was perfect, and the team was incredibly professional. Our guests are still talking about how beautiful everything was!",
  },
  {
    name: "Jessica Davis",
    role: "Corporate Client",
    initials: "JD",
    text: "Amazing work on our corporate gala! The balloon arrangements were stunning and the overall design exceeded our expectations. Professional service from start to finish.",
  },
  {
    name: "Robert Martinez",
    role: "Birthday Party Client",
    initials: "RM",
    text: "Fev made our daughter's birthday party absolutely magical. The attention to detail and creative balloon designs made it a day we'll never forget. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-[#181a1b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#392013] dark:text-gray-200 font-serif mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-yellow-900 dark:text-yellow-100 max-w-2xl mx-auto">
            Read testimonials from our satisfied clients who trusted us with their special moments.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 bg-white dark:bg-[#2e2e2e] shadow-md"
            >
              <div className="flex items-center mb-4 text-yellow-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="animate-pulse" size={18} />
                ))}
              </div>
              <p className="text-yellow-900 dark:text-yellow-100 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-sm">
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-yellow-800 dark:text-yellow-100">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    {testimonial.role}
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
