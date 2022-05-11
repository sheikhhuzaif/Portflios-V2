import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-reveal'
import Section from '../section/Section.jsx'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import pic from "./photo.jpg";

export default function About({ firstName, basicinfo, address }) {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade right duration={1500}>
          <div className="about-text pt-20 ">
            <h2 className='text-3xl font-bold pb-2'>Who am I?</h2>
            <p>
              I'm {firstName}{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            {basicinfo &&
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                {basicinfo.about}
              </p>
            }
            <h2 className='text-3xl font-bold pb-2 pt-28'>LEARN MORE ABOUT ME ....</h2>
            <div className="flex flex-wrap  ">

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className=" flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Birthday:</p>
                    {basicinfo &&
                      <p> {basicinfo.dob}</p>
                    }
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className=" flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Age:</p>
                    {basicinfo &&
                      <p>{basicinfo.age}</p>
                    }
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className=" flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Phone:</p>
                    {basicinfo &&
                      <p>{basicinfo.phone}</p>
                    }
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className="flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Degree:</p>
                    {basicinfo &&
                      <p>{basicinfo.profession}</p>
                    }
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className="flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Gender:</p>
                    {basicinfo &&
                      <p>{basicinfo.gender}</p>
                    }
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
                <div className="flex p-4 h-full items-center">
                  <span className="flex title-font font-medium text-white">
                    <p className="font-extrabold mb-1 pr-2"> ⚡ Email:</p>
                    {basicinfo &&
                      <p>{basicinfo.email}</p>
                    }
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
              {address &&
                <p>{address.state}, {address.country}</p>
              }
            </div>
          </div>
        </Fade>
        <Fade left duration={1500}>
          <div className="about-text ">
            <img
              className=" scale-75  transform hover:scale-90 ease-in-out duration-500"
              alt="hero"
                src={"https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"}
            />
          </div>
        </Fade>
        {/* <Skills /> */}
      </div>
    </Section>
  );
}

