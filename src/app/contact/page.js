export const metadata = { title: "At a Glance | AICTE IDEALab Network" };

export default function AtAGlancePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-12 text-center">
        IDEALab At a <span className="text-brand-orange">Glance</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-brand-blue/5 p-8 rounded-2xl border border-brand-blue/10">
          <h2 className="text-2xl font-bold text-brand-blue mb-6 border-b-2 border-brand-orange pb-2">Facility Highlights</h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start"><span className="text-brand-orange mr-3">✓</span> 3D Printing & Rapid Prototyping Lab</li>
            <li className="flex items-start"><span className="text-brand-orange mr-3">✓</span> Advanced Electronics & IoT Workbench</li>
            <li className="flex items-start"><span className="text-brand-orange mr-3">✓</span> Laser Cutting & CNC Machining</li>
            <li className="flex items-start"><span className="text-brand-orange mr-3">✓</span> AR/VR Development Environment</li>
            <li className="flex items-start"><span className="text-brand-orange mr-3">✓</span> 24/7 Access for Innovators</li>
          </ul>
        </div>

        <div className="bg-brand-orange/5 p-8 rounded-2xl border border-brand-orange/10">
          <h2 className="text-2xl font-bold text-brand-orange mb-6 border-b-2 border-brand-blue pb-2">Impact numbers</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-extrabold text-brand-blue mb-2">50+</div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-extrabold text-brand-blue mb-2">15</div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Workshops Held</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-extrabold text-brand-blue mb-2">500+</div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Students Engaged</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-extrabold text-brand-blue mb-2">5</div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Patents Filed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
