
import React from "react";
import About from "./components/About";
import About2 from "./components/About2";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";
import a1 from './a1.jpg'
import b from './b.jpg'



export default function Temp1() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font " style={{backgroundImage:  `url(${a1})` , backgroundAttachment:"fixed", backgroundPosition: 'center',
        backgroundSize: 'cover',}}>
          <Navbar />
          <About />
          <About2 />
          <Resume />
          <Skills />
          <Education/>
          <WorkExp/>
          <Contact />
        </main>
      );
}