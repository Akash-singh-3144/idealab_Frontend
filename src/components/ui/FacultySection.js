"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { User, Mail, Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import api from "@/services/api";

export default function FacultySection() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const { data } = await api.get("/faculties");
        if (data.success && data.data && data.data.length > 0) {
          setFaculties(data.data);
        } else {
          setFaculties([]);
        }
      } catch (error) {
        console.error("Failed to fetch faculties:", error);
        setFaculties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculties();
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center text-slate-500 animate-pulse">
        Loading faculties...
      </div>
    );
  }

  return (
    <section className="py-16 bg-white relative border-t border-slate-100 mt-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10 flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Left text portion */}
        <div className="w-full lg:w-5/12 text-center lg:text-left">
          <SectionHeading
            title="Our Mentors & Faculties"
            subtitle="Guiding the next generation of innovators with expertise and passion."
          />
          <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed mt-5 max-w-lg mx-auto lg:mx-0">
             Meet the dedicated faculty members and mentors who make IDEALAB a thriving hub for innovation. Our team is committed to providing students with the guidance, resources, and technical support needed to bring their ideas to life.
          </p>
        </div>

        {/* Right scrollable portion */}
        <div className="w-full lg:w-7/12">
          {/* Scrollable Container (Vertical Scroll) */}
          <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-2 md:p-4 min-h-[200px] max-h-[450px] overflow-y-auto shadow-inner relative no-scrollbar flex flex-col justify-center" data-lenis-prevent>
            {faculties.length > 0 ? (
              <div className="flex flex-col gap-3">
                {faculties.map((faculty) => (
                  <div 
                    key={faculty._id || faculty.id} 
                    className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden flex items-center gap-4 md:gap-5"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-blue-100 border-2 border-slate-50 shadow-sm shrink-0 flex items-center justify-center relative z-10">
                      {faculty.photo ? (
                        <Image 
                          src={faculty.photo} 
                          alt={faculty.name} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-blue-400 group-hover:text-blue-600 transition-colors">
                          <User size={24} />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-outfit font-bold text-slate-800 text-sm md:text-base leading-tight mb-0.5 group-hover:text-blue-700 transition-colors truncate">
                        {faculty.name}
                      </h4>
                      <p className="text-[12px] md:text-[13px] text-blue-600 font-bold mb-0.5 truncate">
                        {faculty.designation} <span className="text-slate-300 font-normal mx-1 hidden sm:inline">|</span> <span className="text-slate-500 font-medium hidden sm:inline">{faculty.department}</span>
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium sm:hidden truncate">
                        {faculty.department}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shrink-0 pr-1 md:pr-2">
                      <button className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors border border-slate-100 shadow-sm">
                        <Mail size={12} />
                      </button>
                      <button className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors border border-slate-100 shadow-sm">
                        <Linkedin size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-10 text-center flex flex-col items-center justify-center text-slate-400">
                <User size={40} className="mb-3 opacity-20" />
                <p className="text-sm font-medium">Our faculty members will be updated soon.</p>
              </div>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}
