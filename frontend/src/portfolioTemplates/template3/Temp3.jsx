import React from "react";
import About from "./components/About";
import About2 from "./components/About2";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";
import c from './c.jpg'


export default function Temp3() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font flex"  style={{backgroundImage:  `url(${c})` , backgroundAttachment:"fixed", backgroundPosition: 'center',
    backgroundSize: 'cover',}}>
      <Navbar />
      <div>
        <About />
        <About2 />
        <Resume />
        <Skills />
        <Education />
        <WorkExp />
        <Contact />
      </div>
    </main>
  );
}