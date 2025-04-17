import React from "react";

const VideoSpotlight = () => {
  return (
    <section className="bg-[#f8f4f0] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#800020] mb-6 leading-snug"
            style={{ fontFamily: "Kugile" }}
          >
            The Art of Timeless Design
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover how our carefully crafted rugs blend heritage with
            contemporary elegance. Watch the behind-the-scenes of our
            handcrafted process.
          </p>
          <button className="bg-[#800020] text-white px-6 py-3 rounded-full hover:bg-[#7b4a30] transition duration-300 ease-in-out shadow-lg">
            Learn More
          </button>
        </div>

        {/* Video Section */}
        <div className="flex-1 relative w-full h-[18rem] md:h-[25rem] lg:h-[30rem] rounded-lg shadow-xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/bgvideo.mp4" // Replace with your video path
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          {/* Optional Text/Title on top of video */}
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold tracking-wide">
              Spotlight: Handcrafted Legacy
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSpotlight;
