import React from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaRegCalendarCheck, FaRegHandshake, FaRegSmileBeam } from "react-icons/fa";

const steps = [
  {
    icon: <FaRegLightbulb className="text-yellow-500 text-3xl mb-2 animate-pulse" />,
    title: "Consultation",
    desc: "We listen to your vision, needs, and inspiration to craft a unique event plan.",
  },
  {
    icon: <FaRegCalendarCheck className="text-yellow-600 text-3xl mb-2 animate-bounce" />,
    title: "Planning",
    desc: "Our experts design, coordinate, and source every detail for your event.",
  },
  {
    icon: <FaRegHandshake className="text-yellow-700 text-3xl mb-2 animate-pulse" />,
    title: "Execution",
    desc: "On the big day, we flawlessly execute the plan, ensuring every moment is perfect.",
  },
  {
    icon: <FaRegSmileBeam className="text-pink-400 text-3xl mb-2 animate-bounce" />,
    title: "Celebrate",
    desc: "You and your guests enjoy a seamless, memorable, and beautiful celebration.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-[#f6ead0] dark:bg-[#47360e] px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair text-[#392013] dark:text-gray-200 mb-10"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#181a1b] rounded-xl shadow-lg p-8 flex flex-col items-center"
            >
              {step.icon}
              <h3 className="font-playfair text-xl font-semibold text-amber-900 dark:text-yellow-100 mb-2">
                {step.title}
              </h3>
              <p className="text-warm-brown dark:text-gray-300 font-inter text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
