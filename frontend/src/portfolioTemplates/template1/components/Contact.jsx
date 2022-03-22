import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <section id="contact" className=" pt-20 pb-56">
      <div className="container py-20 mx-auto flex sm:flex-nowrap flex-wrap">


        <div className="flex flex-col mb-20  items-center justify-center">
          <EmailIcon className="mb-4" style={{ width: "50vw", height: "10vh" }} />
          <h1 className="text-4xl font-medium title-font mb-4 text-white">
            Contact me!
          </h1>
          <div className="flex">
            <a href="" className="p-5 transform hover:scale-125 ease-in-out duration-500"><FacebookIcon /></a>
            <a href="" className="p-5 transform hover:scale-125 ease-in-out duration-500"><InstagramIcon /></a>
            <a href="" className="p-5 transform hover:scale-125 ease-in-out duration-500"><TwitterIcon /></a>
            <a href="" className="p-5 transform hover:scale-125 ease-in-out duration-500"><LinkedInIcon /></a>
          </div>
        </div>

        <form
          name="contact"
          className="flex flex-col w-full">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Send me a message
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}