import React from 'react'
import './temp6.css'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Education from './components/education/Education.jsx'
import Contact from './components/contact/Contact.jsx'
import TopButton from './components/topButton/TopButton.jsx'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'

function Temp6({ data }) {
  console.log(data)
  const firstName = data && data.firstName;
  const lastName = data && data.lastName;
  const basicinfo = data && data.basicinfo;
  const address = data && data.address;
  const educations = data && data.educations;
  const skills = data && data.skills;
  const socials = data && data.socials;
  const works = data && data.works;
  return (
    <div >
      <Navbar />
      <Home
        firstName={firstName}
      />
      <About
        firstName={firstName}
        basicinfo={basicinfo}
        address={address}
      />
      <Skills skills={skills} />
      <Experience experience={works} />
      <Education educations={educations} />
      <Contact socials={socials}/>
      <TopButton />
    </div>
  )
}

export default Temp6;
