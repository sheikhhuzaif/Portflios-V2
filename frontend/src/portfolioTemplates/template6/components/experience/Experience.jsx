import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section.jsx'
import ExperienceCard from '../experienceCard/ExperienceCard.jsx'

export default function Experience({experience}){

  return (
    <Section title="Experience ">
      <div className="experience-content">
        <ul className="experience-list">
          {experience && experience.map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1700} >
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
