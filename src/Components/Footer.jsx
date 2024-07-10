import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import {FiTwitter,FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram,AiOutlineYoutube,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="mt-20">
      <section id="contact">
      <div className="download w-6/7  py-10 rounded-xl">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="textxl mt-20 text-3xl font-bold text-yellow-500">
            ENROLL NOW
          </h1>
          
        </div>
      </div>
      <footer className="w-90/91 bg-gray-800 text-white">
        <div className="w-11/12 md:w-1/3 m-auto flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl font-bold">E-LEARNING</h1>
          <ul className="flex items-cener space-x-5 text-sm">
            <li>Home</li>
            <li>Mentors</li>
            <li>About</li>
          </ul>
          <div className="icons flex items-center space-x-4">
                <FiTwitter size={"1.5rem"}/>
                <AiOutlineInstagram size={"2rem"}/>
                <AiOutlineYoutube size={"2rem"}/>
                <FiFacebook size={"2rem"}/>
                <AiFillGithub size={"1.5rem"}/>
          </div>
          <p className="text-sm text-gray-400 p-5">Empower your learning journey.Browse our course catalog and start unlocking your potential today! Join a trusted platform used by educators and learners worldwide.For any questions, visit our Help Center or view our Accessibility Statement.</p>
        </div>
      </footer>
      </section>
    </div>
  );
};

export default Footer;