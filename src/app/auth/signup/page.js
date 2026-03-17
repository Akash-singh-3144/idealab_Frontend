"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { UserPlus, Loader2, AlertCircle } from "lucide-react";

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup } = useAuth();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const branches = ["CSE", "IT", "ECE", "ECE-IOT", "ME", "CE", "CHE", "EE"];

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setErrorMsg("");
      const res = await signup(data);
      if (res.success) {
        if (res.user.role === 'admin') {
          router.push("/admin");
        } else {
          router.push("/events");
        }
      } else {
        setErrorMsg(res.message);
      }
    } catch (err) {
      setErrorMsg("Register failed");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = (err) => `w-full bg-slate-50 border ${err ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500 hover:border-blue-300'} rounded-lg py-2 px-3 text-sm text-slate-900 outline-none transition-all shadow-sm focus:shadow-md focus:shadow-blue-500/10 font-medium placeholder:text-slate-400`;

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-8 px-6 sm:px-10 lg:px-16 xl:px-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-200/30 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-[80px] -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white p-5 md:p-6 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100"
      >
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-blue-100">
            <UserPlus size={24} />
          </div>
          <h1 className="text-2xl font-outfit font-extrabold text-slate-900 mb-1 tracking-tight">Create an Account</h1>
          <p className="text-slate-500 font-medium text-xs">Join IDEALAB and start building the future.</p>
        </div>

        {errorMsg && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 shadow-sm">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-red-700">{errorMsg}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 ml-1">Full Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                placeholder="John Doe"
                className={inputClasses(errors.name)} 
                {...register("name", { required: true })} 
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 ml-1">Email Address <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                placeholder="you@mmmut.ac.in"
                className={inputClasses(errors.email)} 
                {...register("email", { required: true })} 
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 ml-1">University Roll Number <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                placeholder="e.g. 2021000000"
                className={inputClasses(errors.rollNo)} 
                {...register("rollNo", { required: true })} 
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 ml-1">Branch <span className="text-red-500">*</span></label>
              <div className="relative">
                <select 
                  className={`${inputClasses(errors.branch)} appearance-none`}
                  {...register("branch", { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled className="text-slate-400">Select Branch</option>
                  {branches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 ml-1">Year of Study <span className="text-red-500">*</span></label>
              <div className="relative">
                <select 
                  className={`${inputClasses(errors.year)} appearance-none`}
                  {...register("year", { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 ml-1">Password <span className="text-red-500">*</span></label>
              <input 
                type="password" 
                placeholder="••••••••"
                className={inputClasses(errors.password)} 
                {...register("password", { required: true, minLength: 6 })} 
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 mt-4 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-600/30 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Creating Account...</> : <><UserPlus size={16} /> Create Account</>}
          </button>
        </form>

        <div className="mt-6 text-center border-t border-slate-100 pt-4">
          <p className="text-slate-500 text-xs font-medium">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600 font-bold hover:underline">
              Sign in instead
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
