import React from "react";


const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./bgvideo_1.mp4" // Replace with your actual video path
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgb(0, 0, 0)] bg-opacity-80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide mb-4 font-bold" style={{ fontFamily: 'Kugile', fontWeight: '800' }}>
          <span className="font-kugile  font-light" tyle={{ fontFamily: 'Kugile', fontWeight: '800' }}>Rug</span>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5a3625] via-[#876452] to-[#5a3625] px-1" tyle={{ fontFamily: 'Kugile', fontWeight: '800' }}>X</span>
          <span className="font-light" tyle={{ fontFamily: 'Kugile', fontWeight: '800' }}>Art</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl italic text-gray-200 mb-8" style={{ fontFamily: 'Kugile' }}>
          “Where tradition meets elegance in every thread”
        </p>
        <a
          href="#"
          className="bg-[#800020] hover:bg-[#F8F4F0] hover:text-[#800020] transition duration-300 ease-in-out text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium tracking-wider shadow-md"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
