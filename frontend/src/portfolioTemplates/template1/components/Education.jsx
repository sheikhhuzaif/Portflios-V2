import SchoolIcon from '@mui/icons-material/School';
import { Grid } from '@mui/material';
import React from "react";

export default function Education() {
    const educations = [{ cName: "B.Tech CSE", university: "Amity University, Noida", year: "2022", gpa: "9.8" },
    { cName: "12th", university: "Haryana School, School", year: "2018", gpa: "9.5" },
    { cName: "10th", university: "Haryana School, School", year: "2017", gpa: "9.3" }
    ]
  return (
    <section id="education" className="text-gray-400 bg-gray-900  body-font  pt-20 pb-28">
      <div className="columns-2  px-10 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <SchoolIcon style={{width:"50vw" , height:"10vh"}} className="mx-auto inline-block mb-4" />
          <h1 className="text-5xl font-bold title-font mb-4 text-white">
            Education
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <Grid container spacing={2} className="justify-center" style={{justifyContent:"center"}}>
          {educations.map((edu) => (
            <Grid item md={4}  className="p-4  transform hover:scale-110 ease-in-out duration-500">
              <div className="flex relative">
                
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-700 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {edu.university}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {edu.cName}
                  </h1>
                  <p className="leading-relaxed">{edu.gpa}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}