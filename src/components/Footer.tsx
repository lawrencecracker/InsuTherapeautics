// src/components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          {/* Left side: Brand */}
          <div>
            <h2 className="text-xl font-bold text-teal-600">Insu Therapeutics</h2>
            <p className="text-gray-600 mt-1 text-sm">
              Leading innovation in therapeutic solutions.
            </p>
          </div>

          {/* Right side: Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
            <a
              href="#home"
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#technology"
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm"
            >
              Technology
            </a>
            <a
              href="#investor"
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm"
            >
              Investor
            </a>
            <a
              href="#regulatory"
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm"
            >
              Regulatory
            </a>
            <a
              href="#media"
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm"
            >
              Media
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Insu Therapeutics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
