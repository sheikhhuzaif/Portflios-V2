
import React from "react";
import About from "./components/About";
import About2 from "./components/About2";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";
import Background from './b.jpg'



export default function Temp2({data}) {
  console.log(data)
  const firstName = data && data.firstName;
  const lastName = data && data.lastName;
  const basicinfo = data && data.basicinfo;
  const educations = data && data.educations;
  const skills = data && data.skills;
  const socials = data && data.socials;
  const works = data && data.works;

  console.log(works)
  return (
    <main className="text-black bg-gray-400 body-font " style={{
      backgroundImage: `url(${Background})`, backgroundAttachment: "fixed", backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <Sidebar
        firstName={firstName}
      />
      <div style={{ paddingLeft: "280px" }}>
        <About
          firstName={firstName}
          basicinfo={basicinfo}
        />
          <About2 
                    basicinfo = {basicinfo}
                    />
          <Skills skills={skills}/>
          <Education educations={educations}/>
          <WorkExp experience={works}/>
          <Contact />
      </div>
    </main>
  );
}