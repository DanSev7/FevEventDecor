import React from "react";
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter, FaStar, FaHeart, FaGem, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomSelect from "./ui/CustomSelect";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  eventType: z.string().min(1, "Please select an event type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Thank you for your message! We will get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#f6ead0] dark:bg-[#47360e] px-4 relative overflow-hidden">

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-2xl lg:text-5xl md:text-2xl sm:text-xl font-bold text-[#392013] dark:text-gray-200 mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-amber-900 dark:text-yellow-100 max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us today to discuss your 
          </p>
          <p className="text-lg text-amber-900 dark:text-yellow-100 max-w-2xl mx-auto">upcoming event.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg dark:bg-[#181a1b]"
          >
            <h3 className="font-playfair text-2xl font-bold text-amber-900 dark:text-gray-200 mb-6">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
              <div>
                <label className="block text-warm-brown dark:text-gray-400 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full rounded-md border border-gray-300 px-3 dark:text-gray-400 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-warm-brown dark:text-gray-400 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full rounded-md border border-gray-300 px-3 dark:text-gray-400 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-warm-brown dark:text-gray-400 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full rounded-md border border-gray-300 px-3 dark:text-gray-400 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <CustomSelect
                label="Event Type"
                name="eventType"
                value={watch("eventType")}
                onChange={(e) => setValue("eventType", e.target.value)}
                options={[
                  { label: "Wedding", value: "wedding" },
                  { label: "Corporate Event", value: "corporate" },
                  { label: "Birthday Party", value: "birthday" },
                  { label: "Baby Shower", value: "babyshower" },
                  { label: "Anniversary", value: "anniversary" },
                  { label: "Other", value: "other" },
                ]}
              />
              {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType.message}</p>}

              <div>
                <label className="block text-warm-brown dark:text-gray-400 font-medium mb-1">Message</label>
                <textarea
                  {...register("message")}
                  placeholder="Tell us about your event vision..."
                  className="w-full min-h-[100px] rounded-md border border-gray-300 px-3 dark:text-gray-400 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-700 hover:to-yellow-500 text-white font-semibold transition duration-300 py-3 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg dark:bg-[#181a1b]">
              <h3 className="font-playfair text-2xl font-bold text-rich-brown dark:text-gray-200 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-sm animate-bounce">
                    <FaPhoneAlt className="text-white font-bold" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-rich-brown dark:text-gray-200">Phone</p>
                    <p className="text-warm-brown dark:text-gray-200">(202) 555-0173</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-sm animate-pulse">
                    <FaEnvelope className="text-white font-bold" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-rich-brown dark:text-gray-200">Email</p>
                    <p className="text-warm-brown dark:text-gray-200">hello@feveventdecor.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-sm animate-bounce">
                    <FaMapMarkerAlt className="text-white font-bold" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-rich-brown dark:text-gray-200">Location</p>
                    <p className="text-warm-brown dark:text-gray-200">Washington D.C.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg  dark:bg-[#181a1b]">
              <h3 className="font-playfair text-2xl font-bold text-rich-brown dark:text-gray-200 mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/fev_eventdecor" className="w-12 h-12 bg-yellow-500 hover:bg-yellow-800 rounded-full flex items-center justify-center hover:bg-warm-brown transition-colors">
                  <FaInstagram className="text-yellow-50" size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-yellow-500 hover:bg-yellow-800 rounded-full flex items-center justify-center hover:bg-warm-brown transition-colors">
                  <FaFacebook className="text-yellow-50" size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-yellow-500 hover:bg-yellow-800 rounded-full flex items-center justify-center hover:bg-warm-brown transition-colors">
                  <FaPinterest className="text-yellow-50" size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-yellow-500 hover:bg-yellow-800 rounded-full flex items-center justify-center hover:bg-warm-brown transition-colors">
                  <FaTwitter className="text-yellow-50" size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
