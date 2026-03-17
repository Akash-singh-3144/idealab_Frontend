"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Microscope, Wrench, Lightbulb, CheckCircle2, Compass, Presentation, Rocket, ChevronLeft, ChevronRight } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import TiltCard from "@/components/ui/TiltCard";
import AnnouncementsSidebar from "@/components/ui/AnnouncementsSidebar";
import CountUp from "react-countup";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">

        <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10 flex flex-col lg:flex-row items-center gap-8">

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
                src="/image/atal bhawan.png"
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
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
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

      {/* Features & Announcements Section */}
      <section className="pt-6 pb-2 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side - Capabilities */}
            <div className="lg:w-8/12">
              <SectionHeading
                title="Core Capabilities"
                subtitle="Everything you need to build the future."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                {[
                  { icon: <Cpu size={22} />, title: "Electronics & IoT", desc: "Design, fabricate, and test complex PCBs. Equipped with advanced oscilloscopes and soldering stations." },
                  { icon: <Wrench size={22} />, title: "Mechanical Prototyping", desc: "Access high-precision CNC routers, laser cutters, and power tools for robust component fabrication." },
                  { icon: <Microscope size={22} />, title: "Advanced Research", desc: "Dedicated spaces and advanced sensors for deep-tech research and product testing." }
                ].map((feature, idx) => (
                  <AnimatedCard key={idx} delay={idx * 0.15} className={`group hover:-translate-y-1 transition-transform duration-300 ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold font-outfit text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-xs font-medium leading-relaxed">{feature.desc}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            {/* Right Side - Announcements */}
            <div className="lg:w-4/12 flex flex-col pt-1">
              <AnnouncementsSidebar />
            </div>
          </div>

        </div>
      </section>

      {/* Services Preview Section */}
      <section className="pt-2 pb-10 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-6 gap-4">
            <SectionHeading
              title="State-of-the-Art Facilities"
              subtitle="Get hands-on experience with equipment."
            />
            <Link href="/services" className="text-blue-600 text-sm font-semibold flex items-center gap-1.5 group hover:text-blue-700 transition-colors bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6 md:mb-0">
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative group/carousel max-w-5xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow]}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1.2, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 0 },
              }}
              className="pb-16 pt-8"
            >
              {[
                { title: "3D Printing Lab", desc: "FDM and SLA printers for rapid prototyping.", img: "/image/3dPrinter.webp" },
                { title: "PCB Fabrication", desc: "In-house PCB milling and assembly setups.", img: "/image/pcbBoard.png" },
                { title: "Laser Cutting", desc: "High-precision CO2 laser cutters for versatile materials.", img: "/image/laser-cutting.png" },
                { title: "CNC Milling Center", desc: "Advanced metal and wood CNC machining for complex parts.", img: "/image/cnc-milling.png" },
                { title: "VR/AR Innovation Lab", desc: "Immersive development space for next-gen interfaces.", img: "/image/vr-ar-lab.png" },
                { title: "Robotics & Automation", desc: "Industrial robotic arms and automation PLC systems.", img: "/image/robotics-lab.png" },
              ].map((service, idx) => (
                <SwiperSlide key={idx} className="!w-[280px] md:!w-[340px]">
                  <div className="relative h-[400px] md:h-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 border-0">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                      priority={idx < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-10 left-6 right-6 text-white text-center">
                      <h3 className="text-xl md:text-2xl font-bold font-outfit uppercase tracking-widest mb-3 drop-shadow-lg">{service.title}</h3>
                      <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed drop-shadow-md">{service.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Journey / How It Works Section */}
      <section className="py-16 md:py-24 bg-slate-50 relative border-y border-slate-200 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10 hidden lg:block"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
          <SectionHeading
            title="How It Works"
            subtitle="From a spark of an idea to a market-ready product — here's how we take you through the full innovation lifecycle."
            centered
          />

          <div className="mt-16 md:mt-20 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-[56px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 rounded-full shadow-inner z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10">
              {[
                {
                  icon: <Lightbulb size={32} />,
                  title: "Ideate",
                  desc: "Discover a real problem. Brainstorm solutions with our Design Thinking framework.",
                  color: "from-amber-400 to-orange-500",
                  bg: "bg-white",
                  text: "text-orange-500",
                  shadow: "shadow-orange-500/10 hover:shadow-orange-500/30"
                },
                {
                  icon: <Compass size={32} />,
                  title: "Plan",
                  desc: "Validate your concept, map your tech stack, and define your MVP scope.",
                  color: "from-blue-400 to-blue-600",
                  bg: "bg-white",
                  text: "text-blue-500",
                  shadow: "shadow-blue-500/10 hover:shadow-blue-500/30"
                },
                {
                  icon: <Wrench size={32} />,
                  title: "Build",
                  desc: "Get hands-on in our labs. Fabricate, code, test, and iterate rapidly.",
                  color: "from-indigo-400 to-indigo-600",
                  bg: "bg-white",
                  text: "text-indigo-500",
                  shadow: "shadow-indigo-500/10 hover:shadow-indigo-500/30"
                },
                {
                  icon: <Presentation size={32} />,
                  title: "Pitch",
                  desc: "Present to a panel of investors, mentors, and government stakeholders.",
                  color: "from-purple-400 to-purple-600",
                  bg: "bg-white",
                  text: "text-purple-500",
                  shadow: "shadow-purple-500/10 hover:shadow-purple-500/30"
                },
                {
                  icon: <Rocket size={32} />,
                  title: "Launch",
                  desc: "Get incubated, receive grant funding, and take your innovation to market.",
                  color: "from-emerald-400 to-emerald-600",
                  bg: "bg-white",
                  text: "text-emerald-500",
                  shadow: "shadow-emerald-500/10 hover:shadow-emerald-500/30"
                }
              ].map((step, idx) => {
                const isHighlighted = idx === activeStep;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", bounce: 0.4 }}
                    animate={{
                      filter: isHighlighted ? "blur(0px)" : "blur(2px)",
                      opacity: isHighlighted ? 1 : 0.6,
                      scale: isHighlighted ? 1.05 : 0.95
                    }}
                    className="relative flex flex-col items-center text-center group h-full transition-all duration-700"
                  >
                    {/* Step Number Badge */}
                    <div className={`absolute -top-3 -right-2 lg:right-auto lg:left-1/2 lg:-translate-x-12 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold z-30 shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300`}>
                      {idx + 1}
                    </div>

                    {/* Icon Container */}
                    <TiltCard className="w-28 h-28 mb-6 relative z-20" scale={1.1}>
                      <div className={`w-full h-full rounded-3xl flex items-center justify-center relative transition-all duration-500 group-hover:-translate-y-3 shadow-xl ${step.shadow} ${step.bg}`}>
                        {/* Background gradient on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                        {/* Inner styling */}
                        <div className="absolute inset-2 border border-slate-100 rounded-2xl group-hover:border-white/20 transition-colors duration-500"></div>

                        {/* Icon */}
                        <div className={`relative z-20 ${step.text} group-hover:text-white transition-colors duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                          {step.icon}
                        </div>
                      </div>
                    </TiltCard>

                    {/* Content */}
                    <TiltCard className="w-full max-w-[280px] relative z-20 flex-1 flex flex-col" scale={1.05}>
                      <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white h-full">
                        <h3 className="text-xl font-outfit font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
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
