// import React, { useRef } from 'react'
// // import IsVisible from 'react-is-visible'
// import './skills.css'

// import { Fade } from 'react-reveal'
// import { skills } from '../../data/skills.json'
// import { useContainerDimensions } from '../../hooks'
// import Section from '../section/Section'

// export default function Skills() {
//   const skillsWrapper = useRef()
//   const { width } = useContainerDimensions(skillsWrapper)
//   const skills = ["coding", "coding", "coding", "coding", "coding", "coding"]

//   return (
//       <section className="skill min-h-screen">
//         <Fade left duration={1000} distance="70px">
//           <h1 className="section-title">Skills</h1>
//         </Fade>
//         <Fade right duration={1000}>
//           <div className="underline"></div>
//         </Fade>

//       <Fade duration={1000} >
//         <div style={{ position: 'relative', width: '100%' }}>
//           <div >
//             <div
//               className="skills-wrapper"
//               style={{
//                 transition: '1s opacity ease-in-out',
//                 transform: `translateX(0)`,
//                 opacity: 1
//               }
//               }
//             >
//               <ul className="skills" ref={skillsWrapper}>
//                 {skills.map((skill) => {
//                   return (
//                     <li className="skill-bar-wrapper" key={skill}>
//                       <div
//                         className="skill-bar"
//                         style={{ transition: `${1 + skills.id / 10}s width ease-in-out`, width: width * (skills.amount / 100) }}
//                       ></div>
//                       <div className="skill-name">{skills.skillName}</div>
//                     </li>
//                   )
//                 })}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </Fade>
//       </section>

//   );
// }

import VerifiedIcon from '@mui/icons-material/Verified';
import MemoryIcon from '@mui/icons-material/Memory';
import React from "react";
import './skills.css'
import { Fade } from 'react-reveal'

export default function Skills({skills}) {

  return (
    <section id="skills" className="flex flex-col h-screen skill">
      <div className="columns-2  px-10 py-20 mx-auto">
        <div className="text-center mb-20">

          <Fade left duration={1600}>
            <MemoryIcon style={{ width: "50vw", height: "10vh" }} className="w-10 inline-block mb-4" />
            <h1 className="section-title">Skills &amp; Technologies
            </h1>
            
          </Fade>
          <Fade right duration={1600}>
            <div className="underline"></div>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here's all what i know.
          </p>
          </Fade>
          
        </div>
        <Fade right duration={1600} >

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills && skills.map((skill) => (
              <div key={skill.name} className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className="color rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium text-white">
                  ⚡  {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Fade>

      </div>

    </section>
  );
}
