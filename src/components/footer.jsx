import React from "react";
export default function Footer() {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <footer className="bg-[#211109] dark:bg-[#181a1b] text-white dark:text-[#f6ead0] py-12">
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
                <a href="#" className="text-[#f6ead0] hover:text-yellow-500 transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-[#f6ead0] hover:text-yellow-500 transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-[#f6ead0] hover:text-yellow-500 transition-colors">
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
                <a href="#" className="text-[#f6ead0] hover:text-yellow-500 transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
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
                  <i className="fas fa-phone mr-2"></i>
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  hello@feveventdecor.com
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Los Angeles, CA
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
  