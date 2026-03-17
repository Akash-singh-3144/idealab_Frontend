"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { MoveRight, Target, Eye, Cog, Zap, Users, IndianRupee, Handshake, Trophy, Globe, Wrench, Bot, Cpu, CircuitBoard, Glasses, TestTube, PenTool, Mic } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-16 pb-8 min-h-screen relative overflow-hidden bg-slate-50">

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden glass p-1.5 border-white shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all duration-500 group">
               <Image src="/image/idealab.webp" alt="Inside IDEALAB" fill className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-800 mb-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex flex-col items-center justify-center text-blue-600 shadow-sm shrink-0">
                <Cog size={22} className="animate-[spin_4s_linear_infinite]" />
              </div>
              What is IDEALAB?
            </h2>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mb-4">
                The IDEALAB serves as a <span className="text-blue-600 font-bold">24x7 creative hub</span> encouraging students to experiment with core engineering concepts in a hands-on environment. It’s designed to transform the way learning happens—moving from theory to pure practical implementation.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Supported by <span className="text-slate-800 font-bold">AICTE</span>, we provide world-class facilities and tools to faculty and students of all disciplines, enabling them to fabricate prototypes, build IoT solutions, and create market-ready products.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
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

        {/* Why IDEALAB Section */}
        <section className="mb-20">
          <SectionHeading 
            title="Built for Builders"
            subtitle="AICTE Idea Lab is a state-of-the-art innovation hub providing access to tools, mentorship, and a vibrant community to turn ideas into reality."
            centered={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {/* Feature 1 */}
            <AnimatedCard delay={0.1} className="flex items-center gap-4 p-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Zap size={24} />
              </div>
              <h3 className="font-outfit font-bold text-slate-800 text-lg leading-tight group-hover:text-blue-700 transition-colors">World-Class<br/>Equipment</h3>
            </AnimatedCard>
            {/* Feature 2 */}
            <AnimatedCard delay={0.2} className="flex items-center gap-4 p-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <h3 className="font-outfit font-bold text-slate-800 text-lg leading-tight group-hover:text-cyan-700 transition-colors">Expert<br/>Mentorship</h3>
            </AnimatedCard>
            {/* Feature 3 */}
            <AnimatedCard delay={0.3} className="flex items-center gap-4 p-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <IndianRupee size={24} />
              </div>
              <h3 className="font-outfit font-bold text-slate-800 text-lg leading-tight group-hover:text-emerald-700 transition-colors">Funding &<br/>Grants</h3>
            </AnimatedCard>
            {/* Feature 4 */}
            <AnimatedCard delay={0.4} className="flex items-center gap-4 p-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Handshake size={24} />
              </div>
              <h3 className="font-outfit font-bold text-slate-800 text-lg leading-tight group-hover:text-purple-700 transition-colors">Industry<br/>Partnerships</h3>
            </AnimatedCard>
            {/* Feature 5 */}
            <AnimatedCard delay={0.5} className="flex items-center gap-4 p-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Trophy size={24} />
              </div>
              <h3 className="font-outfit font-bold text-slate-800 text-lg leading-tight group-hover:text-orange-700 transition-colors">National<br/>Competitions</h3>
            </AnimatedCard>
            {/* Feature 6 */}
            <AnimatedCard delay={0.6} className="flex items-center gap-4 p-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <h3 className="font-outfit font-bold text-slate-800 text-lg leading-tight group-hover:text-rose-700 transition-colors">Global<br/>Exposure</h3>
            </AnimatedCard>
          </div>
        </section>

        {/* Our Facilities Section */}
        <section className="mb-20">
          <SectionHeading 
            title="8 Specialized Labs"
            subtitle="Eight dedicated innovation zones equipped with the latest technology and tools."
            centered={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {/* Lab 1 */}
            <AnimatedCard delay={0.1} className="flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-5 group">
               <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Wrench size={20} />
               </div>
               <h3 className="font-outfit font-bold text-slate-800 text-lg mb-2">Fabrication Lab</h3>
               <p className="text-slate-500 font-medium text-xs leading-relaxed mt-auto">3D printers, laser cutters, CNC machines & metal casting tools</p>
            </AnimatedCard>
            {/* Lab 2 */}
            <AnimatedCard delay={0.2} className="flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-5 group">
               <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Bot size={20} />
               </div>
               <h3 className="font-outfit font-bold text-slate-800 text-lg mb-2">Robotics Arena</h3>
               <p className="text-slate-500 font-medium text-xs leading-relaxed mt-auto">Industrial robot arms, drone testing space & autonomous vehicle track</p>
            </AnimatedCard>
            {/* Lab 3 */}
            <AnimatedCard delay={0.3} className="flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-5 group">
               <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Cpu size={20} />
               </div>
               <h3 className="font-outfit font-bold text-slate-800 text-lg mb-2">Computing Hub</h3>
               <p className="text-slate-500 font-medium text-xs leading-relaxed mt-auto">High-performance GPU clusters for AIML training & cloud computing</p>
            </AnimatedCard>
            {/* Lab 4 */}
            <AnimatedCard delay={0.4} className="flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-5 group">
               <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <CircuitBoard size={20} />
               </div>
               <h3 className="font-outfit font-bold text-slate-800 text-lg mb-2">Electronics Bay</h3>
               <p className="text-slate-500 font-medium text-xs leading-relaxed mt-auto">Oscilloscopes, PCB fabrication, soldering stations & IoT components</p>
            </AnimatedCard>
            {/* Lab 5 */}
            <AnimatedCard delay={0.5} className="flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-5 group">
               <div className="w-10 h-10 rounded-lg bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Glasses size={20} />
               </div>
               <h3 className="font-outfit font-bold text-slate-800 text-lg mb-2">AR/VR Studio</h3>
               <p className="text-slate-500 font-medium text-xs leading-relaxed mt-auto">Meta Quest, HTC Vive, spatial computing & holographic displays</p>
            </AnimatedCard>
            {/* Lab 6 */}
            <AnimatedCard delay={0.6} className="flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-5 group">
               <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <TestTube size={20} />
               </div>
               <h3 className="font-outfit font-bold text-slate-800 text-lg mb-2">Biotech Lab</h3>
               <p className="text-slate-500 font-medium text-xs leading-relaxed mt-auto">Biomedical research equipment, microscopes & biomaterial testing</p>
            </AnimatedCard>
            {/* Lab 7 */}
            <AnimatedCard delay={0.7} className="flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-5 group">
               <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <PenTool size={20} />
               </div>
               <h3 className="font-outfit font-bold text-slate-800 text-lg mb-2">Design Studio</h3>
               <p className="text-slate-500 font-medium text-xs leading-relaxed mt-auto">Graphic tablets, high-resolution monitors & product design software</p>
            </AnimatedCard>
            {/* Lab 8 */}
            <AnimatedCard delay={0.8} className="flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-5 group">
               <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Mic size={20} />
               </div>
               <h3 className="font-outfit font-bold text-slate-800 text-lg mb-2">Presentation Hall</h3>
               <p className="text-slate-500 font-medium text-xs leading-relaxed mt-auto">Pitch arena, investor demo days & collaborative whiteboard space</p>
            </AnimatedCard>
          </div>
        </section>
        
      </div>

      {/* Faculties Section */}
      <FacultySection />
      
    </div>
  );
}
