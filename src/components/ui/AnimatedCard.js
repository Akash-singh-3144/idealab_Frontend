"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn"; // Need to create this utility or just use clsx and tailwind-merge

export default function AnimatedCard({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay }}
      className={`glass-card p-4 rounded-2xl ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}
