import { Grid } from '@mui/material';
import React from "react";
import WorkIcon from '@mui/icons-material/Work';
// import { Fade } from 'react-reveal'
const Fade = require("react-reveal/Fade")

export default function WorkExp() {
  const experience = [{ title: "CEO", company: "Google", year: "2019-" },
  { title: "Vice ceo", company: "Apple", year: "2016-2019" },
  { title: "Senior Manager", company: "Microsoft", year: "2010-2016" },
  ]
  return (
    <section id="workExp" className=" body-font min-h-screen" style={{ backgroundColor: "#233" }}>
      <div className="columns-2  text-center ">
        <Fade right duration={1500}>
          <div className="flex flex-col w-full mb-20" style={{ color: "tan" }}>
            <WorkIcon style={{ width: "50vw", height: "10vh" }} className="mx-auto inline-block mb-4" />
            <h1 className="text-5xl font-bold title-font mb-4 " style={{ color: "tomato" }}>
              Work Experience
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ color: "tan" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </p>
          </div>
        </Fade>
        <Fade left duration={1500}>
          <Grid container spacing={3} className="justify-center" style={{ justifyContent: "center" }}>
            {experience.map((exp) => (
              <Grid item md={4} className="p-4 transform hover:scale-125 ease-in-out duration-500" style={{ borderColor: "tan" }}>
                <div className="flex relative">

                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-600 " style={{ borderColor: "tan" }}>
                    <h2 className="tracking-widest text-2xl title-font font-medium mb-1" style={{ color: "tomato" }}>
                      {exp.company}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {exp.title}
                    </h1>
                    <p className="leading-relaxed text-white">{exp.year}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </div>
    </section>
  );
}