import React from 'react';


const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-20 bg-white overflow-x-hidden sm:overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="border-t-5 border-cyan-500"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-34 items-center">
          
          {/* Left Content - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
              Looking for a solution<br />
              <span className="text-gray-900">for your business?</span>
            </h2>
            
            {/* Subtext */}
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-md">
              Check out Sogolytics enterprise feedback and experience management platform.
            </p>
            
            {/* Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Learn More Button - Filled */}
              <button className="bg-[#00C4B8] hover:bg-[#00B0A5] text-white font-semibold py-3.5 px-8 rounded transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center min-w-[160px]">
                Learn more
              </button>
              
              {/* Schedule Button - Outlined */}
              <button className="bg-transparent border-2 border-[#00C4B8] text-[#00C4B8] hover:bg-[#00C4B8] hover:text-white font-semibold py-3.5 px-8 rounded transition-all duration-300 inline-flex items-center justify-center min-w-[200px]">
                Schedule a consultation
              </button>
            </div>
          </div>

          {/* Right Content - Spans 7 columns */}
           <div className="lg:col-span-7">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                <img
                  src="/laptop.png" 
                  alt="Person typing on laptop"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;