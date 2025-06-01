"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const footerItems = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/howitworks" },
  // { name: "Pricing", href: "#pricing" },
  // { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative z-10 bg-white text-white py-10 px-6 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Logo Section */}
       <motion.h1
                 className="text-2xl font-extrabold text-indigo-600 tracking-tight"
                 style={{ fontFamily: "'Pacifico', cursive" }}
                 initial={{ scale: 0.9 }}
                 animate={{ scale: 1 }}
               >
                 applyForU
               </motion.h1>

        {/* Nav Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center md:space-x-10 space-y-2 md:space-y-0 text-sm text-black "
        >
          {footerItems.map((footerItem) => (
            <a
              key={footerItem.name}
              href={footerItem.href}
              className="hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {footerItem.name}
            </a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center md:justify-end space-x-4 text-gray-300"
        >
          {[{ icon: Facebook, link: "https://facebook.com" },
            { icon: Twitter, link: "https://twitter.com" },
            { icon: Linkedin, link: "https://linkedin.com" },
            { icon: Mail, link: "mailto:info@applyforu.com" }].map(({ icon: Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transform hover:scale-110 transition duration-300 ease-in-out"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-xs text-gray-500 mt-8"
      >
        &copy; {new Date().getFullYear()} applyForU. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
