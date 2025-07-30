"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const linkStyle =
  "text-[18px] transition-colors duration-200 hover:scale-105 hover:text-[#0393d1]";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1b1f27] to-[#282d37] text-white">
      <div className="flex items-center justify-between px-6 py-6 lg:px-34">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/saurabh.png"
            alt="saurabh's logo"
            width={44}
            height={44}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold sm:text-3xl">Portfolio.</h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="items-center hidden gap-10 font-medium lg:flex">
          <Link href="/" className={linkStyle}>Home</Link>
          <Link href="/" className={linkStyle}>About</Link>
          <Link href="/" className={linkStyle}>Services</Link>
          <Link href="/" className={linkStyle}>Skills</Link>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex">
          <button
            className="flex items-center gap-2 px-6 py-2 rounded-2xl bg-[#0393d1] transition-all duration-300 
            hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 text-[16px] font-medium"
          >
            <IoIosCall className="w-5 h-5" />
            Contact
          </button>
        </div>

        {/* Mobile/Tablet Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="w-7 h-7 text-cyan-400" />
            ) : (
              <HiMenuAlt3 className="w-7 h-7 text-cyan-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 font-medium text-[18px] bg-[#1b1f27] rounded-xl p-6">
            <Link href="/" className={linkStyle}>Home</Link>
            <Link href="/" className={linkStyle}>About</Link>
            <Link href="/" className={linkStyle}>Services</Link>
            <Link href="/" className={linkStyle}>Skills</Link>

            <button
              className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-xl bg-[#0393d1] text-white hover:scale-105 transition"
            >
              <IoIosCall className="w-5 h-5" />
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
