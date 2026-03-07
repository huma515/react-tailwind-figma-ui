import React from 'react';


const Awards = () => {
  const awards = [
    {
      id: 1,
      image: "/award 1.png",
      title: "Market leader across 18 categories",
      bgColor: "bg-red-50",
      badgeColor: "bg-red-500",
      
      
    },
    {
      id: 2,
      image: "award 2.png",
      title: "Most loved SaaS tool in 2021",
      bgColor: "bg-pink-50",
      badgeColor: "bg-gray-800"
    },
    {
      id: 3,
      image: "award 3.png",
      title: "Category leader in 2022",
      bgColor: "bg-cyan-50",
      badgeColor: "bg-gray-700"
    },
    {
      id: 4,
      image: "award 4.png",
      title: "Most recommended tool in 2021",
      bgColor: "bg-purple-50",
      badgeColor: "bg-indigo-600"
    },
    {
      id: 5,
      image: "award 5.png",
      title: "Champion in survey tool 2022",
      bgColor: "bg-yellow-50",
      badgeColor: "bg-blue-500"
    },
    {
      id: 6,
      image: "award 6.png",
      title: "Top performer spring 2021",
      bgColor: "bg-orange-50",
      badgeColor: "bg-orange-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-cyan-50 text-cyan-600 text-sm font-semibold rounded-full mb-4">
            AWARDS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            An <span className="font-extrabold">award winning</span> platform,{' '}
            <span className="font-extrabold">loved by customers</span>.
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`${award.bgColor} rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="mb-6 relative">
                <div className={`absolute inset-0 ${award.badgeColor} rounded-full blur-xl opacity-20`}></div>
                <img
                  src={award.image}
                  alt={award.title}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 object-contain mx-auto"
                />
              </div>
              <h3 className="text-base sm:text-xl font-extrabold text-gray-900 leading-relaxed">
                {award.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;