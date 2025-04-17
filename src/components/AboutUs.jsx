import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#f8f4f0] text-[#800020] px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Philosophy Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-serif" style={{ fontFamily: "Kugile" }}>
              Our Philosophy
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              At RugXArt, we believe that a rug is not just a floor covering — it's a story woven with threads of tradition, culture, and timeless design. Each piece we create or curate is a work of art, carefully selected to bring warmth, beauty, and harmony into your space.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://images.pexels.com/photos/1482177/pexels-photo-1482177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Philosophy"
              className="w-full h-[20rem] object-cover rounded-[10px]"
            />
          </div>
        </div>

        {/* Craftsmanship Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-serif" style={{ fontFamily: "Kugile" }}>
              Our Craftsmanship
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Every rug in our collection is a testament to masterful craftsmanship. From the ancient weaving techniques of Persia to modern precision looms, we honor the artisan's touch. We partner with skilled weavers to ensure that every thread carries a legacy of authenticity and passion.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://images.pexels.com/photos/6045257/pexels-photo-6045257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Craftsmanship"
              className="w-full h-[20rem] object-cover rounded-[10px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
