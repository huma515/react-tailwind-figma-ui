import React from 'react';

const ResourcesSection = () => {
  const resources = [
    {
      image: "/1.png", // Replace with your image path
      title: "Excepteur sint occaecat cupidatat non proident",
      excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    },
    {
      image: "/2.png", // Replace with your image path
      title: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
      excerpt: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,",
      description: "nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit",
    },
    {
      image: "/3.png", // Replace with your image path
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      excerpt: "Coluptatem accusantium doloremque laudantium, totam rem aperiam",
      description: "Aaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00C4B8] text-sm font-semibold tracking-wide uppercase block mb-3">
            Resources
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Stay in the know
          </h2>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-[#F0FDFA] rounded-lg p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-md">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {resource.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {resource.excerpt}
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {resource.description}
              </p>

              {/* Read More Button */}
              <button className="bg-[#00C4B8] hover:bg-[#00B0A5] text-white font-semibold py-3 px-6 rounded transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2">
                Read more
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;