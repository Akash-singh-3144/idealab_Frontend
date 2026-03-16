export const metadata = { title: "Services | AICTE IDEALab Network" };

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      image: "/image/3dPrinter.webp",
      title: "3D Printing",
      description: "State-of-the-art 3D printing facilities for rapid prototyping and bringing digital designs into physical reality with high precision."
    },
    {
      id: 2,
      image: "/image/leath machine.jpg",
      title: "Lathe Machine Operations",
      description: "Advanced machining capabilities featuring modern lathe machines for precise shaping, cutting, and turning of metal and wood components."
    },
    {
      id: 3,
      image: "/image/pcbBoard.png",
      title: "PCB Fabrication",
      description: "Complete printed circuit board (PCB) design and fabrication services enabling students to create custom electronic circuits and hardware."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6 border-b-4 border-brand-orange inline-block pb-2">
          Our Services
        </h1>
        <p className="text-xl text-gray-600">
          State-of-the-art facilities and equipment available at the AICTE IDEALab to support student innovation, research, and practical learning.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="aspect-video relative overflow-hidden bg-gray-50">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
