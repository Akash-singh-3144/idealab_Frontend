"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Factory } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Hide Footer on admin routes
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative mt-10 border-t border-slate-200 bg-white">
      {/* Top Banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Factory size={16} className="text-white" />
              </div>
              <span className="text-xl font-outfit font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                IDEA<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">LAB</span>
              </span>
            </Link>
            <p className="text-sm font-medium text-slate-500 leading-relaxed pr-4">
              Empowering students with state-of-the-art rapid prototyping and research facilities to build the future of technology.
            </p>
            <div className="flex gap-3 pt-2">
               <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-1 border border-slate-100 hover:border-blue-200 transition-all shadow-sm">
                 <Instagram size={14} />
               </a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-1 border border-slate-100 hover:border-blue-200 transition-all shadow-sm">
                 <Linkedin size={14} />
               </a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-1 border border-slate-100 hover:border-blue-200 transition-all shadow-sm">
                 <Twitter size={14} />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-800 font-bold mb-3 flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-500 font-medium hover:text-blue-600 transition-colors flex items-center before:content-[''] before:w-0 before:h-px before:bg-blue-600 before:mr-0 hover:before:w-2 hover:before:mr-2 before:transition-all">Home</Link></li>
              <li><Link href="/about" className="text-slate-500 font-medium hover:text-blue-600 transition-colors flex items-center before:content-[''] before:w-0 before:h-px before:bg-blue-600 before:mr-0 hover:before:w-2 hover:before:mr-2 before:transition-all">About Us</Link></li>
              <li><Link href="/services" className="text-slate-500 font-medium hover:text-blue-600 transition-colors flex items-center before:content-[''] before:w-0 before:h-px before:bg-blue-600 before:mr-0 hover:before:w-2 hover:before:mr-2 before:transition-all">Facilities</Link></li>
              <li><Link href="/events" className="text-slate-500 font-medium hover:text-blue-600 transition-colors flex items-center before:content-[''] before:w-0 before:h-px before:bg-blue-600 before:mr-0 hover:before:w-2 hover:before:mr-2 before:transition-all">Events</Link></li>
              <li><Link href="/contact" className="text-slate-500 font-medium hover:text-blue-600 transition-colors flex items-center before:content-[''] before:w-0 before:h-px before:bg-blue-600 before:mr-0 hover:before:w-2 hover:before:mr-2 before:transition-all">Contact Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-slate-800 font-bold mb-3 flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-slate-500 font-medium hover:text-cyan-600 transition-colors">Blog & Tutorials</Link></li>
              <li><a href="#" className="text-slate-500 font-medium hover:text-cyan-600 transition-colors">Lab Guidelines</a></li>
              <li><a href="#" className="text-slate-500 font-medium hover:text-cyan-600 transition-colors">Equipment Manuals</a></li>
              <li><a href="#" className="text-slate-500 font-medium hover:text-cyan-600 transition-colors">Safety Protocols</a></li>
              <li><Link href="/auth/login" className="text-slate-500 font-medium hover:text-cyan-600 transition-colors">Student Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-800 font-bold mb-3 flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-500 font-medium leading-tight">AICTE IDEA LAB, MMMUT,<br/>Gorakhpur, UP 273010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500 shrink-0" />
                <a href="tel:+910000000000" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">+91 xxxxx xxxxx</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500 shrink-0" />
                <a href="mailto:idealab@mmmut.ac.in" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">idealab@mmmut.ac.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-[11px] font-semibold tracking-wide uppercase">
            &copy; {currentYear} IDEALAB MMMUT. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-blue-600 text-[11px] font-semibold tracking-wide uppercase transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 text-[11px] font-semibold tracking-wide uppercase transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
