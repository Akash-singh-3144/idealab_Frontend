import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 mt-auto border-t-4 border-brand-orange">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-orange">AICTE IDEALab Network</h3>
            <p className="text-sm md:text-base text-gray-300">
              Madan Mohan Malaviya University of Technology (MMMUT)<br/>
              Gorakhpur - 273010, U.P., India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-orange">Quick Links</h3>
            <ul className="text-sm md:text-base text-gray-300 space-y-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-orange">Contact Us</h3>
            <ul className="text-sm md:text-base text-gray-300 space-y-2">
              <li>Email: contact@mmmut.ac.in</li>
              <li>Phone: +91-XXXX-XXXXXX</li>
              <li>Stay connected for updates and events!</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-gray-700 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} MMMUT Gorakhpur. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
