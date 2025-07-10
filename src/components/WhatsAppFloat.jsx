import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "2025550173";
const message = encodeURIComponent("Hello! I'm interested in your services.");

const WhatsAppFloat = () => (
  <a
    href={`https://wa.me/${whatsappNumber}?text=${message}`}
    className="fixed bottom-13 right-8 z-50 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-4 flex items-center justify-center animate-bounce focus:outline-none focus:ring-2 focus:ring-green-300 transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
  >
    <FaWhatsapp size={34} />
  </a>
);

export default WhatsAppFloat;
