import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Profile from "../assets/Profile.jpg";

const Home = () => {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 md:my-32 border-2 border-blue-500 rounded-lg shadow-lg p-4 bg-white">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:py-10 py-5">
        <dev className="md:w-1/2 mt-5 space-y-2 order-2 md:order-1">
          <span className="md:text-xl">Welcome In My Feed</span>
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, I'm a{" "}
            <ReactTyped
              className="text-blue-500"
              strings={["MERN Developer", "Programmer", "Coder"]}
              typeSpeed={50}
              backSpeed={50}
              loop={true}
            />
          </h1>
          <br />
          <p className="text-sm md:text-md text-justify">
          As a passionate web developer, I thrive on turning complex challenges into innovative solutions. With a strong foundation in advanced C programming, along with intermediate expertise in C++, Java, and Python, I bring a versatile skill set to the table. My advanced proficiency in JavaScript, React.js, and Node.js allows me to build dynamic, responsive, and scalable web applications.
          </p>
          <br />
          {/* social media icons */}
          <div className="space-y-2 flex flex-col justify-center items-center md:items-start">
            <h3>Available on</h3>
            <ul className="flex space-x-4 text-lg">
              <li>
                <a
                  href="https://github.com/Subhadip1001"
                  target="_blank"
                >
                  <FaGithub className="cursor-pointer text-blue-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/subhadip-mandal-110270257/"
                  target="_blank"
                >
                  <FaLinkedin className="cursor-pointer text-blue-500" />
                </a>
              </li>
              <li>
                <a href="https://x.com/Subhadip11335" target="_blank">
                  <TiSocialTwitter className="cursor-pointer text-blue-500" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/subhadip.mandal.75685" target="_blank">
                  <FaFacebook className="cursor-pointer text-blue-500" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/subha.__.dip/ " target="_blank">
                  <RiInstagramFill className="cursor-pointer text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
        </dev>
        <dev className="md:w-1/2 flex justify-center items-center md:ml-60 order-1 md:order-2">
          <img
            className="h-60 w-60 md:h-80 md:w-80 rounded-full border-2 border-blue-500 shadow-lg"
            src={Profile}
          />
        </dev>
      </div>
    </div>
  );
};

export default Home;
