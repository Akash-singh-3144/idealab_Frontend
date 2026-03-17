"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import { Loader2, PlusCircle, Trash2, CalendarDays, Users, AlertCircle, FileText, CheckCircle2 } from "lucide-react";

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  
  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingRegs, setLoadingRegs] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");
  const [successStatus, setSuccessStatus] = useState("");
  const [activeTab, setActiveTab] = useState("events"); // events, create, registrations

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (!authLoading && (!user || user.role !== 'admin')) {
      router.push("/auth/login");
    }
  }, [user, authLoading, router]);

  const fetchEvents = async () => {
    setLoadingEvents(true);
    try {
      const { data } = await api.get("/events");
      setEvents(data.events || []);
    } catch (error) {
      console.error(error);
      setErrorStatus("Failed to load events.");
    } finally {
      setLoadingEvents(false);
    }
  };

  useEffect(() => {
    if (user?.role === 'admin') fetchEvents();
  }, [user]);

  const fetchRegistrations = async (eventId) => {
    setLoadingRegs(true);
    try {
      const { data } = await api.get(`/events/${eventId}/registrations`);
      setRegistrations(data.data || []);
      setActiveTab("registrations");
    } catch (error) {
      console.error(error);
      setErrorStatus("Failed to load registrations.");
    } finally {
      setLoadingRegs(false);
    }
  };

  const onCreateEvent = async (data) => {
    try {
      setErrorStatus("");
      setSuccessStatus("");
      const { data: resData } = await api.post("/events/create", data);
      if (resData.success) {
        setSuccessStatus("Event created successfully!");
        reset();
        fetchEvents();
        setActiveTab("events");
      }
    } catch (err) {
      setErrorStatus("Failed to create event.");
    }
  };

  const onDeleteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await api.delete(`/events/${id}`);
      setSuccessStatus("Event deleted.");
      fetchEvents();
    } catch (err) {
      setErrorStatus("Failed to delete event.");
    }
  };

  if (authLoading || (user && user.role !== 'admin')) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>;
  }

  return (
    <div className="pt-16 pb-8 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-6xl">
        
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-outfit font-extrabold text-slate-900 mb-1 tracking-tight">Admin Dashboard</h1>
            <p className="text-slate-600 text-sm font-medium">Manage events and registrations.</p>
          </div>
          
          <div className="flex bg-white p-1 rounded-full border border-slate-200 shadow-sm self-start">
            <button 
              onClick={() => setActiveTab("events")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === "events" ? "bg-blue-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`}
            >
              All Events
            </button>
            <button 
              onClick={() => setActiveTab("create")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === "create" ? "bg-blue-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <PlusCircle size={14} /> Create
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {errorStatus && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2 shadow-sm">
              <AlertCircle size={16} /> {errorStatus}
            </motion.div>
          )}
          {successStatus && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-xs font-bold flex items-center gap-2 shadow-sm">
              <CheckCircle2 size={16} /> {successStatus}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {activeTab === "events" && (
              <div className="space-y-4">
                {loadingEvents ? (
                  <div className="flex justify-center p-8"><Loader2 className="w-6 h-6 animate-spin text-blue-600" /></div>
                ) : events.length === 0 ? (
                  <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
                    <p className="text-slate-500 font-medium text-sm">No events found. Create your first event!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {events.map((event) => (
                    <div key={event._id} className="flex flex-col bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 rounded-2xl p-4 transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <div className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
                          {new Date(event.eventDate).toLocaleDateString()}
                        </div>
                        <button 
                          onClick={() => onDeleteEvent(event._id)}
                          className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                          title="Delete Event"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <h3 className="text-lg font-outfit font-bold text-slate-800 mb-1 line-clamp-1">{event.eventName}</h3>
                      <p className="text-slate-500 text-xs font-medium line-clamp-2 mb-4 flex-grow">{event.description}</p>
                      
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                          <Users size={14} className="text-blue-500" />
                          <span>{event.registeredStudents?.length || 0}</span>
                        </div>
                        <button 
                          onClick={() => fetchRegistrations(event._id)}
                          className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <FileText size={12} /> View Regs
                        </button>
                      </div>
                    </div>
                  ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "create" && (
              <div className="max-w-xl mx-auto bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-lg shadow-blue-900/5">
                <h2 className="text-xl font-bold font-outfit text-slate-800 mb-4">Create New Event</h2>
                <form onSubmit={handleSubmit(onCreateEvent)} className="space-y-4">
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Event Name</label>
                    <input 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 hover:border-blue-300 rounded-lg py-2 px-3 text-sm text-slate-900 outline-none transition-all shadow-sm focus:shadow-md focus:shadow-blue-500/10 font-medium" 
                      {...register("eventName", { required: true })} 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Event Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 hover:border-blue-300 rounded-lg py-2 px-3 text-sm text-slate-900 outline-none transition-all shadow-sm focus:shadow-md focus:shadow-blue-500/10 font-medium" 
                      {...register("eventDate", { required: true })} 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Description</label>
                    <textarea 
                      rows={3} 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 hover:border-blue-300 rounded-lg py-2 px-3 text-sm text-slate-900 outline-none transition-all resize-none shadow-sm focus:shadow-md focus:shadow-blue-500/10 font-medium" 
                      {...register("description")} 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm mt-2"
                  >
                    <PlusCircle size={16} /> Create
                  </button>
                </form>
              </div>
            )}

            {activeTab === "registrations" && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-blue-900/5 overflow-hidden">
                <div className="p-4 md:p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                  <h2 className="text-lg font-bold font-outfit text-slate-800 flex items-center gap-2">
                    <Users size={18} className="text-blue-600" />
                    Registrations List
                  </h2>
                  <button 
                    onClick={() => setActiveTab("events")}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-200/50 hover:bg-slate-200 px-3 py-1.5 rounded-md transition-colors"
                  >
                    Back
                  </button>
                </div>

                <div className="p-0 overflow-x-auto">
                  {loadingRegs ? (
                    <div className="flex justify-center p-8"><Loader2 className="w-6 h-6 animate-spin text-blue-600" /></div>
                  ) : registrations.length === 0 ? (
                    <div className="text-center p-8">
                       <p className="text-slate-500 font-medium text-sm">No registrations yet for this event.</p>
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wider font-bold border-b border-slate-200">
                          <th className="px-5 py-3">Name</th>
                          <th className="px-5 py-3">Roll No</th>
                          <th className="px-5 py-3">Branch</th>
                          <th className="px-5 py-3">Year</th>
                          <th className="px-5 py-3">ID Photo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100/80">
                        {registrations.map((reg, idx) => (
                          <motion.tr 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: idx * 0.05 }}
                            key={reg._id} 
                            className="hover:bg-blue-50/30 transition-colors"
                          >
                            <td className="px-5 py-3 font-semibold text-slate-800 text-sm whitespace-nowrap">{reg.name}</td>
                            <td className="px-5 py-3 text-slate-600 font-mono text-xs">{reg.rollNo}</td>
                            <td className="px-5 py-3 text-slate-600 font-medium text-xs">{reg.branch}</td>
                            <td className="px-5 py-3 text-slate-600 font-medium text-xs">Year {reg.year}</td>
                            <td className="px-5 py-3">
                              {reg.idCardPhoto ? (
                                <a 
                                  href={reg.idCardPhoto} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md transition-colors"
                                >
                                  View Doc
                                </a>
                              ) : <span className="text-xs text-slate-400 font-medium italic">Not provided</span>}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
