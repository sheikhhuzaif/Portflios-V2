import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-700 md:sticky top-0 z-10 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl">
            Mihir Dadwal
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
        <a href="#about2" className="mr-5 hover:text-white ">
            About
          </a>
          <a href="#resume" className="mr-5 hover:text-white">
            Resume
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#education" className="mr-5 hover:text-white">
            Education
          </a>
          <a href="#workExp" className="mr-5 hover:text-white">
            Work Experience
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact me
          {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
        </a>
      </div>
    </header>
  );
}