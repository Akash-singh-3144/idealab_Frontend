"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "3d-printing",
      title: "3D Printing & Scanning",
      desc: "Turn CAD models into physical parts rapidly. Our lab includes high-resolution FDM and SLA printers along with 3D scanners.",
      image: "3dPrinter.webp",
      features: ["FDM Printing", "Resin SLA Printing", "Reverse Engineering", "Rapid Prototyping"],
      color: "blue"
    },
    {
      id: "pcb",
      title: "PCB Fabrication Facility",
      desc: "Design to deployment. Fabricate single and double-sided PCBs using our precision CNC milling machines and chemical etching labs.",
      image: "pcbBoard.png",
      features: ["CNC PCB Milling", "Chemical Etching", "Soldering Stations", "Component Testing"],
      color: "cyan"
    },
    {
      id: "iot",
      title: "IoT & Embedded Systems",
      desc: "Build smart, connected devices. Access a vast library of microcontrollers, sensors, actuators, and advanced oscilloscopes.",
      image: "idealab3.webp",
      features: ["Microcontrollers", "Sensors & Actuators", "Logic Analyzers", "Oscilloscopes"],
      color: "indigo"
    }
  ];

  return (
    <div className="pt-16 pb-8 min-h-screen relative overflow-hidden bg-slate-50">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10 pt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 text-xs font-bold tracking-wide mb-3 shadow-sm"
          >
            Facilities & Tools
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-3 drop-shadow-sm"
          >
            Our Core <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-medium text-sm md:text-base"
          >
            IDEALAB offers a comprehensive suite of tools and machines designed to take your projects from the drawing board to the real world.
          </motion.p>
        </div>

        <div className="space-y-10">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-center`}>
                
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden glass p-1.5 border-white shadow-lg group">
                     <Image 
                       src={`/image/${service.image}`} 
                       alt={service.title} 
                       fill 
                       className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" 
                     />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`w-10 h-10 rounded-xl bg-${service.color}-100 flex items-center justify-center text-${service.color}-600 mb-3 shadow-sm`}>
                    <span className="font-outfit font-bold text-lg">0{index + 1}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-outfit font-bold text-slate-800 mb-3">{service.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium mb-4">
                    {service.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`text-${service.color}-500 shrink-0 mt-0.5`} size={16} />
                        <span className="text-slate-700 font-semibold text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <Link href="/auth/signup" className={`inline-flex items-center gap-1.5 group text-${service.color}-600 text-sm font-bold hover:text-${service.color}-700 transition-colors`}>
                      Book Equipment <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center glass rounded-2xl p-6 md:p-8 border-white shadow-xl shadow-blue-900/5 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
           <h2 className="text-2xl font-outfit font-bold text-slate-800 mb-3">Need specialized equipment?</h2>
           <p className="text-slate-600 font-medium text-sm mb-6 max-w-xl mx-auto">
             If your research requires custom parts or extended machine usage, please reach out to our technical team for scheduling and approvals.
           </p>
           <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md shadow-blue-600/30 hover:-translate-y-0.5">
             Contact Technical Team
           </Link>
        </motion.div>

      </div>
    </div>
  );
}
