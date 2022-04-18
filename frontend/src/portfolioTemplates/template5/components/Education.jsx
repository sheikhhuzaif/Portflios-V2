// import SchoolIcon from '@mui/icons-material/School';
// import { Grid } from '@mui/material';
// import React from "react";
// import { Fade } from 'react-reveal'

// export default function Education() {
//   const educations = [{ cName: "B.Tech CSE", university: "Amity University, Noida", year: "2022", gpa: "9.8" },
//   { cName: "12th", university: "Haryana School, School", year: "2018", gpa: "9.5" },
//   { cName: "10th", university: "Haryana School, School", year: "2017", gpa: "9.3" }
//   ]
//   return (
//     <section id="education" className="  body-font flex flex-col h-screen " style={{ backgroundColor: "#233" }}>
//       <div className="columns-2  px-10 py-20 mx-auto text-center lg:px-40">
// <Fade right duration={1500}>
//   <div className="flex flex-col w-full mb-20" style={{ color: "tan" }}>
//     <SchoolIcon style={{ width: "50vw", height: "10vh" }} className="mx-auto inline-block mb-4" />
//     <h1 className="text-5xl font-bold title-font mb-4 " style={{ color: "tomato" }}>
//       Education
//     </h1>
//     <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
//       facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
//       fuga dolore.
//     </p>
//   </div>
// </Fade>
//         <Fade left duration={1500}>
//           <Grid container spacing={2} className="justify-center" style={{ justifyContent: "center" }}>
//             {educations.map((edu) => (
//               <Grid item md={4} className="p-4 transform hover:scale-125 ease-in-out duration-500">
//                 <div className="flex relative">

//                   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-700 " style={{ borderColor: "tan" }}>
//                     <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//                       {edu.university}
//                     </h2>
//                     <h1 className="title-font text-lg font-medium text-white mb-3">
//                       {edu.cName}
//                     </h1>
//                     <p className="leading-relaxed text-white">{edu.gpa}</p>
//                   </div>
//                 </div>
//               </Grid>
//             ))}
//           </Grid>
//         </Fade>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Fade } from 'react-reveal'
import SchoolIcon from '@mui/icons-material/School';
import { Grid } from '@mui/material';
export default function Skills() {

  const educations = [{ cName: "B.Tech CSE", university: "Amity University, Noida", year: "2022", gpa: "9.8" },
  { cName: "12th", university: "Haryana School, School", year: "2018", gpa: "9.5" },
  { cName: "12th", university: "Haryana School, School", year: "2018", gpa: "9.5" },

  { cName: "10th", university: "Haryana School, School", year: "2017", gpa: "9.3" }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#233", color: "tan" }}>
      <div>
        <Fade right duration={1500}>
          <div className="flex flex-col w-full mb-20" style={{ color: "tan" }}>
            <SchoolIcon style={{ width: "50vw", height: "10vh" }} className="mx-auto inline-block mb-4" />
            <h1 className="text-5xl font-bold title-font mb-4 mx-auto" style={{ color: "tomato" }}>
              Education
            </h1>

          </div>
        </Fade>
        <Fade left duration={1500}>
          <div className='mx-56'>
            <Grid container spacing={2} style={{ justifyContent: "center" }}>
              {educations.map((edu) => (
                <Grid item xs={4} className='p-8 bg-gray-400 shadow-lg m-20'>
                  <Fade right duration={1500}>
                    <div className="shadow-lg border-b-2 border-blue-500 rounded-md content-center text-center m-5">
                      <h3 className='font-extrabold' style={{ color: "black" }}>{edu.university}</h3>
                      <p style={{ color: "black" }}>{edu.cName} </p>
                      <p style={{ color: "black" }}>{edu.gpa} </p>
                    </div>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </div>
        </Fade>
      </div>
    </div>
  );
}