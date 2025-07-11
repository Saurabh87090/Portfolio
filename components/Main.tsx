"use client";
import React from "react";

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-[#1b1f27] to-[#282d37] py-20 px-6 md:px-34">
      <div className="flex flex-col-reverse items-center justify-between max-w-full gap-10 mx-auto md:flex-row md:gap-0">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          {/* Heading */}
          <h1 className="text-xl font-medium text-white sm:text-2xl">
            👋 Hi, I'm Saurabh Raj
          </h1>

          {/* Mid Heading */}
          <h1 className="my-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            I am a{" "}
            <span className="text-[#0393d1] px-2">fullstack learner</span>
            & <br />
            a frontend developer <br />
            Turning ideas into <br />
            interactive experiences.
          </h1>

          {/* Description */}
          <p className="text-[#7f7e7e] font-medium text-base sm:text-lg mt-4 leading-relaxed">
            Transforming 💡 ideas into visually stunning and intuitive web <br className="hidden sm:block" />
            interfaces 📱 and passionate about creating 💻 beautiful user <br className="hidden sm:block" />
            experiences ✨ with the latest web technologies. ⚡
          </p>
        </div>

        {/* Right Section - Image */}
        <div>
          <img
            src="/saurabh.png"
            alt="saurabh pic"
            className="h-[400px] w-[400px] sm:h-[280px] sm:w-[280px] md:h-160 md:w-160 rounded-[50px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
