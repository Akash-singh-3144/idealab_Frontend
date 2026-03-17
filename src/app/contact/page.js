"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Implement contact logic later
    console.log(data);
    alert("Message sent successfully!");
  };

  const contactDetails = [
    { icon: <MapPin size={20} />, title: "Address", content: "MMMUT IDEALAB, Gorakhpur, UP, 273010", link: "#" },
    { icon: <Phone size={20} />, title: "Phone", content: "+91 xxxxx xxxxx", link: "tel:+910000000000" },
    { icon: <Mail size={20} />, title: "Email", content: "idealab@mmmut.ac.in", link: "mailto:idealab@mmmut.ac.in" },
    { icon: <Clock size={20} />, title: "Hours", content: "Lab: 24/7 (With ID)\nSupport: Mon-Fri, 9am-5pm", link: null }
  ];

  return (
    <div className="pt-16 pb-8 min-h-screen relative bg-slate-50">
      
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 pt-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-3 drop-shadow-sm"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-medium text-sm md:text-base leading-relaxed max-w-xl mx-auto"
          >
            Have a question about equipment booking, workshops, or collaboration? We're here to help you build.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-[60%] glass p-5 md:p-6 rounded-2xl shadow-lg border-white"
          >
            <h2 className="text-xl font-bold font-outfit text-slate-800 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm text-slate-800 focus:border-blue-500 hover:border-blue-300 outline-none transition-all shadow-sm focus:shadow-md focus:shadow-blue-500/10 placeholder:text-slate-400 font-medium" 
                      {...register("name", { required: true })} 
                    />
                 </div>
                 <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm text-slate-800 focus:border-blue-500 hover:border-blue-300 outline-none transition-all shadow-sm focus:shadow-md focus:shadow-blue-500/10 placeholder:text-slate-400 font-medium" 
                      {...register("email", { required: true })} 
                    />
                 </div>
              </div>

              <div className="space-y-1.5">
                 <label className="text-xs font-semibold text-slate-700 ml-1">Subject</label>
                 <input 
                   type="text" 
                   placeholder="e.g. Workshop Inquiry"
                   className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm text-slate-800 focus:border-blue-500 hover:border-blue-300 outline-none transition-all shadow-sm focus:shadow-md focus:shadow-blue-500/10 placeholder:text-slate-400 font-medium" 
                   {...register("subject", { required: true })} 
                 />
              </div>

              <div className="space-y-1.5">
                 <label className="text-xs font-semibold text-slate-700 ml-1">Message</label>
                 <textarea 
                   rows="4"
                   placeholder="How can we help you?"
                   className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 text-sm text-slate-800 focus:border-blue-500 hover:border-blue-300 outline-none transition-all resize-none shadow-sm focus:shadow-md focus:shadow-blue-500/10 placeholder:text-slate-400 font-medium" 
                   {...register("message", { required: true })} 
                 ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-2 rounded-lg text-sm font-bold tracking-wide text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-600/30 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>

          {/* Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[40%] flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl flex items-start gap-3 border-white shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-outfit text-slate-800 mb-0.5">{detail.title}</h3>
                    {detail.link ? (
                      <a href={detail.link} className="text-slate-600 text-xs font-medium hover:text-blue-600 transition-colors whitespace-pre-wrap">
                        {detail.content}
                      </a>
                    ) : (
                      <p className="text-slate-600 text-xs font-medium whitespace-pre-wrap">{detail.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="w-full flex-grow min-h-[250px] rounded-xl overflow-hidden glass border border-white shadow-md relative mt-2">
              <iframe 
                src="https://maps.google.com/maps?q=Madan%20Mohan%20Malaviya%20University%20of%20Technology,%20Gorakhpur,%20Uttar%20Pradesh,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              ></iframe>
            </div>
            
          </motion.div>
        </div>

      </div>
    </div>
  );
}
