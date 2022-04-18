import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import Typewriter from 'typewriter-effect'
import profile from '../../images/matt.png'
import linkedin from '../../images/social/linkedin.png'
import pic from "./photo.jpg";
import Section from '../section/Section'

export default function Home({firstName}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
      <section className="home home-wrapper" title='Home'>
        <div className="home1 min-h-screen flex items-center justify-center">
          <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
            <Fade bottom distance="40px">
              <img
                className="profile"
                alt="Mihir profile"
                src={pic}
                onLoad={() => setImageLoaded(true)}
              />
              <h1 className="greeting-text text-5xl">
                Hi, I'm <span className="name">{firstName}</span>.{' '}
                <span className="wave-emoji" role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>
              {/* <h1 className="greeting-text">
                <Typewriter
                  options={{
                    strings: [
                      'I like to design things.',
                      'I love learning new tech.',
                      'I love meeting new people.',
                      'I create unique digital experiences.',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                    cursor: '<',
                    delay: 100,
                  }}
                />
              </h1> */}
              <Bounce cascade>
                <div className="links">
                  <a
                    href="https://www.linkedin.com/in/mjigalin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="Linkedin Logo" width="50px" />
                  </a>
                </div>
              </Bounce>
            </Fade>
          </div>

        </div>
      </section>
  );
}

