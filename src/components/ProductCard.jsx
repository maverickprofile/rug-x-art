import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between h-full border border-gray-100">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-[13px] font-semibold">{product.name}</h3>
          {/* <p className="text-sm text-gray-600 mt-1">{product.description}</p> */}
        </div>
        <div className="mt-4">
          <p className="text-[#5a3625] font-bold">₹{product.price}</p>
          <button
            disabled={!product.stock}
            className={`mt-3 w-full px-4 py-2 rounded-full text-white font-medium transition ${
              product.stock
                ? "bg-[#5a3625] hover:bg-[#7b4a35]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {product.stock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
