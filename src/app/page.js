import Banner from "@/components/Banner";
import Cards from "@/components/Cards";

export const metadata = { title: "Home | AICTE IDEALab Network" };

export default function Home() {
  return (
    <>
      <Banner />
      
      {/* Announcement Marquee */}
      <div className="bg-brand-orange text-white py-2 overflow-hidden flex items-center shadow-inner">
        <div className="container mx-auto px-4 flex">
          <span className="font-bold whitespace-nowrap hidden md:inline-block mr-4 bg-brand-blue px-3 py-1 rounded-sm text-sm uppercase tracking-widest z-10 relative shadow-md">
            Updates
          </span>
          <div className="overflow-hidden w-full relative h-[28px] flex items-center">
            <div className="whitespace-nowrap animate-marquee flex gap-12 font-medium text-sm md:text-base absolute will-change-transform">
              <span>🌟 Welcome to the new AICTE IDEALab portal!</span>
              <span>📅 Upcoming Workshop on 3D Printing starts next week. Register soon!</span>
              <span>🚀 Ideathon 2026 dates have been announced. Check the events calendar.</span>
              <span>🎓 Vice Chancellor officially inaugurated the new Advanced Prototyping Facility.</span>
            </div>
            {/* Clone for seamless loop */}
            <div className="whitespace-nowrap animate-marquee2 flex gap-12 font-medium text-sm md:text-base absolute will-change-transform">
              <span>🌟 Welcome to the new AICTE IDEALab portal!</span>
              <span>📅 Upcoming Workshop on 3D Printing starts next week. Register soon!</span>
              <span>🚀 Ideathon 2026 dates have been announced. Check the events calendar.</span>
              <span>🎓 Vice Chancellor officially inaugurated the new Advanced Prototyping Facility.</span>
            </div>
          </div>
        </div>
      </div>

      <Cards />
    </>
  );
}
