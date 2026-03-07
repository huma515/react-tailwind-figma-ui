import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Content - Spans 5 columns */}
          <div className="lg:col-span-5 pt-12">
            <div className="space-y-8">
              {/* Testimonials Label */}
              <span className="inline-block text-[#00C4B8] text-sm font-semibold tracking-wide uppercase">
                Testimonials
              </span>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                See how customers<br />
                <span className="text-gray-900">drive impact</span>
              </h1>
              
              {/* CTA Button */}
              <button className="mt-4 bg-[#00C4B8] hover:bg-[#00B0A5] text-white font-semibold py-4 px-8 rounded-md transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2">
                See case studies
              </button>
            </div>
          </div>

          {/* Right Content - Spans 7 columns */}
          <div className="lg:col-span-7 relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/girl.png" 
                  alt="Customer testimonial"
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0"></div>
                
                {/* Play Button - Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-[#00C4B8] rounded-full flex items-center justify-center hover:bg-[#00B0A5] transition-all duration-300 hover:scale-110 shadow-2xl group">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Floating Testimonial Card - Positioned on right side */}
              <div className="absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 bg-white rounded-lg shadow-2xl p-6 max-w-sm border border-gray-100">
                {/* PayPal Logo */}
                <div className="flex items-center mb-4">
                  <span className="text-[#003087] font-bold text-2xl tracking-tight">Pay</span>
                  <span className="text-[#009EE3] font-bold text-2xl tracking-tight">Pal</span>
                </div>
                
                {/* Quote */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
                  "I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."
                </p>
                
                {/* Divider */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-sm">Michel Dedrick</p>
                  <p className="text-gray-500 text-sm mt-1">Senior Conversion Optimizer</p>
                </div>
              </div>

              {/* Navigation Arrow - Top Right */}
              <button className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#00C4B8] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;