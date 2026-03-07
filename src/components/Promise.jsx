import React from 'react'


const Promise = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      {/* Top Border Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="border-t-5 border-cyan-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Top on mobile, Left on desktop */}
          <div className="order-1 lg:order-1">
            {/* Label */}
            <p className="text-cyan-500 text-xs font-semibold tracking-wider uppercase">
              OUR PROMISE
            </p>

            {/* Heading */}
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Tool <span className="font-extrabold">built for people.</span>
            </h2>

            {/* Description Paragraphs */}
            <div className="mt-6 space-y-4">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.
              </p>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Circle has 100+ integrations with tools you already use and love.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="inline-flex items-center px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-md transition-colors duration-200">
                Get started free
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image - Bottom on mobile, Right on desktop */}
          <div className="order-2 lg:order-2">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/image 40.png" 
                  alt="Team collaborating around laptops"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-100 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-100 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Promise