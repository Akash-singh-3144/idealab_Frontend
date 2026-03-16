"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { ArrowRight, User, CalendarDays } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of 3D Printing in Education",
    desc: "How rapid prototyping is transforming the way engineering students approach physical design and iterative development.",
    image: "3dPrinter.webp",
    author: "Dr. S. K. Soni",
    date: "Oct 12, 2023",
    category: "Technology"
  },
  {
    id: 2,
    title: "Building IoT Solutions for Smart Campuses",
    desc: "A deep dive into the recent workshop held at IDEALAB focusing on LoRaWAN and embedded sensors for campus automation.",
    image: "idea1.webp",
    author: "Rahul Kumar",
    date: "Nov 05, 2023",
    category: "IoT"
  },
  {
    id: 3,
    title: "Advanced PCB Design Guidelines",
    desc: "Best practices for routing multi-layer boards to ensure signal integrity and manufacturability using our in-house mill.",
    image: "pcbBoard.png",
    author: "Priya Singh",
    date: "Dec 02, 2023",
    category: "Electronics"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-16 pb-8 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <AnimatedCard key={post.id} delay={index * 0.15} className="p-0 overflow-hidden group flex flex-col h-full bg-white shadow-sm hover:shadow-lg border-slate-200 hover:border-blue-200 rounded-2xl w-full max-w-[340px] mx-auto">
              {/* Image Header */}
              <div className="relative h-40 w-full overflow-hidden">
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
                <h3 className="text-base md:text-lg font-bold font-outfit text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 font-medium text-xs md:text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                  {post.desc}
                </p>
                
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5"><User size={12} className="text-slate-400" /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><CalendarDays size={12} className="text-slate-400" /> {post.date}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <button className="text-blue-600 font-bold text-xs flex items-center gap-1.5 group/btn bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors border border-blue-100 w-fit">
                    Read Article <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

      </div>
    </div>
  );
}
