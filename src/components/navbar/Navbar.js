"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-slate-200 py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logos & Tagline */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center relative w-12 h-12">
              <Image src="/image/aictelogo.png" alt="AICTE Logo" fill className="object-contain" />
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="font-outfit font-bold text-xl md:text-2xl text-gradient tracking-wider">
                IDEALAB
              </span>
              <span className="text-[9px] md:text-xs text-slate-500 uppercase tracking-widest hidden sm:block font-medium">
                Madan Mohan Malaviya University
              </span>
            </div>
            
            <div className="hidden sm:flex items-center relative w-12 h-12">
              <Image src="/image/collegelogo.png" alt="MMUT Logo" fill className="object-contain" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative px-2 py-1 text-sm font-semibold transition-colors group"
                >
                  <span className={isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-[-16px] left-0 right-0 h-0.5 bg-blue-600 rounded-t-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="absolute bottom-[-16px] left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-t-full" />
                </Link>
              );
            })}
          </nav>

          {/* Auth Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>{user.name.split(" ")[0]}</span>
                </div>
                {user.role === "admin" && (
                  <Link href="/admin" className="text-sm font-medium text-blue-600 hover:text-blue-700">Admin</Link>
                )}
                <button
                  onClick={logout}
                  className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-full transition-all bg-white shadow-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex gap-3">
                <Link href="/auth/login" className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                  Login
                </Link>
                <Link href="/auth/signup" className="px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30">
                  Sign Up
                </Link>
              </div>
            )}

            <button
              className="lg:hidden text-slate-700 hover:text-blue-600 bg-slate-100 p-2 rounded-full border border-slate-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl lg:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-6 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-semibold ${
                    pathname === link.path ? "text-blue-600" : "text-slate-600 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="w-3/4 h-px bg-slate-200 my-4" />
              
              {user ? (
                <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                  <span className="text-slate-800 font-semibold bg-slate-100 w-full py-3 text-center rounded-full border border-slate-200">Hi, {user.name}</span>
                  {user.role === "admin" && (
                    <Link
                      href="/admin"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full py-3 text-center text-blue-600 font-semibold border border-blue-200 bg-blue-50 rounded-full"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-3 text-sm font-semibold border border-slate-300 rounded-full text-slate-600 bg-white shadow-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4 w-full max-w-xs">
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 text-center border border-slate-300 bg-white font-semibold rounded-full text-slate-700 shadow-sm"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 text-center bg-blue-600 font-semibold rounded-full text-white shadow-md shadow-blue-600/20"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
