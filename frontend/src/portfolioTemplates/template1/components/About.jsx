import React from "react";
export default function About({firstName, basicinfo}) {

  return (
    // border-b-8 rounded-full
    <section id="about" className=" min-h-screen pt-20">
     <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font  text-5xl mb-4 font-bold ">
            Hi, I'm {firstName}
          </h1>
          {basicinfo && 
          <p className="mb-8 leading-relaxed">
            {basicinfo.about}
          </p>
          }
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded  transform hover:scale-125 ease-in-out duration-500"
            alt="hero"
            src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"
          />
        </div>
      </div>
    </section>
  );
}