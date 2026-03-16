"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-6 ${centered ? "text-center flex flex-col items-center" : "text-left"}`}>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-3"
      />
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-2 tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 text-sm md:text-base font-medium max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
