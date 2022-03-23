import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function About2() {
  return (
    // border-b-8 rounded-full
    <section id="about2" className=" body-font flex flex-col h-screen bg-gray-400">
      <div className="columns-2 px-10 py-20 mx-auto text-center lg:px-40  ">
        <div className="flex flex-col mb-20 mr-5 w-full ">
          <PersonIcon className="mx-auto inline-block mb-4" style={{ width: "50vw", height: "10vh" }} />
          <h1 className="text-5xl font-bold title-font mb-4 ">
            LEARN MORE ABOUT ME
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p> */}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

          <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <ArrowForwardIosIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="flex title-font font-medium text-white">
                <p className="font-extrabold mb-1 pr-2">Birthday:</p>
                <p> June 8, 2000</p>
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <ArrowForwardIosIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="flex title-font font-medium text-white">
                <p className="font-extrabold mb-1 pr-2">Age:</p>
                <p>22</p>
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <ArrowForwardIosIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="flex title-font font-medium text-white">
                <p className="font-extrabold mb-1 pr-2">Phone:</p>
                <p>1234567879</p>
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <ArrowForwardIosIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="flex title-font font-medium text-white">
                <p className="font-extrabold mb-1 pr-2">Degree:</p>
                <p>B.Tech</p>
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <ArrowForwardIosIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="flex title-font font-medium text-white">
                <p className="font-extrabold mb-1 pr-2">Gender:</p>
                <p>Male</p>
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full transform hover:scale-125 ease-in-out duration-500">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <ArrowForwardIosIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="flex title-font font-medium text-white">
                <p className="font-extrabold mb-1 pr-2">Email:</p>
                <p>June 8, 2000</p>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}