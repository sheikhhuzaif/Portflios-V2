import React, { useState, useEffect } from 'react'
import './education.css'
import { Fade } from 'react-reveal'
import { makeStyles } from '@material-ui/core/styles'
import Section from '../section/Section.jsx'
import FeaturedEducation from '../featuredEducation/FeaturedEducation.jsx'

const useStyles = makeStyles((theme) => ({
  moreeducation: {
    '&': {
      margin: '20px auto',
      backgroundColor: '#39b175',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#0be779',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      padding: 4,
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))



export default function Education ({educations}) {
  const [githubeducation, setGithubeducation] = useState([])
  const [loadeducationError, setLoadeducationError] = useState(null)

  const classes = useStyles()

      return (
      <Section title="Education">
        <div className="education-content">
          <ul className="education-list">
            {educations && educations.map((edu) => {
              return (
                <li key={edu.courseName}>
                  <Fade bottom duration={1000} distance="20px">
                    <FeaturedEducation
                      cName={edu.courseName}
                      university={edu.university}
                      startDate={edu.startDate}
                      endDate={edu.endDate}
                      gpa={edu.gpa}
                    />
                  </Fade>
                </li>
              )
            })}
          
          </ul>
         
        </div>
      </Section>
    )
  
}
