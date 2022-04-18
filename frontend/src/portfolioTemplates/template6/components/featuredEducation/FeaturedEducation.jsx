import React from 'react'
import './FeaturedEducation.css'

export default function FeaturedEducation({ courseName, university, startDate, endDate, gpa }){
  return (
  
      <div className="featured-education-wrapper">
        <div className="featured-education">
          <div
            className="featured-education-bg"
            style={{
              background: "linear-gradient(to top, rgb(7, 66, 38),rgb(132, 223, 170))",
            }}
          ></div>
          
          <p>{courseName}</p>
          <p>{university}</p>
          <p>{startDate} to {endDate}</p>
          <p>{gpa}</p>

          <div className="education-info">
            
          </div>
        </div>
      </div>
  );
}
