"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 px-4 md:px-10">

   {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact/contact-2.jpg"
          alt="Background pattern"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <motion.div
        className="relative z-30 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Whether you have a question, suggestion, or just want to say hi — we’d love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-700">
              <Mail className="text-indigo-600" />
              <span>contact@applyforu.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <Phone className="text-indigo-600" />
              <span>+234 900 000 0000</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <MapPin className="text-indigo-600" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-400 transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
