export const metadata = { title: "Blog | AICTE IDEALab Network" };

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      image: "/image/main.jpg",
      title: "Inauguration of Advanced Prototyping Facility",
      description: "Our new advanced prototyping facility is now open to students and faculty, featuring state-of-the-art equipment for rapid development."
    },
    {
      id: 2,
      image: "/image/department picture.png",
      title: "Workshop on Embedded Systems",
      description: "A comprehensive three-day workshop was conducted for engineering students focusing on modern embedded systems and IoT applications."
    },
    {
      id: 3,
      image: "/image/atal bhawan.png",
      title: "IDEALab Network Expansion",
      description: "The AICTE IDEALab network continues to expand, fostering innovation and hands-on learning across multiple institutions in the region."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-12 text-center">
        Our <span className="text-brand-orange">Blog</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 relative z-10"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-brand-blue mb-3">{blog.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{blog.description}</p>
              <button className="text-brand-orange font-semibold hover:text-brand-blue transition-colors self-start mt-auto">
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
