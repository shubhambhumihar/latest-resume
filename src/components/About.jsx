/* eslint-disable no-unused-vars */
import React from "react";
import { FaCode, FaReact } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdSyncProblem } from "react-icons/md";

const About = () => {
  return (
    <>
      <h1 className="text-3xl shadow-2xl shadow-gray-400 rounded-xl  w-[200px] mx-auto p-3 bg-white text-gray-700 font-bold text-center ">
        About Us
      </h1>
      <div className="flex justify-center gap-6 items-center  h-[100vh] ">
        <div data-aos="flip-up" className="w-[50%]">
          <img
            className="w-[50%] mx-auto"
            src="https://portfolio-shubham2023.netlify.app/assets/avatar-b8676a04.png"
            alt=""
          />
        </div>

        <div data-aos="flip-down" className="border w-[50%]">
          <h1 className="text-gray-800 font-bold text-2xl  rounded-xl ">
            Shubham Kumar
          </h1>
          <p className="text-gray-800  text-md font-semibold  rounded-xl ">
            sk@gmail.com
          </p>

          <div className="my-10 flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <FaCode className="text-emerald-500 text-xl " />
              <p className="text-gray-800  text-md font-semibold  rounded-xl ">
                Passionate Web Developer
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <SiLeetcode className="text-yellow-500 text-xl " />
              <p className="text-gray-800  text-md font-semibold  rounded-xl ">
                LeetCode Enthusiast
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <MdSyncProblem className="text-red-500 text-xl " />
              <p className="text-gray-800  text-md font-semibold  rounded-xl ">
                Data Structures and Algorithms (DSA) Enthusiast
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaReact className="text-gray-900 text-xl " />
              <p className="text-gray-800  text-md font-semibold  rounded-xl ">
                MERN Stack Developer
              </p>
            </div>

            <div>
              <button className="w-[200px] py-2 mt-6 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 hover:scale-105 duration-700">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
