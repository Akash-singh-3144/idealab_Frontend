"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function AnimatedCard({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay }}
    >
      <TiltCard className={`glass-card p-3 rounded-2xl ${className || ""}`}>
        {children}
      </TiltCard>
    </motion.div>
  );
}
