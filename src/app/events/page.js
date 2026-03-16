"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Loader2 } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import api from "@/services/api";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await api.get("/events");
        if (data.success) {
          setEvents(data.events);
        }
      } catch (error) {
        console.error("Failed to fetch events", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="pt-16 pb-8 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-200/40 rounded-full blur-[100px] -z-10"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 text-xs font-bold tracking-wide mb-3 shadow-sm"
          >
            Workshops & Hackathons
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-3 drop-shadow-sm"
          >
            Upcoming <span className="text-gradient">Events</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-medium text-sm md:text-base"
          >
            Join our expert-led sessions to explore new technologies and enhance your practical skills.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-10 text-slate-500 text-sm">
            <p className="font-medium">No upcoming events currently. Please check back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event, index) => (
              <AnimatedCard key={event._id} delay={index * 0.1} className="flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 p-4">
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-outfit font-bold text-slate-800 mb-2 line-clamp-2 leading-snug">{event.eventName}</h3>
                  <div className="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                    <div className="flex items-center gap-2">
                       <CalendarIcon size={14} className="text-blue-500" />
                       <span>{new Date(event.eventDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    {/* Placeholder for time and location if backend updates to support them */}
                    <div className="flex items-center gap-2">
                       <Clock size={14} className="text-cyan-500" />
                       <span>TBA</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <MapPin size={14} className="text-blue-400" />
                       <span>IDEALAB</span>
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium text-xs md:text-sm line-clamp-3 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{event.registeredStudents?.length || 0} Registered</span>
                    <Link 
                      href={`/events/${event._id}/register`}
                      className="px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200 hover:border-blue-600 text-xs font-bold transition-all group flex items-center gap-1.5 shadow-sm"
                    >
                      Register
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
