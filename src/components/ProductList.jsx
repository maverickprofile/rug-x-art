import React, { useState, useRef } from "react";
import ProductCard from "./ProductCard";
import products from "../data/Products";

const categories = ["All", "Traditional", "Contemporary"];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef(null);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 px-6 bg-[#f8f4f0]">
      <h2
        className="text-center text-4xl font-semibold mb-8 text-[#800020]"
        style={{ fontFamily: "Kugile" }}
      >
        Our Rugs
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border font-medium transition ${
              activeCategory === cat
                ? "bg-[#5a3625] text-white"
                : "bg-white text-[#5a3625] border-[#5a3625]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full"
        >
          &#8592;
        </button>

        {/* Horizontal Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-6"
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="min-w-[270px] max-w-[270px] h-full flex-shrink-0">
            <ProductCard product={product} />
          </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
