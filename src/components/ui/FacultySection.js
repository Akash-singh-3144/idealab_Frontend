"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { User, Mail, Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FacultySection() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/faculties");
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setFaculties(data.data);
        } else {
          // New Dummy data fallback
          setFaculties([
            { id: 201, name: "Dr. Ananya Sharma", designation: "Chief Coordinator", department: "Computer Science & Engineering", photo: "" },
            { id: 202, name: "Prof. Vikram Singh", designation: "Technical Mentor", department: "Electronics Engineering", photo: "" },
            { id: 203, name: "Dr. Rajesh Gupta", designation: "Research Lead", department: "Mechanical Engineering", photo: "" },
            { id: 204, name: "Dr. Meera Patel", designation: "Innovation Manager", department: "IT Department", photo: "" },
            { id: 205, name: "Prof. Amit Kumar", designation: "Faculty Advisor", department: "Electrical Engineering", photo: "" },
            { id: 206, name: "Dr. Sneha Desai", designation: "Project Coordinator", department: "Civil Engineering", photo: "" }
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch faculties, using dummy data:", error);
        setFaculties([
          { id: 201, name: "Dr. Ananya Sharma", designation: "Chief Coordinator", department: "Computer Science & Engineering", photo: "" },
          { id: 202, name: "Prof. Vikram Singh", designation: "Technical Mentor", department: "Electronics Engineering", photo: "" },
          { id: 203, name: "Dr. Rajesh Gupta", designation: "Research Lead", department: "Mechanical Engineering", photo: "" },
          { id: 204, name: "Dr. Meera Patel", designation: "Innovation Manager", department: "IT Department", photo: "" },
          { id: 205, name: "Prof. Amit Kumar", designation: "Faculty Advisor", department: "Electrical Engineering", photo: "" },
          { id: 206, name: "Dr. Sneha Desai", designation: "Project Coordinator", department: "Civil Engineering", photo: "" }
        ]);
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

  if (faculties.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white relative border-t border-slate-100 mt-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row gap-10 items-center">
        
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
          <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-2 md:p-4 max-h-[450px] overflow-y-auto shadow-inner relative custom-scrollbar">
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
          </div>
        </div>

      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #94a3b8;
        }
      `}</style>
    </section>
  );
}
