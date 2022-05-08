import React from 'react'
import './Contact.css'
import Section from '../section/Section.jsx'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm.jsx'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import facebook from '../../images/social/facebook.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const getSocialLinks = (socials) => {
  return (
    <div className="links">
      {
        socials && socials.map((social) => (
          <div>
          {social.platform == 'Facebook'? <a href={"https://facebook.com/" + social.userName} target="_blank" className="p-5 transform hover:scale-125 ease-in-out duration-500"><FacebookIcon /></a>: null }
          {social.platform == 'Linkedn'? <a href={"https://linkedin.com/" + social.userName} target="_blank" className="p-5 transform hover:scale-125 ease-in-out duration-500"><LinkedInIcon /></a>: null }
          {social.platform == 'Instagram'? <a href={"http://instagram.com/" + social.userName} target="_blank" className="p-5 transform hover:scale-125 ease-in-out duration-500"><InstagramIcon /></a>: null }
          {social.platform == 'Twitter'? <a href={"https://twitter.com/" + social.userName} target="_blank" className="p-5 transform hover:scale-125 ease-in-out duration-500"><TwitterIcon /></a>: null }
          </div>
        ))
      }
    </div>
  )
}

export default function Contact({socials}){
  return (
    <Section title="Contact" className="flex flex-col h-screen">
      <ContactForm />
      <Bounce cascade>
      {getSocialLinks(socials)}
      </Bounce>
    </Section>
  );
}
