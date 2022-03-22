import VerifiedIcon from '@mui/icons-material/Verified';
import MemoryIcon from '@mui/icons-material/Memory';
import React from "react";

export default function Skills() {

  const skills=["coding","coding","coding","coding","coding","coding"]

  
  return (
    <section id="skills" className="pt-20 pb-28 bg-gray-400">
      <div className="columns-2  px-10 py-20 mx-auto">
        <div className="text-center mb-20">
          <MemoryIcon style={{width:"50vw" , height:"10vh"}}  className="w-10 inline-block mb-4" />
          <h1 className=" text-5xl font-bold title-font  mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here's all what i know.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <VerifiedIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}