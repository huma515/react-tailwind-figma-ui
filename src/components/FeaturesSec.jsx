import React from 'react';


const FeaturesSec = () => {
  return (
    <section className="bg-cyan-50 py-20 px-6">
      
      <div className="max-w-7xl mx-auto">
        {/* Navigation Icons */}
        {/* <div className="flex justify-center mb-12">
          <div className="flex space-x-8 border-b border-gray-200 pb-4">
            <button className="flex items-center space-x-2 text-cyan-600 border-b-2 border-cyan-600 pb-4 -mb-4.5">
              <img 
                src="/icon 1.png" 
                alt="Create icon" 
                className="w-5 h-5"
              />
              <span className="font-medium">Create</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 pb-4">
              <img 
                src="/icon 2.svg" 
                alt="Distribute icon" 
                className="w-5 h-5"
              />
              <span className="font-medium">Distribute</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 pb-4">
              <img 
                src="/icon 3.svg" 
                alt="Collect icon" 
                className="w-5 h-5"
              />
              <span className="font-medium">Collect</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 pb-4">
              <img 
                src="/icon 4.svg" 
                alt="Analyze icon" 
                className="w-5 h-5"
              />
              <span className="font-medium">Analyze</span>
            </button>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Create
            </h1>
            <h2 className="text-2xl font-bold text-gray-800">
              Advanced research software
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded transition duration-300">
              Get started for free
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="/img.png" 
              alt="Laptop with analytics dashboard" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSec;                 