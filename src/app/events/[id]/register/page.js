"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import api from "@/services/api";
import { UploadCloud, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function EventRegistrationPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [idPhotoPreview, setIdPhotoPreview] = useState(null);
  const [regHardcopyPreview, setRegHardcopyPreview] = useState(null);

  useEffect(() => {
    // Redirect logic remains unchanged
  }, [user]);

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("year", user.year);
      setValue("branch", user.branch);
      setValue("rollNo", user.rollNo);
    }
  }, [user, setValue]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const { data } = await api.get(`/events`);
        if (data.success) {
          const ev = data.events.find(e => e._id === id);
          if (ev) setEventData(ev);
          else setErrorMsg("Event not found");
        }
      } catch (error) {
        setErrorMsg("Failed to load event details");
      } finally {
        setLoading(false);
      }
    };
    fetchEventData();
  }, [id]);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'idCard') setIdPhotoPreview(reader.result);
        if (type === 'hardcopy') setRegHardcopyPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("branch", data.branch);
    formData.append("rollNo", data.rollNo);
    if (data.idCardPhoto && data.idCardPhoto[0]) {
      formData.append("idCardPhoto", data.idCardPhoto[0]);
    }
    if (data.registrationHardcopy && data.registrationHardcopy[0]) {
      formData.append("registrationHardcopy", data.registrationHardcopy[0]);
    }

    try {
      setSubmitting(true);
      setErrorMsg("");
      const res = await api.post(`/events/${id}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      if (res.data.success) {
        setSuccess(true);
        setTimeout(() => router.push("/events"), 3000);
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || err.message || "Failed to register. You may already be registered.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>;
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-6 md:p-8 rounded-2xl text-center max-w-sm w-full border border-green-200 shadow-xl shadow-green-900/5">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-xl font-bold font-outfit text-slate-800 mb-2">Registration Successful!</h2>
          <p className="text-slate-500 text-sm mb-4 font-medium">Your application has been received and is pending approval.</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 animate-pulse">Redirecting to events...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-8 min-h-screen flex justify-center bg-slate-50">
      <div className="container max-w-2xl px-6 sm:px-10 lg:px-16 xl:px-24">
        
        <div className="mb-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-3 shadow-sm"
          >
            Event Registration
          </motion.div>
          <h1 className="text-2xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-2">{eventData?.eventName}</h1>
          <p className="text-sm md:text-base text-slate-600 font-medium max-w-lg mx-auto leading-relaxed">{eventData?.description}</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-xl shadow-blue-900/5">
          
          {errorMsg && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 shadow-sm">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs font-semibold text-red-700">{errorMsg}</p>
            </div>
          )}

          {!user ? (
            <div className="text-center py-6">
              <p className="text-slate-600 text-sm font-medium mb-4">You need to be logged in to register for an event.</p>
              <button onClick={() => router.push('/auth/login')} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all">Login to Continue</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-outfit text-slate-800 border-b border-slate-100 pb-2">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 ml-1">Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-slate-900 text-sm focus:border-blue-500 hover:border-blue-300 outline-none transition-all focus:shadow-md focus:shadow-blue-500/10 font-medium" {...register("name", { required: true })} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 ml-1">Roll Number</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-slate-900 text-sm focus:border-blue-500 hover:border-blue-300 outline-none transition-all focus:shadow-md focus:shadow-blue-500/10 font-medium" {...register("rollNo", { required: true })} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 ml-1">Branch</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-slate-900 text-sm focus:border-blue-500 hover:border-blue-300 outline-none transition-all focus:shadow-md focus:shadow-blue-500/10 font-medium" {...register("branch", { required: true })} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 ml-1">Year</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-slate-900 text-sm focus:border-blue-500 hover:border-blue-300 outline-none transition-all focus:shadow-md focus:shadow-blue-500/10 font-medium" {...register("year", { required: true })} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold font-outfit text-slate-800 border-b border-slate-100 pb-2 flex items-center justify-between">
                  <span>Document Uploads</span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase bg-slate-100 px-2 py-0.5 rounded-full">Optional</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ID Card Upload */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 ml-1">College ID Card Photo</label>
                    <div className="relative h-28 border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-xl flex flex-col items-center justify-center bg-slate-50 transition-all overflow-hidden group cursor-pointer">
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        {...register("idCardPhoto", { required: false, onChange: (e) => handleFileChange(e, 'idCard') })}
                      />
                      {idPhotoPreview ? (
                        <div className="absolute inset-0">
                          <img src={idPhotoPreview} alt="Preview" className="w-full h-full object-cover opacity-80" />
                          <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs font-bold text-slate-800">Change Photo</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-slate-500">
                          <UploadCloud size={24} className="mb-2 text-slate-400 group-hover:text-blue-500 transition-colors" />
                          <span className="text-[10px] font-semibold text-center px-2">Click or Drag Image</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Registration Hardcopy Upload */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 ml-1">Registration Hardcopy Photo</label>
                    <div className="relative h-28 border-2 border-dashed border-slate-300 hover:border-cyan-500 hover:bg-cyan-50 rounded-xl flex flex-col items-center justify-center bg-slate-50 transition-all overflow-hidden group cursor-pointer">
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        {...register("registrationHardcopy", { required: false, onChange: (e) => handleFileChange(e, 'hardcopy') })}
                      />
                      {regHardcopyPreview ? (
                        <div className="absolute inset-0">
                          <img src={regHardcopyPreview} alt="Preview" className="w-full h-full object-cover opacity-80" />
                          <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs font-bold text-slate-800">Change Photo</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-slate-500">
                          <UploadCloud size={24} className="mb-2 text-slate-400 group-hover:text-cyan-500 transition-colors" />
                          <span className="text-[10px] font-semibold text-center px-2">Click or Drag Image</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Submit Registration"}
                </button>
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </div>
  );
}
