"use client"
import React from "react";

const Contact = () => {
  return (
    <div className="px-8 py-20 text-white md:px-40 ">
      <h1 className="mb-10 text-5xl font-bold text-center">
        Contact <span className="text-cyan-400">Me</span>
      </h1>

      <form
        className="flex flex-col max-w-2xl gap-6 p-10 mx-auto shadow-lg rounded-3xl"
        onSubmit={(e) => {
          e.preventDefault();
          // handle form submission (EmailJS, Netlify, etc.)
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#2c323d] text-white px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-[#2c323d] text-white px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="bg-[#2c323d] text-white px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 font-semibold text-white transition duration-300 bg-cyan-500 hover:bg-cyan-600 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact ;
