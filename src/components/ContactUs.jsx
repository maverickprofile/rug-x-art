import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.createElement("form");
    form.action =
      "https://docs.google.com/forms/d/1VZSvIhQXemdXDmHG0TxhzkII7qYpPkGfmR4VKhVDULc/formResponse";
    form.method = "POST";
    form.target = "hidden_iframe";

    const addField = (name, value) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addField("entry.1630072757", formData.name);
    addField("entry.1382122902", formData.phone);
    addField("entry.1661810222", formData.email);
    addField("entry.1622538415", formData.message);
    if (formData.terms) addField("entry.2113580913", "Agreed");

    document.body.appendChild(form);
    form.submit();
    form.remove();

    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", phone: "", email: "", message: "", terms: false });
  };

  return (
    <section className="w-full flex flex-col lg:flex-row min-h-screen" style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/6786956/pexels-photo-6786956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",backgroundSize: "cover",
        backgroundPosition: "center",
    }}>
      
     {/* Right Side: Image with overlay content */}
      <div
        className="w-full lg:w-1/2 relative bg-cover bg-center min-h-[600px]"
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-10 text-white">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "kugile, Georgia, serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-lg max-w-md">
            Whether you have questions, feedback, or need assistance — we're here to help. Reach out to us and we'll respond promptly.
          </p>
        </div>
      </div>

      {/* Left Side: Contact Form */}
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-[#e5ded6] w-full max-w-xl p-8 rounded-xl shadow-xl"
        >
          <h2
            className="text-3xl text-[#800020] font-bold mb-6"
            style={{ fontFamily: "kugile" }}
          >
            Contact Us
          </h2>

          <div className="mb-6">
            <label className="block font-semibold mb-2 text-[#5a3625]">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#d1c7be] rounded-lg bg-[#fefefe] text-gray-800 focus:outline-none focus:border-[#5a3625]"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2 text-[#5a3625]">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#d1c7be] rounded-lg bg-[#fefefe] text-gray-800 focus:outline-none focus:border-[#5a3625]"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2 text-[#5a3625]">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#d1c7be] rounded-lg bg-[#fefefe] text-gray-800 focus:outline-none focus:border-[#5a3625]"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2 text-[#5a3625]">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#d1c7be] rounded-lg bg-[#fefefe] text-gray-800 focus:outline-none focus:border-[#5a3625]"
            ></textarea>
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
              className="w-5 h-5 text-[#5a3625] accent-[#5a3625]"
            />
            <span className="ml-3 text-[#5a3625] text-sm">
              I agree to the terms & conditions.
            </span>
          </div>

          <button
            type="submit"
            className="bg-[#800020] hover:bg-[#7b4a35] text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
    </section>
  );
};

export default ContactUs;
