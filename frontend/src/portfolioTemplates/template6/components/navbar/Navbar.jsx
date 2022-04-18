import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

export default function  Navbar ()  {
 
  return (
    <div className="navbar  md:sticky top-0 z-10 ">
      <div className="navlinks">
        <div className="navlink-wrapper">
          <Link to="home" spy={true} smooth={true} duration={1000}>
            HOME
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="about" spy={true} smooth={true} duration={1000}>
            ABOUT
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="education" spy={true} smooth={true} duration={1000}>
            Education
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="experience" spy={true} smooth={true} duration={1000}>
            EXPERIENCE
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="contact" spy={true} smooth={true} duration={1000}>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}
