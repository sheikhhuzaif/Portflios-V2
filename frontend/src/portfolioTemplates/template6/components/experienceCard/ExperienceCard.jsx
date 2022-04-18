import React from 'react'
import './ExperienceCard.css'

export default function ExperienceCard({ experience }){
  let { title, company, startDate, endDate } = experience
  return (
    
      <div className="experience-card-wrapper">
        <div className="experience-card">
          <div className="experience-card-top">
            <div
              className="experience-bg"
              style={{ background: "linear-gradient(to top, rgb(7, 66, 38),rgb(132, 223, 170))" }}
            ></div>
            <h2>{company}</h2>
          </div>
          <div className="experience-card-bottom">
            <div>
              <h2>{title}</h2>
              <h3>
                {startDate} to {endDate}
              </h3>
            </div>
          </div>
        </div>
      </div>
  );
}
