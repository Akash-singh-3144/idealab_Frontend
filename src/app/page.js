"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Microscope, Wrench, Lightbulb, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import CountUp from "react-countup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-8">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-4 shadow-sm"
            >
              Innovate • Build • Transform
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-outfit font-extrabold text-slate-900 leading-[1.1] mb-4 tracking-tight"
            >
              Bring Your Ideas to <span className="text-gradient drop-shadow-sm">Life</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Experience the state-of-the-art rapid prototyping facility at MMMUT. 
              Equipped with advanced tools to transform your imagination into physical reality.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <Link 
                href="/auth/signup" 
                className="px-6 py-3 w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Join IDEALAB <ArrowRight size={18} />
              </Link>
              <Link 
                href="/services" 
                className="px-6 py-3 w-full sm:w-auto rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold shadow-sm hover:shadow transition-all flex items-center justify-center"
              >
                Explore Facilities
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
          >
            <div className="relative w-full aspect-square max-h-[450px] rounded-3xl overflow-hidden glass shadow-2xl shadow-blue-900/10 border-white p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent z-10 rounded-3xl pointer-events-none"></div>
              <Image 
                src="/image/idea1.webp" 
                alt="Students working at IDEALAB" 
                fill 
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl flex items-center gap-3 border-white shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Lightbulb size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Innovation Hub</p>
                <p className="text-sm font-bold text-slate-800">24/7 Access</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 bg-white relative border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-outfit font-black text-slate-900 mb-2 tracking-tighter flex items-center justify-center">
                <CountUp end={500} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-3xl md:text-5xl ml-1 font-bold">+</span>
              </div>
              <h3 className="text-[13px] md:text-sm font-bold text-slate-800 leading-tight">Idea Labs Established</h3>
              <p className="text-[11px] md:text-xs text-slate-400 font-medium mt-1">Across India</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-outfit font-black text-slate-900 mb-2 tracking-tighter flex items-center justify-center">
                <CountUp end={12000} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
                <span className="text-3xl md:text-5xl ml-1 font-bold">+</span>
              </div>
              <h3 className="text-[13px] md:text-sm font-bold text-slate-800 leading-tight">Students Empowered</h3>
              <p className="text-[11px] md:text-xs text-slate-400 font-medium mt-1">Every academic year</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-outfit font-black text-slate-900 mb-2 tracking-tighter flex items-center justify-center">
                <CountUp end={850} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-3xl md:text-5xl ml-1 font-bold">+</span>
              </div>
              <h3 className="text-[13px] md:text-sm font-bold text-slate-800 leading-tight">Projects Incubated</h3>
              <p className="text-[11px] md:text-xs text-slate-400 font-medium mt-1">From idea to prototype</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-outfit font-black text-slate-900 mb-2 tracking-tighter flex items-center justify-center">
                <CountUp end={28} duration={2.5} enableScrollSpy scrollSpyOnce />
              </div>
              <h3 className="text-[13px] md:text-sm font-bold text-slate-800 leading-tight">States & UTs Covered</h3>
              <p className="text-[11px] md:text-xs text-slate-400 font-medium mt-1">National footprint</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Core Capabilities" 
            subtitle="Everything you need to build the future."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              { icon: <Cpu size={22} />, title: "Electronics & IoT", desc: "Design, fabricate, and test complex PCBs. Equipped with advanced oscilloscopes and soldering stations." },
              { icon: <Wrench size={22} />, title: "Mechanical Prototyping", desc: "Access high-precision CNC routers, laser cutters, and power tools for robust component fabrication." },
              { icon: <Microscope size={22} />, title: "Advanced Research", desc: "Dedicated spaces and advanced sensors for deep-tech research and product testing." }
            ].map((feature, idx) => (
              <AnimatedCard key={idx} delay={idx * 0.15} className="group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold font-outfit text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">{feature.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-10 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-6 gap-4">
            <SectionHeading 
              title="State-of-the-Art Facilities" 
              subtitle="Get hands-on experience with equipment."
            />
            <Link href="/services" className="text-blue-600 text-sm font-semibold flex items-center gap-1.5 group hover:text-blue-700 transition-colors bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6 md:mb-0">
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden glass-card p-1.5 shadow-md hover:shadow-lg border-white"
            >
              <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-xl">
                 <Image src="/image/3dPrinter.webp" alt="3D Printing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold font-outfit text-white mb-1">3D Printing Lab</h3>
                    <p className="text-white/80 text-xs font-medium">FDM and SLA printers for rapid prototyping.</p>
                 </div>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-2xl overflow-hidden glass-card p-1.5 shadow-md hover:shadow-lg border-white"
            >
              <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-xl">
                 <Image src="/image/pcbBoard.png" alt="PCB Fabrication" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold font-outfit text-white mb-1">PCB Fabrication</h3>
                    <p className="text-white/80 text-xs font-medium">In-house PCB milling setups.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 md:p-8 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative background shapes for CTA */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-2xl md:text-4xl font-outfit font-bold text-white mb-3">Ready to Build Something Amazing?</h2>
              <p className="text-blue-100 text-sm md:text-base mb-6 max-w-2xl mx-auto font-medium leading-relaxed">
                Join thousands of students turning their abstract ideas into concrete reality at MMMUT IDEALAB.
              </p>
              <Link 
                href="/auth/signup" 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-blue-600 font-bold hover:bg-slate-50 transition-all hover:scale-105 shadow-xl text-sm"
              >
                Register Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
