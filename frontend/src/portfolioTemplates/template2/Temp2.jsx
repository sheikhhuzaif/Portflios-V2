
import React from "react";
import About from "./components/About";
import About2 from "./components/About2";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";
import Background from './b.jpg'



export default function Temp2() {
  return (
    <main className="text-black bg-gray-400 body-font  scroll-smooth  pb-40" style={{backgroundImage:  `url(${Background})` , backgroundAttachment:"fixed", backgroundPosition: 'center',
    backgroundSize: 'cover',}}>
      <Navbar />
      <div className="pl-64">
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