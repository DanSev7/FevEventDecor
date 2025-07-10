import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaPinterest, FaTwitter, FaStar, FaHeart, FaGem } from "react-icons/fa";
export default function Footer() {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <footer className="bg-[#211109] dark:bg-[#181a1b] text-white dark:text-[#f6ead0] py-12 relative overflow-hidden">
        {/* Animated Gradient Background Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.13, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute -top-24 -right-24 w-[340px] h-[340px] rounded-full bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-800 blur-3xl z-0"
        />
        {/* Animated Gradient Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 rounded-full origin-left z-10"
        />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="text-2xl font-playfair font-bold mb-4">
                Fev
                <span className="text-sm font-inter font-normal text-[#f6ead0] block -mt-1">
                  EVENT DECOR
                </span>
              </div>
              <p className="text-[#f6ead0] mb-4 max-w-md">
                Creating unforgettable experiences through luxury event planning and design. Let us transform your vision into reality.
              </p>
              <div className="flex space-x-4">
                {/* Enhanced Social Icons */}
                <motion.a
                  href="https://www.instagram.com/fev_eventdecor"
                  whileHover={{ scale: 1.18, rotate: -8 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#f6ead0] hover:text-yellow-500 transition-colors shadow-lg rounded-full p-2 bg-gradient-to-tr from-yellow-700/10 via-yellow-300/10 to-yellow-500/10"
                >
                  <FaInstagram className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.18, rotate: 8 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#f6ead0] hover:text-yellow-500 transition-colors shadow-lg rounded-full p-2 bg-gradient-to-tr from-yellow-700/10 via-yellow-300/10 to-yellow-500/10"
                >
                  <FaFacebook className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.18, rotate: -8 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#f6ead0] hover:text-yellow-500 transition-colors shadow-lg rounded-full p-2 bg-gradient-to-tr from-yellow-700/10 via-yellow-300/10 to-yellow-500/10"
                >
                  <FaPinterest className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.18, rotate: 8 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#f6ead0] hover:text-yellow-500 transition-colors shadow-lg rounded-full p-2 bg-gradient-to-tr from-yellow-700/10 via-yellow-300/10 to-yellow-500/10"
                >
                  <FaTwitter className="text-xl" />
                </motion.a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", id: "home" },
                  { label: "About", id: "about" },
                  { label: "Services", id: "services" },
                  { label: "Portfolio", id: "portfolio" },
                  { label: "Contact", id: "contact" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-[#f6ead0] hover:text-yellow-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-[#f6ead0]">
                <li className="flex items-center">
                  <FaPhone className="mr-2" />
                  (202) 555-0173
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  hello@feveventdecor.com
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Washington D.C.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#e6caa6] mt-8 pt-8 text-center">
            <p className="text-[#f6ead0]">
              © {new Date().getFullYear()} Fev Event Decor. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    );
  }
  