import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 md:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden md:flex">
        {/* Contact Information Section */}
        <div className="bg-brand-blue text-white p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm text-gray-200 mb-8">
              We'd love to hear from you. Please fill out the form or reach out using the details below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-brand-orange mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-sm text-gray-200 leading-relaxed mt-1">
                    AICTE IDEALab Network<br />
                    Madan Mohan Malaviya University of Technology (MMMUT),<br />
                    Deoria Road, Gorakhpur - 273010, U.P., India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-brand-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.04l-3.235-.465a1.125 1.125 0 00-1.235.845l-.141.564c-.11.442-.663.633-1.01.375C11.97 18.158 9.842 16.03 8.358 13.923c-.258-.347-.067-.9.375-1.01l.564-.141c.421-.105.74-.473.845-.905l.465-3.235a1.125 1.125 0 00-1.04-.864H3.75A2.25 2.25 0 001.5 6.75V4.5a2.25 2.25 0 002.25-2.25h1.372c.516 0 .966.351 1.04.864l.465 3.235a1.125 1.125 0 00-.845 1.235l-.564.141c-.442.11-.633.663-.375 1.01 1.055 1.418 3.183 3.546 4.602 4.602.347.258.9-.067 1.01-.375l.141-.564c.105-.421.473-.74.905-.845l3.235-.465a1.125 1.125 0 00.864-1.04V3.75A2.25 2.25 0 0017.25 1.5H15c-8.284 0-15 6.716-15 15z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-sm text-gray-200 mt-1">+91 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-brand-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-sm text-gray-200 mt-1">idealab@mmmut.ac.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            {/* Optional social links could go here */}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-8 md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
