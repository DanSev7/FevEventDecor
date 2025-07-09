import React from "react";
import { motion } from "framer-motion";
import { Calendar, Gem, Heart, Armchair } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Event Planning",
    description:
      "Complete event coordination from concept to execution, ensuring every detail is perfect.",
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-600",
  },
  {
    icon: Gem,
    title: "Luxury Decor",
    description:
      "Exquisite decorative elements and designs that transform any space into a luxury venue.",
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-700",
  },
  {
    icon: Heart,
    title: "Balloon Styling",
    description:
      "Creative balloon arrangements and installations that add elegance and fun to your event.",
    bg: "bg-yellow-200",
    iconBg: "bg-yellow-600",
  },
  {
    icon: Armchair,
    title: "Event Rentals",
    description:
      "Premium furniture, linens, and decor rentals to complement your event's aesthetic.",
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-700",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-800 dark:text-yellow-300 mb-4 font-serif">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-yellow-100 max-w-2xl mx-auto">
            We offer comprehensive event services tailored to create unforgettable experiences for every occasion.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.bg} dark:bg-yellow-800 rounded-2xl p-8 text-center shadow hover:shadow-xl transition duration-300`}
            >
              <div
                className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-100 font-serif mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-yellow-50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
