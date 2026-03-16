"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { MoveRight, Target, Eye, Cog } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-16 pb-8 min-h-screen relative overflow-hidden bg-slate-50">

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 relative pt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-3 shadow-sm"
          >
            About Us
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-3 drop-shadow-sm"
          >
            Empowering Next-Gen <span className="text-gradient">Innovators</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-medium text-sm md:text-base leading-relaxed"
          >
            AICTE IDEA (Idea Development, Evaluation & Application) LAB at Madan Mohan Malaviya University of Technology, Gorakhpur.
          </motion.p>
        </div>

        {/* Image / Content Split */}
        <div className="flex flex-col lg:flex-row gap-6 items-center mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass p-1.5 border-white shadow-lg">
               <Image src="/image/idealab2.webp" alt="Inside IDEALAB" fill className="object-cover rounded-xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-2xl font-outfit font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Cog className="text-blue-600" size={24} /> What is IDEALAB?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-4">
              The IDEALAB serves as a 24x7 creative hub encouraging students to experiment with core engineering concepts in a hands-on environment. It’s designed to transform the way learning happens—moving from theory to pure practical implementation.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-4">
              Supported by AICTE, we provide world-class facilities and tools to faculty and students of all disciplines, enabling them to fabricate prototypes, build IoT solutions, and create market-ready products.
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <AnimatedCard delay={0.1} className="relative overflow-hidden group p-4">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-blue-600 group-hover:scale-110 transition-transform">
              <Eye size={80} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                <Eye size={20} />
              </div>
              <h3 className="text-lg font-outfit font-bold text-slate-800 mb-2">Our Vision</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                To be a premier hub of innovation that nurtures creativity, practical learning, and cross-disciplinary collaboration, creating engineers who are ready to build solutions for real-world problems.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="relative overflow-hidden group p-4">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-500 group-hover:scale-110 transition-transform">
              <Target size={80} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 mb-4 shadow-sm">
                <Target size={20} />
              </div>
              <h3 className="text-lg font-outfit font-bold text-slate-800 mb-2">Our Mission</h3>
              <ul className="space-y-2 text-slate-600 font-medium text-sm">
                <li className="flex items-start gap-2">
                  <MoveRight className="text-cyan-500 shrink-0 mt-0.5" size={14} /> 
                  <span>Provide 24/7 access to state-of-the-art prototyping tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MoveRight className="text-cyan-500 shrink-0 mt-0.5" size={14} /> 
                  <span>Bridge the gap between theoretical knowledge and practical skills.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MoveRight className="text-cyan-500 shrink-0 mt-0.5" size={14} /> 
                  <span>Organize bootcamps, workshops, and hackathons continuously.</span>
                </li>
              </ul>
            </div>
          </AnimatedCard>
        </div>
        
      </div>
    </div>
  );
}
