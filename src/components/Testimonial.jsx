import React from "react";

const testimonials = [
  {
    name: "Sophia M.",
    quote:
      "Absolutely in love with my Persian rug from RugXArt. The colors, the detail, the texture—everything exudes heritage and elegance.",
  },
  {
    name: "James K.",
    quote:
      "RugXArt has completely transformed my living room. The craftsmanship is top-tier, and it feels like I own a piece of history.",
  },
  {
    name: "Ayesha R.",
    quote:
      "Their collection speaks to the soul. Beautiful, authentic, and timeless. I’ve already recommended RugXArt to all my friends.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="py-20 px-6 text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/15586086/pexels-photo-15586086/free-photo-of-colorful-wool-on-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black/70 backdrop-blur-sm py-16 px-4 md:px-10 rounded-lg max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-10 text-center font-serif"
          style={{ fontFamily: "Kugile" }}
        >
          What Our Customers Say
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg"
            >
              <p className="text-base md:text-lg italic mb-4">
                “{item.quote}”
              </p>
              <h4 className="text-right font-semibold text-sm mt-4">
                – {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
