export const metadata = { title: "Event Calendar | AICTE IDEALab Network" };

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-10 text-center">
        Event <span className="text-brand-orange">Calendar</span>
      </h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center py-20">
        <div className="text-6xl mb-6">📅</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events & Workshops</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Stay tuned! We are currently planning an exciting lineup of hands-on workshops, hackathons, and guest lectures for this semester.
        </p>
        <button className="mt-8 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-orange transition-colors duration-300">
          Subscribe to Updates
        </button>
      </div>
    </div>
  );
}
