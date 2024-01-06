/* eslint-disable no-unused-vars */
import React from "react";

import html from "../images/hml.svg";
import css from "../images/csssvg.svg";
import js from "../images/jssvg.svg";
import react from "../images/reactsvg.svg";
import nodejs from "../images/nodejs.svg";
import java from "../images/javasvg.svg";
import ts from "../images/tssvg.svg";

const Skills = () => {
  return (
    <div className="p-10 h-[100vh]">
      <h1 className="text-3xl shadow-2xl shadow-gray-400 rounded-xl  w-[200px] mx-auto p-3 bg-white text-gray-700 font-bold text-center mb-11">
        Skills
      </h1>

      <div
        data-aos="fade-right"
        className=" w-[70%] mx-auto bg-slate-900 rounded-xl p-10 "
      >
        <div className="flex gap-7 justify-center items-center flex-wrap px-20">
          <div className="  ">
            <img className="w-[100px]" src={html} alt="" />
          </div>
          <div className="  ">
            <img className="w-[100px]" src={css} alt="" />
          </div>
          <div className=" ">
            <img
              className="w-[100px]"
              src="https://www.svgrepo.com/show/373703/js.svg"
              alt=""
            />
          </div>
          <div className="">
            <img className="w-[100px]" src={react} alt="" />
          </div>
          <div className=" ">
            <img className="w-[100px]" src={nodejs} alt="" />
          </div>
          <div className=" ">
            <img className="w-[100px]" src={java} alt="" />
          </div>
          <div className=" ">
            <img className="w-[100px]" src={ts} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
