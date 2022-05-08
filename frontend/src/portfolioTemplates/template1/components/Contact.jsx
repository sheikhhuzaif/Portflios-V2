import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useMutation, gql } from "@apollo/client";

const getSocialLinks = (socials) => {
  return (
    <div className="flex">
      {
        socials && socials.map((social) => (
          <div>
          {social.platform == 'Facebook'? <a href={"https://facebook.com/" + social.userName} target="_blank" className="p-5 transform hover:scale-125 ease-in-out duration-500"><FacebookIcon /></a>: null }
          {social.platform == 'Linkedn'? <a href={"https://linkedin.com/" + social.userName} target="_blank" className="p-5 transform hover:scale-125 ease-in-out duration-500"><LinkedInIcon /></a>: null }
          {social.platform == 'Instagram'? <a href={"http://instagram.com/" + social.userName} target="_blank" className="p-5 transform hover:scale-125 ease-in-out duration-500"><InstagramIcon /></a>: null }
          {social.platform == 'Twitter'? <a href={"https://twitter.com/" + social.userName} target="_blank" className="p-5 transform hover:scale-125 ease-in-out duration-500"><TwitterIcon /></a>: null }
          </div>
        ))
      }
    </div>
  )
}

export default function Contact({ socials, email }) {


  const [Mail, setMail] = React.useState(
    { subject: '', email: '', message: ''},
  );

  const SEND_MAIL = gql`
  mutation sendMail($subject: String, $receiver: String, $sender: String, $message: String){
  sendMail(
      subject: $subject,
      receiver: $receiver,
      sender: $sender,
      message: $message,
  )
  {
    success
  }
  }
`

const [sendMail, { data1 }] = useMutation(SEND_MAIL, {
  variables: {}
});

const handleMutation = (e) => {
  e.preventDefault();
  sendMail({
    variables: {
      subject: Mail.subject,
      receiver: email,
      sender: Mail.email,
      message: Mail.message,
    }
  });
}
function handleChange(evt) {
  const value = evt.target.value;
  setMail({ ...Mail, [evt.target.name]: value });
}

  return (
    <section id="contact" className="  min-h-screen pt-56">
      <div className="container py-20 ">
        <div className="flex flex-col mb-20  items-center justify-center">
          <EmailIcon className="mb-4" style={{ width: "50vw", height: "10vh" }} />
          <h1 className="text-4xl font-medium title-font mb-4 ">
            Contact me!
          </h1>
            {getSocialLinks(socials)}
        </div>

        <form
          name="contact"
          className="flex flex-col w-full">
          <h2 className=" sm:text-4xl text-3xl mb-1 font-medium title-font">
            Send me a message
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm ">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={Mail.subject}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={Mail.email}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              value={Mail.message}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            onClick={handleMutation}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}