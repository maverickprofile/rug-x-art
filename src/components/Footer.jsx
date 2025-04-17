import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#800020] text-white pt-16 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: About */}
        <div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: "Kugile" }}
          >
            RugXArt
          </h3>
          <p className="text-sm leading-relaxed text-[#e2d5cd]">
            A celebration of craftsmanship. We blend tradition with modern
            aesthetics to bring timeless rugs into your space.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3
            className="text-lg font-medium mb-4"
            style={{ fontFamily: "Kugile" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-[#e2d5cd]">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#collections" className="hover:underline">Collections</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3
            className="text-lg font-medium mb-4"
            style={{ fontFamily: "Kugile" }}
          >
            Contact
          </h3>
          <p className="text-sm text-[#e2d5cd]">info@rugxart.com</p>
          <p className="text-sm text-[#e2d5cd] mt-1">+91 98765 43210</p>
          <p className="text-sm text-[#e2d5cd] mt-1">Jaipur, Rajasthan, India</p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mt-12 border-t border-[#e2d5cd]/30 pt-4 text-center text-xs text-[#e2d5cd]">
        © {new Date().getFullYear()} RugXArt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
