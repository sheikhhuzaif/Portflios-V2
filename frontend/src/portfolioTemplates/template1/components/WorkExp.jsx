import { Grid } from '@mui/material';
import React from "react";
import WorkIcon from '@mui/icons-material/Work';

export default function WorkExp({experience}) {

  return (
    <section id="workExp" className=" body-font bg-gray-900  min-h-screen">
      <div className="columns-2  px-10 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <WorkIcon style={{width:"50vw" , height:"10vh"}} className="mx-auto inline-block mb-4" />
          <h1 className="text-5xl font-bold title-font mb-4 ">
            Work Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <Grid container spacing={2} className="justify-center" style={{justifyContent:"center"}}>
          {experience && experience.map((exp) => (
            <Grid item md={4}  className="p-4 transform hover:scale-125 ease-in-out duration-500">
              <div className="flex relative">
                
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-600 ">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-green-400 mb-1">
                    {exp.company}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {exp.title}
                  </h1>
                  <p className="leading-relaxed">{exp.startDate} to {exp.endDate}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}