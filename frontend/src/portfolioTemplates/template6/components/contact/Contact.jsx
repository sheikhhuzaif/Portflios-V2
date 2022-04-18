import React from 'react'
import './Contact.css'
import Section from '../section/Section.jsx'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm.jsx'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import facebook from '../../images/social/facebook.png'

export default function Contact(){
  return (
    <Section title="Contact" className="flex flex-col h-screen">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/jigalin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/mjigalin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://www.facebook.com/matthew.jigalin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  );
}
