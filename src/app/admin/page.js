"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import Image from "next/image";
import {
  Loader2, PlusCircle, Trash2, CalendarDays, Users, AlertCircle,
  FileText, CheckCircle2, LayoutDashboard, Megaphone, UserSquare2,
  LogOut, Menu, X, MapPin, Image as ImageIcon, Briefcase, GraduationCap,
  Plus, Search, MoreVertical, ExternalLink
} from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

export default function AdminDashboard() {
  const { user, loading: authLoading, logout } = useAuth();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard, events, announcements, faculties
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const [loading, setLoading] = useState({
    events: false,
    announcements: false,
    faculties: false,
    regs: false,
    action: false
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [regSearchQuery, setRegSearchQuery] = useState("");

  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [editingItem, setEditingItem] = useState(null); // { type: 'event'|'announcement'|'faculty', data: {...} }

  useEffect(() => {
    if (!authLoading && (!user || user.role !== 'admin')) {
      router.push("/auth/login");
    }
  }, [user, authLoading, router]);

  const showStatus = (type, message) => {
    setStatus({ type, message });
    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  const startEdit = (type, item) => {
    setEditingItem({ type, id: item._id });
    setImagePreview(item.image || item.photo || null);

    if (type === 'event') {
      setValue("eventName", item.eventName);
      setValue("location", item.location);
      setValue("eventDate", item.eventDate?.split('T')[0]);
      setValue("description", item.description);
    } else if (type === 'announcement') {
      setValue("title", item.title);
      setValue("description", item.description);
    } else if (type === 'faculty') {
      setValue("name", item.name);
      setValue("designation", item.designation);
      setValue("department", item.department);
    }

    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingItem(null);
    setImagePreview(null);
    reset();
  };

  const fetchData = async (type) => {
    setLoading(prev => ({ ...prev, [type]: true }));
    try {
      const { data } = await api.get(`/${type}`);
      if (type === 'events') setEvents(data.events || []);
      if (type === 'announcements') setAnnouncements(data.data || []);
      if (type === 'faculties') setFaculties(data.data || []);
    } catch (error) {
      showStatus("error", `Failed to load ${type}.`);
    } finally {
      setLoading(prev => ({ ...prev, [type]: false }));
    }
  };

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchData('events');
      fetchData('announcements');
      fetchData('faculties');
    }
  }, [user]);

  const fetchRegistrations = async (eventId) => {
    setLoading(prev => ({ ...prev, regs: true }));
    try {
      const { data } = await api.get(`/events/${eventId}/registrations`);
      setRegistrations(data.registrations || []);
      setSelectedEventId(eventId);
    } catch (error) {
      showStatus("error", "Failed to load registrations.");
    } finally {
      setLoading(prev => ({ ...prev, regs: false }));
    }
  };

  const exportToCSV = (eventRegs) => {
    const headers = ["Name", "Email", "Roll No", "Branch", "Year", "Registration Date"];
    const rows = eventRegs.map(reg => [
      reg.student?.name || reg.studentDetails?.name,
      reg.student?.email || "N/A",
      reg.student?.rollNo || reg.studentDetails?.rollNo,
      reg.studentDetails?.branch,
      reg.studentDetails?.year,
      new Date(reg.createdAt).toLocaleDateString()
    ]);

    const csvContent = "data:text/csv;charset=utf-8,"
      + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `registrations_${selectedEventId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRegistrations = registrations.filter(reg => {
    const name = (reg.student?.name || reg.studentDetails?.name || "").toLowerCase();
    const roll = (reg.student?.rollNo || reg.studentDetails?.rollNo || "").toLowerCase();
    const query = regSearchQuery.toLowerCase();
    return name.includes(query) || roll.includes(query);
  });

  const handleAction = async (endpoint, method = 'POST', body = null, isFormData = false) => {
    setLoading(prev => ({ ...prev, action: true }));
    try {
      const config = isFormData ? { headers: { 'Content-Type': 'multipart/form-data' } } : {};
      const res = method === 'DELETE' ? await api.delete(endpoint) :
        method === 'PUT' ? await api.put(endpoint, body, config) :
          await api.post(endpoint, body, config);

      if (res.data.success) {
        showStatus("success", "Operation successful!");
        cancelEdit();
        // Refresh appropriate data
        if (endpoint.includes('events')) fetchData('events');
        if (endpoint.includes('announcements')) fetchData('announcements');
        if (endpoint.includes('faculties')) fetchData('faculties');
      }
    } catch (err) {
      showStatus("error", err.response?.data?.message || "Operation failed.");
    } finally {
      setLoading(prev => ({ ...prev, action: false }));
    }
  };

  const deleteItem = (type, id) => {
    if (!window.confirm(`Delete this ${type}?`)) return;
    const endpoint = type === 'event' ? `/events/${id}` : type === 'announcement' ? `/announcements/${id}` : `/faculties/${id}`;
    handleAction(endpoint, 'DELETE');
  };

  if (authLoading || (user && user.role !== 'admin')) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>;
  }

  const SidebarItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => { setActiveTab(id); setSelectedEventId(null); }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeTab === id
          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
          : "text-slate-500 hover:bg-slate-100"
        }`}
    >
      <Icon size={20} className={activeTab === id ? "text-white" : "group-hover:text-blue-600"} />
      <span className="font-bold text-sm tracking-tight">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-outfit">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0, opacity: isSidebarOpen ? 1 : 0 }}
        className="fixed left-0 top-0 z-50 bg-white border-r border-slate-200 h-screen overflow-y-auto shadow-xl lg:shadow-none"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
              <LayoutDashboard size={22} />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 leading-none">IDEALAB</h2>
              <p className="text-[10px] font-bold text-blue-600 mt-1 uppercase tracking-widest">Admin Panel</p>
            </div>
          </div>

          <nav className="space-y-2 flex-grow">
            <SidebarItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
            <SidebarItem id="events" icon={CalendarDays} label="Manage Events" />
            <SidebarItem id="announcements" icon={Megaphone} label="Announcements" />
            <SidebarItem id="faculties" icon={UserSquare2} label="Faculties & Mentors" />
          </nav>

          <div className="pt-6 border-t border-slate-100 space-y-2">
            <div className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Logged in as</p>
              <p className="text-xs font-bold text-slate-800 truncate">{user?.name}</p>
            </div>
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={`flex-1 min-h-screen relative scroll-smooth px-2 md:px-0 transition-all duration-300 ${isSidebarOpen ? 'lg:pl-[280px]' : 'pl-0'}`}>
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-10 max-w-7xl pb-40">

          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2.5 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm lg:hidden"
              >
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Madan Mohan Malaviya University of Technology</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight capitalize">
                  {selectedEventId ? "Registrations" : activeTab}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative group">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Global search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-6 text-sm font-bold focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none w-full md:w-80 shadow-sm transition-all"
                />
              </div>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mb-6 p-4 rounded-2xl flex items-center gap-3 border shadow-lg ${status.type === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-rose-50 border-rose-100 text-rose-700'
                  }`}
              >
                {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                <p className="font-bold text-sm">{status.message}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tab Content */}
          <motion.div
            key={activeTab + (selectedEventId ? "-regs" : "")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Active Events", count: events.length, icon: CalendarDays, color: "blue" },
                  { label: "Announcements", count: announcements.length, icon: Megaphone, color: "orange" },
                  { label: "Total Faculties", count: faculties.length, icon: UserSquare2, color: "emerald" },
                ].map((stat, i) => (
                  <TiltCard key={i} scale={1.05}>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group h-full">
                      <div className={`w-12 h-12 bg-${stat.color}-50 text-${stat.color}-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <stat.icon size={24} />
                      </div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                      <p className="text-3xl font-black text-slate-900 mt-1">{stat.count}</p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            )}

            {activeTab === "events" && !selectedEventId && (
              <div className="space-y-8">
                <section className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-blue-600/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                      {editingItem?.type === 'event' ? <FileText size={22} /> : <PlusCircle size={22} />}
                    </div>
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">
                      {editingItem?.type === 'event' ? "Edit Event" : "Post New Event"}
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit((data) => {
                    const formData = new FormData();
                    Object.keys(data).forEach(key => {
                      if ((key === 'image' || key === 'photo') && data[key][0]) {
                        formData.append(key, data[key][0]);
                      } else if (data[key] !== undefined) {
                        formData.append(key, data[key]);
                      }
                    });

                    const endpoint = editingItem?.type === 'event' ? `/events/${editingItem.id}` : '/events/create';
                    const method = editingItem?.type === 'event' ? 'PUT' : 'POST';
                    handleAction(endpoint, method, formData, true);
                  })} className="grid grid-cols-1 md:grid-cols-2 gap-6 scale-95 origin-left">
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Event Title</label>
                        <input {...register("eventName", { required: true })} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:bg-white focus:border-blue-500 transition-all outline-none" placeholder="Workshop on Robotics" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Location / Venue</label>
                        <input {...register("location", { required: true })} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:bg-white focus:border-blue-500 transition-all outline-none" placeholder="IDEALAB Hall A" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Event Date</label>
                        <input type="date" {...register("eventDate", { required: true })} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:bg-white focus:border-blue-500 transition-all outline-none" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Banner Image</label>
                        <div className="flex gap-4 items-start">
                          <label className="flex-grow flex flex-col items-center justify-center h-32 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer relative overflow-hidden group">
                            {imagePreview ? (
                              <img src={imagePreview} className="absolute inset-0 w-full h-full object-cover" />
                            ) : (
                              <>
                                <ImageIcon size={24} className="text-slate-300 mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold text-slate-400">Click to upload banner</span>
                              </>
                            )}
                            <input
                              type="file"
                              className="hidden"
                              {...register("image", {
                                onChange: (e) => {
                                  if (e.target.files?.[0]) {
                                    setImagePreview(URL.createObjectURL(e.target.files[0]));
                                  }
                                }
                              })}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Description</label>
                        <textarea rows={3} {...register("description", { required: true })} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:bg-white focus:border-blue-500 transition-all outline-none resize-none" placeholder="Describe the event..."></textarea>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex gap-3">
                      <button disabled={loading.action} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group">
                        {loading.action ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                          editingItem?.type === 'event' ? "Update Event" : <><Plus size={20} className="group-hover:rotate-90 transition-transform" /> Publish Event</>
                        )}
                      </button>
                      {editingItem?.type === 'event' && (
                        <button type="button" onClick={cancelEdit} className="px-6 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-2xl transition-all">
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {events.map((event) => (
                    <TiltCard key={event._id} scale={1.02} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                      <motion.div layout id={event._id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden flex shadow-sm group hover:shadow-xl hover:shadow-blue-900/5 transition-all h-full">
                        <div className="w-32 md:w-44 bg-slate-100 relative shrink-0 overflow-hidden">
                          {event.image ? (
                            <img src={event.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                              <ImageIcon size={32} />
                            </div>
                          )}
                        </div>
                        <div className="p-5 md:p-6 flex flex-col flex-grow min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-black text-slate-900 truncate pr-2 tracking-tight">{event.eventName}</h3>
                            <div className="flex gap-2">
                              <button onClick={() => startEdit('event', event)} className="w-10 h-10 flex items-center justify-center bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white rounded-xl transition-all shadow-sm border border-amber-100">
                                <FileText size={18} />
                              </button>
                              <button onClick={() => deleteItem('event', event._id)} className="w-10 h-10 flex items-center justify-center bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl transition-all shadow-sm border border-rose-100">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                              <CalendarDays size={12} className="text-blue-600" />
                              {new Date(event.eventDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                              <MapPin size={12} className="text-rose-500" />
                              {event.location}
                            </div>
                          </div>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />)}
                              </div>
                              <span className="text-[10px] font-black text-slate-400 uppercase">{event.registeredStudents?.length || 0} Regs</span>
                            </div>
                            <button
                              onClick={() => fetchRegistrations(event._id)}
                              className="bg-slate-50 hover:bg-blue-600 hover:text-white text-blue-600 text-[10px] font-black px-4 py-2 rounded-xl transition-all uppercase tracking-widest"
                            >
                              Manage
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "announcements" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <section className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-blue-600/5 sticky top-10">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                      {editingItem?.type === 'announcement' ? <FileText className="text-blue-600" /> : <PlusCircle className="text-blue-600" />}
                      {editingItem?.type === 'announcement' ? "Edit Notice" : "New Notice"}
                    </h2>
                    <form onSubmit={handleSubmit((data) => {
                      const endpoint = editingItem?.type === 'announcement' ? `/announcements/${editingItem.id}` : '/announcements';
                      const method = editingItem?.type === 'announcement' ? 'PUT' : 'POST';
                      handleAction(endpoint, method, data);
                    })} className="space-y-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Title</label>
                        <input {...register("title", { required: true })} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:bg-white focus:border-blue-500 transition-all outline-none" placeholder="Holiday Warning" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Content</label>
                        <textarea rows={4} {...register("description", { required: true })} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:bg-white focus:border-blue-500 transition-all outline-none resize-none" placeholder="Details..."></textarea>
                      </div>
                      <div className="flex gap-3">
                        <button disabled={loading.action} className="flex-1 bg-slate-900 hover:bg-black text-white font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                          {loading.action ? <Loader2 size={20} className="animate-spin" /> : (editingItem?.type === 'announcement' ? "Update Notice" : "Post Announcement")}
                        </button>
                        {editingItem?.type === 'announcement' && (
                          <button type="button" onClick={cancelEdit} className="px-5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-2xl transition-all">
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>
                  </section>
                </div>
                <div className="lg:col-span-2 space-y-4">
                  {announcements.map((ann) => (
                    <div key={ann._id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{new Date(ann.createdAt).toLocaleDateString()}</p>
                        </div>
                        <h3 className="text-lg font-black text-slate-800 tracking-tight mb-1">{ann.title}</h3>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{ann.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => startEdit('announcement', ann)} className="w-10 h-10 flex items-center justify-center bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white rounded-xl transition-all shadow-sm border border-amber-100">
                          <FileText size={18} />
                        </button>
                        <button onClick={() => deleteItem('announcement', ann._id)} className="w-10 h-10 flex items-center justify-center bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl transition-all shadow-sm border border-rose-100">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "faculties" && (
              <div className="space-y-8">
                <section className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-blue-600/5">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                      <GraduationCap size={26} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                        {editingItem?.type === 'faculty' ? "Edit Faculty Profile" : "Add Faculty Member"}
                      </h2>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-0.5">
                        {editingItem?.type === 'faculty' ? "Update mentor details" : "Define your mentor network"}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit((data) => {
                    const formData = new FormData();
                    formData.append('name', data.name);
                    formData.append('designation', data.designation);
                    formData.append('department', data.department);
                    if (data.photo?.[0]) formData.append('photo', data.photo[0]);

                    const endpoint = editingItem?.type === 'faculty' ? `/faculties/${editingItem.id}` : '/faculties';
                    const method = editingItem?.type === 'faculty' ? 'PUT' : 'POST';
                    handleAction(endpoint, method, formData, true);
                  })} className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <label className="flex flex-col items-center justify-center aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl hover:bg-slate-100 transition-colors cursor-pointer relative overflow-hidden group">
                        {imagePreview ? (
                          <img src={imagePreview} className="absolute inset-0 w-full h-full object-cover" />
                        ) : (
                          <>
                            <UserSquare2 size={32} className="text-slate-300 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-[9px] font-black text-slate-400 uppercase">Upload Headshot</span>
                          </>
                        )}
                        <input
                          type="file"
                          className="hidden"
                          {...register("photo", {
                            required: true,
                            onChange: (e) => {
                              if (e.target.files?.[0]) {
                                setImagePreview(URL.createObjectURL(e.target.files[0]));
                              }
                            }
                          })}
                        />
                      </label>
                    </div>
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                        <input {...register("name", { required: true })} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold outline-none focus:bg-white focus:border-blue-500 transition-all shadow-sm" placeholder="Dr. Vikram Sharma" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">Designation</label>
                        <input {...register("designation", { required: true })} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold outline-none focus:bg-white focus:border-blue-500 transition-all shadow-sm" placeholder="Chief Coordinator" />
                      </div>
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">Department</label>
                        <input {...register("department", { required: true })} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold outline-none focus:bg-white focus:border-blue-500 transition-all shadow-sm" placeholder="Information Technology & CSE" />
                      </div>
                      <div className="md:col-span-2 pt-2 flex gap-3">
                        <button disabled={loading.action} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
                          {loading.action ? <Loader2 size={16} className="animate-spin" /> : (editingItem?.type === 'faculty' ? "Update Faculty Profile" : "Save Faculty Profile")}
                        </button>
                        {editingItem?.type === 'faculty' && (
                          <button type="button" onClick={cancelEdit} className="px-8 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-2xl transition-all">
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
                  {faculties.map((fac) => (
                    <TiltCard key={fac._id} scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                      <div className="bg-white p-5 rounded-3xl border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group overflow-hidden h-full">
                        <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border-2 border-slate-50 shadow-inner relative">
                          <img src={fac.photo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="text-sm font-black text-slate-800 truncate mb-0.5">{fac.name}</h3>
                          <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{fac.designation}</p>
                          <p className="text-[10px] font-medium text-slate-400 truncate">{fac.department}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button onClick={() => startEdit('faculty', fac)} className="w-9 h-9 flex items-center justify-center bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white rounded-lg transition-all shadow-sm border border-amber-100">
                            <FileText size={16} />
                          </button>
                          <button onClick={() => deleteItem('faculty', fac._id)} className="w-9 h-9 flex items-center justify-center bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-lg transition-all shadow-sm border border-rose-100">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            )}

            {selectedEventId && (
              <section className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-600/5 overflow-hidden">
                <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setSelectedEventId(null)} className="p-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
                      <X size={18} />
                    </button>
                    <div>
                      <h2 className="text-xl font-black text-slate-900 tracking-tight">Event Registrations</h2>
                      <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Manage participants & documents</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative group flex-grow">
                      <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="text"
                        placeholder="Search student by name or roll..."
                        value={regSearchQuery}
                        onChange={(e) => setRegSearchQuery(e.target.value)}
                        className="bg-slate-50 border border-slate-100 rounded-xl py-2 pl-10 pr-4 text-xs font-bold focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none w-full shadow-inner transition-all"
                      />
                    </div>
                    <button
                      onClick={() => exportToCSV(filteredRegistrations)}
                      className="bg-blue-600 text-white text-[10px] font-black px-5 py-2.5 rounded-xl uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95 transition-all flex items-center gap-2"
                    >
                      <FileText size={14} /> Export CSV
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  {loading.regs ? (
                    <div className="flex justify-center p-12"><Loader2 size={32} className="animate-spin text-blue-600" /></div>
                  ) : registrations.length === 0 ? (
                    <div className="text-center p-16">
                      <Users size={48} className="text-slate-200 mx-auto mb-4" />
                      <p className="text-slate-400 font-bold uppercase tracking-wider">No participants found</p>
                    </div>
                  ) : (
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <th className="px-8 py-4">Student Identity</th>
                          <th className="px-8 py-4">Academic Details</th>
                          <th className="px-8 py-4">Verification</th>
                          <th className="px-8 py-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {filteredRegistrations.map(reg => (
                          <tr key={reg._id} className="hover:bg-slate-50/30 transition-colors">
                            <td className="px-8 py-5">
                              <p className="text-sm font-black text-slate-800">{reg.student?.name || reg.studentDetails?.name}</p>
                              <p className="text-[10px] font-mono text-slate-500 mt-0.5">{reg.student?.email || "No email"}</p>
                            </td>
                            <td className="px-8 py-5">
                              <p className="text-xs font-bold text-slate-700">Roll: {reg.student?.rollNo || reg.studentDetails?.rollNo}</p>
                              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight mt-0.5">{reg.studentDetails?.branch} | Year {reg.studentDetails?.year}</p>
                            </td>
                            <td className="px-8 py-5">
                              <div className="flex gap-2">
                                {reg.idCardPhoto ? (
                                  <a href={reg.idCardPhoto} target="_blank" className="flex items-center gap-1.5 bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                                    ID Card <ExternalLink size={10} />
                                  </a>
                                ) : <span className="text-[10px] font-bold text-slate-300">Wait...</span>}
                              </div>
                            </td>
                            <td className="px-8 py-5 text-right">
                              <button className="text-slate-300 hover:text-blue-600 transition-colors">
                                <MoreVertical size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </section>
            )}
          </motion.div>
        </div>
      </main>

      {/* Global CSS for aesthetic scrollbars */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #F8FAFC;
        }
        ::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #CBD5E1;
        }
        html, body {
          overflow-x: hidden;
          height: auto !important;
        }
      `}</style>
    </div>
  );
}
