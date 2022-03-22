import React from "react";
import pic from "./photo.jpg";
export default function About() {
  return (
    // border-b-8 rounded-full
    <section id="about" className=" mb-28 pt-20 pb-28 ">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font  text-5xl mb-4 font-bold ">
            Hi, I'm Mihir.
            <br className="hidden lg:inline-block" />I love to build amazing
            websites.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a professional koder and ceo of abcd. 
            lawrem ibsum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?lawrem ibsum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?lawrem ibsum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?lawrem ibsum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?lawrem ibsum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded  transform hover:scale-125 ease-in-out duration-500"
            alt="hero"
            src={pic}
          />
        </div>
      </div>
    </section>
  );
}