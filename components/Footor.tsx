"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const linkStyle =
  "text-[18px] text-white transition duration-200 hover:scale-105 hover:text-[#0393d1]";

const Footor = () => {
  return (
    <div className="bg-[#1b1f27]">
      {/* Top Footer */}
      <div className="flex flex-row items-center gap-10 px-6 py-16 md:justify-between md:gap-8 md:px-24 lg:px-45">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <Image src="/saurabh.png" alt="Logo" width={48} height={48} className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold text-white md:text-3xl">
            Portfolio.
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex-col items-center hidden gap-4 font-medium md:flex md:flex-row md:gap-8">
          <Link href="/" className={linkStyle}>Home</Link>
          <Link href="/" className={linkStyle}>About</Link>
          <Link href="/" className={linkStyle}>Services</Link>
          <Link href="/" className={linkStyle}>Skills</Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 text-3xl text-white md:justify-end md:gap-6">
          <a
            href="https://github.com/Saurabh87090"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-raj%F0%9F%A7%91-176a00304/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://x.com/Saurabh87090"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="px-6 pb-10 md:px-20 lg:px-30">
        <hr className="mb-4 border-t-2 border-white" />
        <p className="text-center text-white text-md">
          Made with <span>🍵</span> and <span>❤️</span> by{" "}
          <span className="font-medium text-cyan-400">DevXsaurabh</span>
        </p>
      </div>
    </div>
  );
};

export default Footor;
