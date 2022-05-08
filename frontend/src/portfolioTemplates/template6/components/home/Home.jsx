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
          <div className={`greeting`}>
            <Fade bottom distance="40px">
              {/* <img
                className="profile"
                alt="Mihir profile"
                src={pic}
                onLoad={() => setImageLoaded(true)}
              /> */}
              <h1 className="greeting-text text-5xl">
                Hi, I'm <span className="name">{firstName}</span>.{' '}
                <span className="wave-emoji" role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>
            </Fade>
          </div>

        </div>
      </section>
  );
}

