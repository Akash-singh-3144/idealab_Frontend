import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b-4 border-brand-orange py-1 md:py-1.5">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        {/* Left Side: AICTE Logo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            src="/image/aictelogo.png"
            alt="AICTE Logo"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
        </div>

        {/* Center: Title & College Name */}
        <div className="text-center flex flex-col justify-center flex-1 order-3 md:order-none mt-1 md:mt-0 px-2 lg:px-4">
          <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold text-brand-blue uppercase tracking-tight">
            AICTE IDEALab Network
          </h1>
          <h2 className="text-xs md:text-sm text-gray-800 font-bold mt-0.5">
            Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur
          </h2>
        </div>

        {/* Right Side: MMMUT Logo */}
        <div className="flex-shrink-0 flex items-center justify-center order-2 md:order-none">
          <img
            src="/image/collegelogo.png"
            alt="MMMUT Logo"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
}
