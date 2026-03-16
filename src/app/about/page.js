export const metadata = { title: "About Us | AICTE IDEALab Network" };

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">
        
        {/* Left Section: Description */}
        <div className="bg-white px-8 md:px-12 pt-4 pb-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-start h-full lg:col-span-7 overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-8 mt-2 border-b-4 border-brand-orange inline-block pb-2 self-start">
            About IDEALab
          </h1>
          <div className="prose prose-lg md:prose-xl text-gray-700 leading-relaxed">
            <p className="mb-6">
              The AICTE IDEA (Idea Development, Evaluation & Application) Lab at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur aims to encourage students for application of science, technologies, engineering, and mathematics (STEM) fundamentals towards enhanced hands-on experience, learning by doing, and even product demonstration.
            </p>
            <p className="mb-6">
              Our facilities are equipped with state-of-the-art resources supporting 24/7 innovation, 3D printing, advanced prototyping, PCB fabrication, and embedded systems programming.
            </p>
            <p>
              We strive to foster a strong culture of innovation and problem-solving among engineering students, bridging the gap between theoretical knowledge and practical application.
            </p>
          </div>
        </div>

        {/* Right Section: Faculty Members */}
        <div className="flex flex-col h-full lg:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8 border-b-4 border-brand-orange inline-block pb-2 self-start">
            Faculty Members
          </h2>
          
          <div className="flex flex-col gap-6">
            {/* Prof J.P. Saini */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-row items-center">
              <div className="w-1/4 bg-gray-100 flex-shrink-0 h-24 md:h-28">
                <img 
                  src="/image/jp saini sir.jpg" 
                  alt="Prof. J.P. Saini" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-3 md:p-4 w-3/4 flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-bold text-brand-blue mb-0.5">Prof. J. P. Saini</h3>
                <p className="text-xs md:text-sm text-brand-orange font-semibold">Vice Chancellor</p>
              </div>
            </div>

            {/* Dr S.K. Soni */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-row items-center">
              <div className="w-1/4 bg-gray-100 flex-shrink-0 h-24 md:h-28">
                <img 
                  src="/image/sk soni sir.jpg" 
                  alt="Dr. S.K. Soni" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-3 md:p-4 w-3/4 flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-bold text-brand-blue mb-0.5">Dr. S. K. Soni</h3>
                <p className="text-xs md:text-sm text-brand-orange font-semibold">Associate Professor</p>
              </div>
            </div>

            {/* Dr Virendra Kumar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-row items-center">
              <div className="w-1/4 bg-gray-100 flex-shrink-0 h-24 md:h-28">
                <img 
                  src="/image/virendra sir.jpg" 
                  alt="Dr. Virendra Kumar" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-3 md:p-4 w-3/4 flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-bold text-brand-blue mb-0.5">Dr. Virendra Kumar</h3>
                <p className="text-xs md:text-sm text-brand-orange font-semibold">Associate Professor</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
