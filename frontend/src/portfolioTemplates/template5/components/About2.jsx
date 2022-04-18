import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import pic from "./photo.jpg";
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-reveal'

export default function About2() {
  return (
    // border-b-8 rounded-full
    <div className="min-h-screen flex justify-center items-center" style={{ backgroundColor: "#233", color: "tan" }}>
       <Fade right duration={1500} >
          <div className="about-text" style={{ color: "tan" }}>
            <h2 className='text-3xl font-bold pb-2' style={{ color: "tomato" }}>Hi, I'm Mihir 😄</h2>
           
            <p style={{ color: "tan" }}>
              {' '}
              <span role="img" aria-label="lightning" >
                
              </span>{' '}
            </p>
            <p style={{ color: "tan" }}>
              <span role="img" aria-label="lightning" >
                ⚡
              </span>{' '}
              I'm a software engineer focusing on Front-End web and emerging
              tech such as VR, AR and Blockchain.
            </p>
            <p style={{ color: "tan" }}>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              You can find me working with UE5, JavaScript, React, Vue, Node,
              Apollo and Gatsby.
            </p>
            <div className="typewriter">
              <p className="typewriter-start" style={{ color: "tan" }}>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'exercising',
                    'solving complex problems',
                    'skiing',
                    'fixing hard-to-fix bugs',
                    'trying new things',
                    'collaborating with others',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <h2 className='text-3xl font-bold pb-2 pt-28' style={{ color: "tomato" }}>LEARN MORE ABOUT ME ....</h2>
            <div className="flex flex-wrap  ">

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className=" flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Birthday:</p>
                    <p> June 8, 2000</p>
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className=" flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Age:</p>
                    <p>22</p>
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className=" flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Phone:</p>
                    <p>1234567879</p>
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className="flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Degree:</p>
                    <p>B.Tech</p>
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className="flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Gender:</p>
                    <p>Male</p>
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className="flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Email:</p>
                    <p>June 8, 2000</p>
                  </span>
                </div>
              </div>

            </div>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Shimla, Haryana</p>
            </div>
          </div>
        </Fade>
        <Fade left duration={1500}>
          <div className="about-text content-end">
            <img
              className=" scale-75  transform hover:scale-90 ease-in-out duration-500 "
              alt="hero"
              src={pic}
            />
          </div>
        </Fade>
    </div>
  );
}