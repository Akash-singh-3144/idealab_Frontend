"use client";

import { useState, useEffect } from "react";
import { Megaphone, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import api from "@/services/api";
import TiltCard from "./TiltCard";

export default function AnnouncementsSidebar() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const { data } = await api.get("/announcements");
        if (data.success && data.data && data.data.length > 0) {
          setAnnouncements(data.data);
        } else {
          setAnnouncements([]);
        }
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
        setAnnouncements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm p-6 animate-pulse">
        <div className="h-6 w-1/2 bg-slate-200 rounded mb-6"></div>
        <div className="space-y-4">
          <div className="h-20 w-full bg-slate-100 rounded-xl"></div>
          <div className="h-20 w-full bg-slate-100 rounded-xl"></div>
          <div className="h-20 w-full bg-slate-100 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-[500px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-inner">
            <Megaphone size={20} className="animate-[wiggle_1s_ease-in-out_infinite]" />
          </div>
          <div>
            <h3 className="text-white font-bold font-outfit text-lg leading-tight">Notice Board</h3>
            <p className="text-blue-100 text-xs font-medium">Latest Updates & Announcements</p>
          </div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="p-5 flex-1 overflow-y-auto no-scrollbar relative min-h-0 bg-slate-50/50 flex flex-col" data-lenis-prevent>
        {announcements.length > 0 && (
          <div className="absolute top-0 left-8 bottom-0 w-px bg-slate-200 z-0 hidden md:block"></div>
        )}
        
        <div className="space-y-5 relative z-10 flex-1">
          {announcements.length > 0 ? (
            announcements.map((ann, idx) => {
              const date = ann.createdAt ? new Date(ann.createdAt) : new Date();
              const day = date.getDate();
              const month = date.toLocaleString('default', { month: 'short' });

              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={ann._id || ann.id || idx} 
                  className="group flex gap-4 relative"
                >
                  {/* Date Bubble */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-sm flex flex-col items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <span className="text-blue-600 text-[10px] font-bold uppercase group-hover:text-blue-100 leading-none mb-0.5">{month}</span>
                    <span className="text-slate-800 text-sm font-black group-hover:text-white leading-none">{day}</span>
                  </div>

                  {/* Content Card */}
                  <TiltCard className="flex-1" scale={1.03}>
                    <div className="bg-white border border-slate-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow h-full group-hover:border-blue-400 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <h4 className="font-outfit font-bold text-slate-800 text-sm mb-1.5 line-clamp-2 leading-tight">
                        {ann.title}
                      </h4>
                      {ann.description && (
                        <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-3">
                          {ann.description}
                        </p>
                      )}
                      <div className="mt-3 flex items-center gap-1.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-bold uppercase tracking-wider">
                        Read more <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 py-10">
              <Megaphone size={32} className="mb-3 opacity-20" />
              <p className="text-xs font-bold uppercase tracking-wider">No new announcements</p>
              <p className="text-[10px] mt-1">Stay tuned for future updates!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
