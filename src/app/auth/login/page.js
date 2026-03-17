"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { LogIn, KeyRound, Loader2, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setErrorMsg("");
      const res = await login(data.rollNo, data.password);
      if (res.success) {
        if (res.user.role === 'admin') {
          router.push("/admin");
        } else {
          router.push("/");
        }
      } else {
        setErrorMsg(res.message);
      }
    } catch (err) {
      setErrorMsg("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-8 px-6 sm:px-10 lg:px-16 xl:px-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/50 rounded-full blur-[80px] -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-200/50 rounded-full blur-[80px] -z-10 mix-blend-multiply"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-white p-5 md:p-6 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100"
      >
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-blue-100">
            <KeyRound size={24} />
          </div>
          <h1 className="text-2xl font-outfit font-extrabold text-slate-900 mb-1 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 font-medium text-xs">Sign in to book equipment and register.</p>
        </div>

        {errorMsg && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 shadow-sm">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-red-700">{errorMsg}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 ml-1">University Roll Number</label>
            <input 
              type="text" 
              placeholder="e.g. 2021000000"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-slate-900 text-sm focus:border-blue-500 hover:border-blue-300 outline-none transition-all shadow-sm focus:shadow-md focus:shadow-blue-500/10 font-medium placeholder:text-slate-400" 
              {...register("rollNo", { required: true })} 
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center px-1">
               <label className="text-xs font-bold text-slate-700">Password</label>
               <a href="#" className="text-[10px] font-bold text-blue-600 hover:text-blue-700 transition-colors">Forgot?</a>
            </div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 pr-10 text-slate-900 text-sm focus:border-blue-500 hover:border-blue-300 outline-none transition-all shadow-sm focus:shadow-md focus:shadow-blue-500/10 font-medium placeholder:text-slate-400" 
                {...register("password", { required: true })} 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 mt-2 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-600/30 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Signing In...</> : <><LogIn size={16} /> Sign In</>}
          </button>
        </form>

        <div className="mt-6 text-center border-t border-slate-100 pt-4">
          <p className="text-slate-500 text-xs font-medium">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-blue-600 font-bold hover:underline">
              Create one now
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
