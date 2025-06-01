"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is applyForU?",
    answer:
      "applyForU is a seamless platform that helps you submit and track applications easily.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, applying and using our core features is absolutely free. Some advanced features may be premium.",
  },
  {
    question: "How can I track my application?",
    answer:
      "After submission, you’ll get updates via your dashboard. You’ll also receive email notifications.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely! We prioritize your privacy and use secure encryption for all user data.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-16 px-4 md:px-8">

   {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/faqs/faq.avif"
          alt="Background pattern"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Got questions? We’ve got answers. If you still need help, feel free to contact us!
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-5 shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-800"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="ml-2" />
                ) : (
                  <ChevronDown className="ml-2" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  className="mt-3 text-gray-600"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Faq;
