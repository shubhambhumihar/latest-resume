/* eslint-disable no-unused-vars */
import React from "react";
import one from "../images/one.svg";
import two from "../images/two.svg";
import three from "../images/three.svg";
import four from "../images/four.svg";
import { FaGithub } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Banner = () => {
  return (
    <div className="flex items-baseline h-[90vh] bg-[#eeeeee] ">
      <div className="flex justify-around w-full h-full p-5">
        <div className="flex gap-1 w-[50%] flex-col  justify-start p-6">
          <h1
            style={{ lineHeight: 0.9 }}
            className="font-bold text-[#293147] text-[4rem] mb-6"
          >
            Welcome to my{" "}
            <span className="text-gray-600 text-[3rem]  ">Portfolio</span>
          </h1>
          <p className=" text-gray-500 text-[1rem] font-semibold font-sans ">
            I am Shubham Kumar
          </p>
          <h1 className=" text-green-500 font-semibold italic text-[1.2rem] ">
            MERN STACK DEVELOPER
          </h1>

          <div className="flex gap-4 mt-2">
            <FaGithub className="text-xl cursor-pointer text-neutral-600" />
            <FaLinkedin className="text-xl cursor-pointer text-neutral-600" />
            <SiLeetcode className="text-xl cursor-pointer text-neutral-600" />
          </div>

          <button className="px-[30px] py-[6px] bg-[#1c2130] rounded-md mt-6 text-white self-start">
            Resume
          </button>
        </div>

        <div className="h-full flex items-end ">
          <img className="w-[500px] h-[300px]" src={four} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
