import React from 'react';
import Link from 'next/link';

const Card = ({ title, description, icon, href }) => {
  const content = (
    <div className="bg-white rounded-xl flex flex-col h-full overflow-hidden group border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
      <div className="p-5 md:p-6 flex-grow flex flex-col relative z-10">
        <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 group-hover:rotate-12 transform">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 flex-grow leading-relaxed">
          {description}
        </p>
        {/* Decorative background shape */}
        <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tl from-brand-blue/5 to-transparent rounded-tl-[80px] -z-10 group-hover:scale-150 transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
      </div>
      <div className="px-5 md:px-6 py-4 border-t border-gray-50 bg-gray-50/50 group-hover:bg-brand-blue/5 transition-colors z-10 mt-auto">
        <span className="text-brand-orange font-bold text-sm flex items-center group-hover:text-brand-blue transition-colors uppercase tracking-wide">
          Explore Section
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  ) : (
    <div className="block h-full cursor-pointer">
      {content}
    </div>
  );
};

export default function Cards() {
  const sections = [
    {
      title: "IDEALab Introduction",
      description: "Discover our state-of-the-art facilities dedicated to empowering students with prototyping tools and transforming innovative ideas into reality.",
      icon: "💡",
      href: "/about"
    },
    {
      title: "Announcements & News",
      description: "Stay updated with the latest news, project deadlines, facility upgrades, and important announcements from the IDEALab community.",
      icon: "📢",
      href: "/media"
    },
    {
      title: "Innovation Projects",
      description: "Explore the groundbreaking, diverse projects being crafted by brilliant minds across the university using cutting-edge technology.",
      icon: "🚀",
      href: "/at-a-glance"
    },
    {
      title: "Student Activities",
      description: "Engage in ideation sessions, competitive hackathons, and collaborative activities designed to nurture future engineers and leaders.",
      icon: "👥",
      href: "/media"
    },
    {
      title: "Events and Workshops",
      description: "Join our upcoming technical hands-on workshops, seminars, and networking events led by industry experts and experienced mentors.",
      icon: "📅",
      href: "/events"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6 border-b-4 border-brand-orange inline-block pb-2">
            Explore IDEALab
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-4">
            A central hub for limitless innovation, student-led technological advancements, and research driven by passion.
          </p>
        </div>
        
        {/* Featured Bento-Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 md:gap-8 auto-rows-fr">
          
          {/* Top Row: Two large featured cards */}
          <div className="md:col-span-3 lg:col-span-3">
            <Card {...sections[0]} />
          </div>
          <div className="md:col-span-3 lg:col-span-3">
            <Card {...sections[1]} />
          </div>

          {/* Bottom Row: Three standard cards */}
          <div className="md:col-span-2 lg:col-span-2">
            <Card {...sections[2]} />
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <Card {...sections[3]} />
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <Card {...sections[4]} />
          </div>

        </div>
      </div>
    </section>
  );
}
