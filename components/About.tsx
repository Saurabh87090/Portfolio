"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#2c323d] py-20 px-6 md:px-16 lg:px-34">
      <div className="flex flex-col items-center justify-between max-w-full gap-12 mx-auto lg:flex-row">
        
        {/* Left - Image */}
        <div className="flex flex-col justify-center">
          <Image
            src="/man_working.png"
            alt="man working"
            width={400}
            height={420}
            className="
              object-contain rounded-xl
              h-[280px] w-[280px]
              sm:h-[320px] sm:w-[320px]
              md:h-[420px] md:w-[400px]
              lg:h-160 lg:w-160
            "
            priority
          />
        </div>

        {/* Right - Text */}
        <div className="text-center lg:text-left md:mt-6 lg:mt-10 md:max-w-[90%] lg:max-w-none lg:mr-30">
          <h1 className="text-2xl font-bold text-white">About Me</h1>
          <h1 className="py-4 text-4xl font-bold text-white sm:text-5xl md:text-5xl">
            Saurabh <span className="text-[#0393d1]">Here 👋</span>
          </h1>

          <p className="text-[#aeabab] md:pt-4 text-[17px] sm:text-[18px] md:text-[17.5px] leading-relaxed">
            {"Hi, I'm TurboRaj — a passionate self-taught developer "}<br className="hidden sm:block" />
            with a deep love for building beautiful and responsive <br className="hidden sm:block" />
            user interfaces. I believe in turning ideas into clean, <br className="hidden sm:block" />
            interactive, and meaningful digital experiences. <br className="hidden sm:block" />
            I give my 100% to every pixel and every line of code. <br className="hidden sm:block" />
            I'm currently mastering the full stack, with a strong grip <br className="hidden sm:block" />
            on Next.js, React, and Tailwind CSS. <br className="hidden sm:block" />
           { "For me, code isn’t just syntax — it’s art, energy, and evolution."}
          </p>

          <p className="text-[#aeabab] pt-6 text-[17px] sm:text-[18px] md:text-[17.5px] leading-relaxed">
            In addition, I am comfortable working on Linux <br className="hidden sm:block" />
            environment, ensuring smooth development workflows. <br className="hidden sm:block" />
            I am always eager to explore new technologies and <br className="hidden sm:block" />
            frameworks to enhance my skills and deliver <br className="hidden sm:block" />
            high-quality web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
