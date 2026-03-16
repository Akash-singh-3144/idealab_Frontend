import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Event Calendar', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-brand-blue text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        {/* Mobile menu toggle could be added here later */}
        <ul className="flex flex-wrap justify-center md:justify-start items-center space-x-1 md:space-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="block py-2 px-3 hover:text-brand-orange hover:bg-white/10 rounded-sm transition-all font-semibold text-xs md:text-sm uppercase tracking-wider"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
