"use client"
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

//components
import ApplyForm from "@/components/ApplyForm";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const HomePage: React.FC = () => {

        const [showForm, setShowForm] = useState(false);

  return (
    <main className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          We Apply. You Get Hired.
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We help senior developers land high-paying roles — without lifting a finger.
        </motion.p>
       <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button onClick={() => setShowForm(true)} className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">Apply for Me</button>
  
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Tell Us What You Want", desc: "Share your skills, preferences, and goals." },
            { title: "We Apply for You", desc: "We handle tailored applications to top jobs." },
            { title: "Interview Support", desc: "We help you prepare and negotiate effectively." },
            { title: "Get Hired", desc: "Land your dream job and grow your career." }
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow rounded-xl p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.4 + index * 0.2 }}
            >
              <div className="text-2xl font-bold mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Personalized job search",
            "Confidential handling",
            "Pay only when you land a job",
            "Interview coaching",
            "Industry-specific matching",
            "Dedicated job managers"
          ].map((point, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-xl p-6 shadow text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.3 + index * 0.2 }}
            >
              <p className="text-lg font-medium text-indigo-600">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Let’s Get You Hired — Without the Hassle.
        </motion.h2>
        <motion.div
          className="space-x-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">Apply for Me</button>
          <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition">Talk to Us</button>
        </motion.div>
      </section> */}


 <section className="bg-indigo-600 text-white py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-6"
        >
          Ready to Land That Dream Role?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-lg mb-8"
        >
          Join DevOrbit today and let us manage your job search like pros.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button onClick={() => setShowForm(true)} className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">Apply for Me</button>
          {/* <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition">Talk to Us</button> */}
  
        </motion.div>
      </section>


<ApplyForm showForm={showForm} setShowForm={setShowForm}/>


      {/* Footer */}
      {/* <footer className="bg-gray-100 py-8 px-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} applyForU. All rights reserved.</p>
      </footer> */}
    </main>
  );
};

export default HomePage;
