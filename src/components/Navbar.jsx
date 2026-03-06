import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Navigation - Desktop Only */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200">
              Testimonials
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200">
              Resources
            </a>
          </div>

          {/* Mobile: Empty div for spacing */}
          <div className="md:hidden w-20"></div>

          {/* Logo - Mobile: Right side, Desktop: Center */}
          <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="" />
            </div>
          </div>

          {/* Right Side - Desktop: Nav Links, Mobile: Hamburger */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200">
              Company
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200">
              Contact
            </a>
            <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-6 py-2.5 rounded text-sm font-medium transition-colors duration-200">
              Login
            </button>
          </div>

          {/* Mobile: Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          <a href="#" className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
            Features
          </a>
          <a href="#" className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
            Pricing
          </a>
          <a href="#" className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
            Testimonials
          </a>
          <a href="#" className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
            Resources
          </a>
          <div className="border-t border-gray-200 my-2"></div>
          <a href="#" className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
            Company
          </a>
          <a href="#" className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
            Contact
          </a>
          <button className="w-full mt-4 border border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-6 py-3 rounded text-base font-medium transition-colors duration-200">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}