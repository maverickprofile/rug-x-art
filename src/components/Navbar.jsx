import React, { useState } from "react";
import { FiUser, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-t-2 border-[#f8f4f0] bg-[#F8F4F0] relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 lg:py-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo - left on mobile, centered on desktop */}
          <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <h1 className="text-1xl sm:text-3xl font-serif tracking-wide text-[#2e2e2e] whitespace-nowrap" style={{ fontFamily: 'Kugile' }}>
              <span className="font-bold">Rug</span>
              <span className="font-bold text-[32px] sm:text-[40px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">X</span>
              <span className="font-bold">Art</span>
            </h1>
          </div>

          {/* Left desktop menu (hidden on mobile) */}
          <div className="hidden lg:flex space-x-6 text-sm font-semibold tracking-wide text-[#2e2e2e]">
            <a href="#" className="border-b-2 border-[#5a3625] pb-1">HOME</a>
            <a href="#" className="hover:border-b-2 hover:border-[#5a3625] pb-1">SHOP</a>
            <a href="#" className="hover:border-b-2 hover:border-[#5a3625] pb-1">ABOUT</a>
            <a href="#" className="hover:border-b-2 hover:border-[#5a3625] pb-1">CONTACT</a>
            <a href="#" className="hover:border-b-2 hover:border-[#5a3625] pb-1">CATEGORY</a>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-xl text-[#2e2e2e]">
            <FiUser className="cursor-pointer" />
            <FiSearch className="cursor-pointer" />
            <FiShoppingCart className="cursor-pointer" />
            <div className="lg:hidden">
              {menuOpen ? (
                <FiX className="cursor-pointer" onClick={() => setMenuOpen(false)} />
              ) : (
                <FiMenu className="cursor-pointer" onClick={() => setMenuOpen(true)} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 pb-4 px-2 space-y-3 text-sm font-semibold tracking-wide text-[#2e2e2e]">
            <a href="#" className="block border-b pb-1">HOME</a>
            <a href="#" className="block border-b pb-1">SHOP</a>
            <a href="#" className="block border-b pb-1">ABOUT</a>
            <a href="#" className="block border-b pb-1">CONTACT</a>
            <a href="#" className="block border-b pb-1">CATEGORY</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
