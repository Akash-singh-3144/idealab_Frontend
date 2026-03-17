"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { User, CalendarDays, ChevronDown, ChevronUp } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of 3D Printing in Education",
    desc: "How rapid prototyping is transforming the way engineering students approach physical design and iterative development in hardware-focused curriculums. From complex geometries to rapid design adjustments, the ability to physically manifest an idea in hours rather than weeks fundamentally shifts the educational paradigm. This allows for a deeper understanding of material sciences, structural integrity, and the very nature of iterative trial-and-error learning.",
    image: "3dPrinter.webp",
    author: "Dr. S. K. Soni",
    date: "Oct 12, 2023",
    category: "Prototyping"
  },
  {
    id: 2,
    title: "Building IoT Solutions for Smart Campuses",
    desc: "A deep dive into the recent workshop held at IDEALAB focusing on LoRaWAN and embedded sensors for campus automation and energy efficiency. Students learned how to deploy low-power, wide-area networks across multiple buildings to track metrics like ambient temperature, occupancy, and power consumption. The resulting dashboards provided actionable insights that immediately reduced the university's lighting costs by optimizing automated schedules based on real-time room usage.",
    image: "idea1.webp",
    author: "Rahul Kumar",
    date: "Nov 05, 2023",
    category: "IoT"
  },
  {
    id: 3,
    title: "Advanced PCB Design Guidelines",
    desc: "Best practices for routing multi-layer boards to ensure signal integrity and manufacturability using our in-house, high-precision milling machines. Understanding trace impedance, cross-talk reduction, and proper grounding planes are essential for high-frequency electronics. This guide walks through the physical layout constraints required to move a project from a messy breadboard prototype to a professional, interference-resistant printed circuit board.",
    image: "pcbBoard.png",
    author: "Priya Singh",
    date: "Dec 02, 2023",
    category: "Electronics"
  },
  {
    id: 4,
    title: "Intro to Drone Testing & Aerial Robotics",
    desc: "Learn how students are utilizing the Robotics Arena to test custom flight controllers, AI navigation models, and lightweight drone frames. We explore the kinematics of quadcopter flight, PID tuning for stable hovering, and the integration of optical flow sensors for GPS-denied indoor environments. The article features a breakdown of a student-built delivery drone designed to traverse complex campus corridors autonomously.",
    image: "idealab.webp",
    author: "Amit Patel",
    date: "Jan 15, 2024",
    category: "Robotics"
  },
  {
    id: 5,
    title: "Leveraging GPU Clusters for AIML",
    desc: "An overview of how our new computing hub is accelerating deep learning workflows for computer vision and large language model fine-tuning. By utilizing tensor cores properly, research teams have slashed training times for object detection models from days to mere hours. We share tips on optimizing dataset loading with PyTorch and using distributed data parallel (DDP) setups across multiple nodes for maximum efficiency.",
    image: "idea1.webp",
    author: "Dr. Neha Verma",
    date: "Feb 10, 2024",
    category: "AI / ML"
  },
  {
    id: 6,
    title: "Design Thinking: From Empathy to Prototype",
    desc: "A reflection on the 48-hour design thinking bootcamp where cross-disciplinary teams solved real-world agricultural problems mapping user journeys. Participants interviewed local farmers to understand pain points in crop monitoring, utilizing empathy maps to frame the problem. The weekend culminated in low-fidelity physical prototypes focused on affordable soil moisture sensors, demonstrating the power of human-centered design before writing a single line of code.",
    image: "3dPrinter.webp",
    author: "Siddharth Rao",
    date: "Feb 28, 2024",
    category: "Design"
  },
  {
    id: 7,
    title: "Spatial Computing in Modern Architecture",
    desc: "How students in the AR/VR studio are building immersive holographic models to present sustainable architecture concepts to investors. By building interactive digital twins of proposed structures, architects can walk stakeholders through a virtual building, tweaking sunlight exposure and material choices in real-time. This article details the Unity3D pipeline used to port CAD models into a standalone VR headset experience.",
    image: "pcbBoard.png",
    author: "Kavya Menon",
    date: "Mar 10, 2024",
    category: "AR / VR"
  },
  {
    id: 8,
    title: "Biotech Innovations: Affordable Diagnostics",
    desc: "Exploring the winning project from our recent HealthTech Hackathon—a low-cost paper-based diagnostic tool developed in the Biotech Lab. The team engineered a microfluidic device capable of performing rapid colorimetric assays for detecting waterborne pathogens. Using only readily available filter paper and highly specific chemical reagents printed via a modified desktop printer, this solution offers a scalable approach to rural healthcare testing.",
    image: "idealab.webp",
    author: "Rohit Sharma",
    date: "Apr 05, 2024",
    category: "Biotechnology"
  },
  {
    id: 9,
    title: "Mastering CNC Machining",
    desc: "A beginner's guide to using subtractive manufacturing tools safely and effectively for creating highly durable custom mechanical parts. We cover the basics of G-code, choosing the right end mills for aluminum vs. plastics, and securing your workpiece correctly to avoid chatter. Understanding feeds and speeds is crucial, and this tutorial provides a cheat sheet to prevent broken tools and ruined stock material during your first independent milling operation.",
    image: "idea1.webp",
    author: "Vikas Gupta",
    date: "Apr 22, 2024",
    category: "Fabrication"
  },
  {
    id: 10,
    title: "The Art of the Pitch: Securing Grants",
    desc: "Insights from our investor demo day on what makes a compelling pitch deck and how to verbally communicate technical value to non-technical stakeholders. Many brilliant engineers struggle to explain why their invention matters. We break down the 'Hook, Problem, Solution, Traction' framework that helped three teams secure crucial seed funding to move their hardware prototypes out of the lab and into the consumer market.",
    image: "idea1.webp",
    author: "Dr. A. Agarwal",
    date: "May 12, 2024",
    category: "Entrepreneurship"
  }
];

const BlogCard = ({ post, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatedCard delay={index * 0.15} className="p-0 overflow-hidden group flex flex-col h-full bg-white shadow-sm hover:shadow-lg border-slate-200 hover:border-blue-200 rounded-2xl w-full max-w-[340px] mx-auto transition-all duration-300">
      {/* Image Header */}
      <div className="relative h-40 w-full overflow-hidden shrink-0">
        <Image 
          src={`/image/${post.image}`} 
          alt={post.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-md text-[9px] font-bold text-blue-700 rounded-full border border-white shadow-sm uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base md:text-lg font-bold font-outfit text-slate-800 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
          {post.title}
        </h3>
        
        <div className="mb-4 flex-grow relative">
          <p className={`text-slate-600 font-medium text-xs md:text-sm leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {post.desc}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 font-bold text-xs mt-2 flex items-center gap-1 transition-colors"
          >
            {isExpanded ? (
              <>Read Less <ChevronUp size={14} /></>
            ) : (
              <>Read More <ChevronDown size={14} /></>
            )}
          </button>
        </div>
        
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5"><User size={12} className="text-slate-400" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><CalendarDays size={12} className="text-slate-400" /> {post.date}</span>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default function BlogPage() {
  return (
    <div className="pt-16 pb-8 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        <div className="text-center max-w-3xl mx-auto mb-10 pt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-3 shadow-sm"
          >
            Blog
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-3 drop-shadow-sm"
          >
            Insights & <span className="text-gradient">Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Read about the latest technological advancements, student achievements, and deep-dive tutorials from the IDEALAB community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
