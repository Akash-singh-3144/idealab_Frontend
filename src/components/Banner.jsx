"use client";
import React, { useState, useEffect } from 'react';

const bannerImages = [
  "./image/atal bhawan.png",
  "./image/department picture.png",
  "./image/main.jpg"
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">
      {bannerImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <img
            src={src}
            alt={`Hero Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-xl transform translate-y-2 transition-transform duration-700 ease-out">
              {index === 0 && "Fostering Innovation"}
              {index === 1 && "Advanced Prototyping"}
              {index === 2 && "Empowering Student Projects"}
            </h2>
            <p className="text-lg md:text-2xl text-gray-200 font-medium drop-shadow-lg max-w-3xl">
              Welcome to AICTE IDEALab Network at Madan Mohan Malaviya University of Technology
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-brand-orange w-8" : "bg-white/60 hover:bg-white"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
