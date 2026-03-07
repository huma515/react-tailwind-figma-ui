import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Left Side - Map & Tagline */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start justify-center">
            {/* US Map SVG */}
            <div className="mb-4">
              <svg 
                width="180" 
                height="120" 
                viewBox="0 0 180 120" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 h-32 lg:w-56 lg:h-36"
              >
                <path
                  d="M20,60 Q30,40 50,45 Q70,35 90,40 Q110,35 130,45 Q150,50 160,65 Q165,80 155,90 Q145,100 130,95 Q110,100 90,95 Q70,100 50,90 Q30,85 25,75 Q20,70 20,60 Z"
                  fill="#00C4B8"
                  opacity="0.9"
                />
                {/* Simplified US Map Shape */}
                <path
                  d="M25,65 L35,55 L50,50 L70,48 L90,50 L110,48 L130,52 L150,58 L160,68 L162,80 L155,88 L145,92 L130,90 L110,92 L90,90 L70,92 L50,88 L35,82 L28,75 L25,65 Z"
                  fill="#00C4B8"
                />
              </svg>
            </div>
            <p className="text-gray-400 text-sm text-center lg:text-left">
              Made with lots of ❤️ in San Francisco
            </p>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-4 lg:mb-6">Products</h3>
            <ul className="space-y-3">
              {['Delta', 'Sigma', 'Zeta', 'Alpha', 'Acumen'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#00C4B8] transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-4 lg:mb-6">Resources</h3>
            <ul className="space-y-3">
              {['Help', 'Training Videos', 'Webinars', 'Request a Demo', 'Create Surveys', 'Quiz Maker'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#00C4B8] transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-4 lg:mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Team', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#00C4B8] transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 lg:pt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center lg:text-left">
              Copyright 2022 Circle. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#00C4B8] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#00C4B8] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              <a href="#" className="text-gray-500 hover:text-[#00C4B8] text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-gray-700 hidden sm:inline">|</span>
              <a href="#" className="text-gray-500 hover:text-[#00C4B8] text-sm transition-colors duration-200">
                Data & Security
              </a>
              <span className="text-gray-700 hidden sm:inline">|</span>
              <a href="#" className="text-gray-500 hover:text-[#00C4B8] text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <span className="text-gray-700 hidden sm:inline">|</span>
              <a href="#" className="text-gray-500 hover:text-[#00C4B8] text-sm transition-colors duration-200">
                Data & Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;