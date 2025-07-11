"use client";
import React from "react";
import Image from "next/image";
import { IoIosGlobe, IoLogoGithub } from "react-icons/io";

const projects = [
  {
    title: "Pryde Travels",
    description:
      "Pryde Travels is a full-stack travel website built with Next.js and React to help users plan trips and find co-travelers.",
    image: "/Project_1.svg",
    live: "https://pryde-travels.vercel.app/",
    code: "https://github.com/Saurabh87090/Pryde-Travel",
  },
  {
    title: "Blockify",
    description:
      "Blockify is a blockchain music platform frontend built with React and TailwindCSS.",
    image: "/Project_2.svg",
    live: "https://blockify-web.vercel.app/",
    code: "https://github.com/Saurabh87090/Blockify",
  },
  {
    title: "Medicare",
    description:
      "Medicare is a health assistant platform frontend using React for easy online consultations.",
    image: "/Project_3.svg",
    live: "https://medicare-health-web.vercel.app/",
    code: "https://github.com/Saurabh87090/Medicare",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#2c323d] py-30 px-8 md:px-45">
      <div className="flex items-center text-5xl font-bold text-white pl-7 md:mb-12 md:px-45">
        <h1>
          My <span className="text-cyan-400">Projects</span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-12 mt-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1b1f27] rounded-3xl w-[380px] p-6 flex flex-col items-center text-center shadow-xl hover:scale-105 hover:border-2 border-cyan-300 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={350}
              height={200}
              className="object-cover mb-4 rounded-xl"
            />
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="mt-2 mb-4 text-sm text-gray-400">
              {project.description}
            </p>
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-white transition duration-200 bg-cyan-500 rounded-xl hover:bg-cyan-600"
              >
                <IoIosGlobe />
                Visit Site
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-white transition duration-200 border border-gray-500 rounded-xl hover:bg-gray-700"
              >
                <IoLogoGithub />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
