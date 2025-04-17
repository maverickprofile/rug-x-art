import React from "react";
import logo from "/X_logo-removebg-preview (1) (1) (1).png"; // Make sure this path is correct

const Tagline = () => {
  return (
    <section className="bg-[#f8f4f0] py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo */}
        {/* <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 object-contain"
          style={{ filter: "grayscale(100%)" }}
        /> */}

        {/* Image with Overlay Text */}
        <div className="relative w-full rounded-[10px] overflow-hidden shadow-md mt-4">
          {/* Image */}
          <img
            src="/rxa_traditional_image_1__2_-removebg-preview (1).png"
            alt="Rug Design"
            className="w-full object-cover"
          />

          {/* Overlay Text */}
          <div className="text-center absolute inset-0  flex items-center justify-center p-6">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide " style={{ fontFamily: 'Kugile' }}>
              Vintage and Modern Rugs for Designers and Design{" "}
              <span className="italic">Lovers.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tagline;
