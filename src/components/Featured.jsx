import React from "react";

const featuredData = [
  {
    title: "Persian Elegance",
    subtitle: "Vintage Collection",
    image:
      "https://i.pinimg.com/736x/80/e3/9c/80e39cf6d1800b8b38735ba337892b20.jpg",
  },
  {
    title: "Royal Heritage Rugs",
    subtitle: "Traditional Masterpieces",
    image:
      "https://i.pinimg.com/736x/46/31/a6/4631a63b43fc32928cb80e011a18cd8b.jpg",
  },
  {
    title: "Modern Geometric",
    subtitle: "Contemporary Series",
    image:
      "https://i.pinimg.com/736x/d1/e5/14/d1e514a71bca558713fc0c41c9499c17.jpg",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="px-4 py-20 bg-[#f8f4f0]">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-7 font-serif text-[#5a3625]" style={{ fontFamily: 'Kugile' }}>
        Featured Collections
      </h2>
      <p className="text-center text-gray text-base sm:text-lg mb-7">
          Discover our most sought-after styles, handpicked for elegance and tradition.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {featuredData.map((item, index) => (
          <div
            key={index}
            className="relative h-[27rem] w-full overflow-hidden rounded-lg bg-white shadow-lg"
          >
            {/* Background Image + Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full w-full flex flex-col justify-end text-center p-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm mb-6">{item.subtitle}</p>
              <button className="self-center bg-white text-[#5a3625] px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-in-out transform hover:bg-[#5a3625] hover:text-white hover:scale-105 shadow-md">
  Explore
</button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
