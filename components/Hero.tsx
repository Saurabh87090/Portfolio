import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    
      <div className="bg-gradient-to-r from-[#1b1f27] to-[#282d37] py-30 px-6 md:px-10 lg:px-34">
        <div className="flex flex-col-reverse items-center justify-between max-w-full gap-10 mx-auto lg:flex-row">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl font-semibold text-center text-white sm:text-2xl lg:text-left">
              👋 {"Hi, I'm Saurabh Raj"}
            </h1>
            <h1 className="my-6 text-4xl font-bold leading-tight text-center text-white sm:text-5xl lg:text-6xl lg:text-left">
              I am a{" "}
              <span className="text-[#0393d1] px-2">fullstack learner</span> &{" "}
              <br />
              a frontend developer <br />
              Turning ideas into <br />
              interactive experiences.
            </h1>
            <p className="text-[#7f7e7e] font-medium text-base sm:text-lg leading-relaxed text-center lg:text-left">
              Transforming 💡 ideas into visually stunning and intuitive web{" "}
              <br className="hidden sm:block" />
              interfaces 📱 and passionate about creating 💻 beautiful user{" "}
              <br className="hidden sm:block" />
              experiences ✨ with the latest web technologies. ⚡
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center w-full lg:w-1/2">
            <Image
              src="/saurabh.png"
              alt="saurabh"
              width={440}
              height={440}
              className=" object-cover w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-160 lg:h-160"
            />
          </div>
        </div>
      </div>
    
  );
};

export default Hero;
