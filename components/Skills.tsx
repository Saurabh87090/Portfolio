import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNpm } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri"

const skills = [
  { icon: <FaHtml5 className='w-20 h-20 text-orange-700' />, name: 'HTML' },
  { icon: <FaCss3Alt className='w-20 h-20 text-blue-500' />, name: 'CSS' },
  { icon: <FaJs className='w-20 h-20 text-yellow-400' />, name: 'JAVASCRIPT' },
  { icon: <FaReact className='w-20 h-20 text-cyan-500' />, name: 'REACT JS' },
  { icon: <RiTailwindCssFill className='w-20 h-20 text-cyan-500' />, name: 'TAILWIND CSS' },
  { icon: <FaNpm className='w-20 h-20 text-red-500' />, name: 'UI Libraries' },
]

const Skills = () => {
  return (
    <div className='bg-[#1b1f27] flex flex-col items-center justify-center px-8 py-20'>
      <h1 className='text-5xl font-bold text-white'>My <span className='text-cyan-500'>Skills</span></h1>

      <div className='flex flex-wrap items-center justify-center gap-13 pt-14'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='bg-[#2c323d] h-44 w-44 flex flex-col items-center justify-center rounded-3xl
                       hover:scale-105 hover:border-2 border-cyan-300 transition-all duration-300 ease-in-out cursor-pointer'
          >
            {skill.icon}
            <h1 className='mt-2 font-medium text-center text-white'>{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
