import React from 'react';


 function Hero() {
  const companyLogos = [
    { name: 'Capgemini', color: '#0066CC' },
    { name: 'YAMAHA', color: '#E60012' },
    { name: 'Wipro', color: '#5B2C8E' },
    { name: 'DELL', color: '#007DB8' },
    { name: 'CK BIRLA GROUP', color: '#333333' },
    { name: 'Shell', color: '#FFD500' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-cyan-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #06b6d4 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            A powerful online engagement tool
            <br />
            that's intuitive and simple to use.
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            With stellar one-click reports and unmatched support, see how
            <br className="hidden sm:block" />
            Circle will make a difference in your business.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="inline-flex items-center px-8 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-md transition-colors duration-200">
              Get started free
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
             </div>
              </div>
               </div>
               <div className='flex justify-center'>
                <img   src="/Mask group.png" alt="" />
               </div>
         
      
    </section>
  );
}
export default Hero
