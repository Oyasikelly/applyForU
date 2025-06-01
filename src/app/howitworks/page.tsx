"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, FileText, Send } from "lucide-react";

const steps = [
  {
    title: "Create an Account",
    description: "Sign up with your email to get started. It’s quick and secure.",
    icon: <BadgeCheck className="text-indigo-500" size={30} />,
  },
  {
    title: "Fill Your Application",
    description: "Complete your application form with accurate and necessary information.",
    icon: <FileText className="text-indigo-500" size={30} />,
  },
  {
    title: "Submit & Track",
    description: "Submit your application and track your status in real-time.",
    icon: <Send className="text-indigo-500" size={30} />,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className="relative bg-white py-16 px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/how-it-works/how-it-works.jpg" // 👈 Replace with your actual path
          alt="Background pattern"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          How It Works
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Follow these simple steps to apply effortlessly through applyForU.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-80 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
