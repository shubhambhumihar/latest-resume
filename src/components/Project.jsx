/* eslint-disable no-unused-vars */
import React from "react";
import s1 from "../images/s1.svg";
import s2 from "../images/s2.svg";
import s3 from "../images/s3.svg";
import s4 from "../images/s4.svg";
import s5 from "../images/s5.svg";
const Project = () => {
  return (
    <>
      <h1 className="text-3xl shadow-2xl shadow-gray-400 rounded-xl mt-8 w-[200px] mx-auto p-3 bg-white text-gray-700 font-bold text-center mb-11">
        Projects
      </h1>
      <div className=" h-[100vh] w-[100%] flex gap-2 justify-around self-start ">
        <div
          data-aos="zoom-out-left"
          className=" cshadow  cursor-pointer  br w-[25%] flex  flex-col self-start border bg-gray-900 h-[40vh] "
        >
          <div className="w-[40%] mx-auto px-2 pt-2">
            <img className="w-full" src={s1} alt="" />
          </div>
          <div className="p-3 mt-6">
            <h1 className="font-bold text-right text-gray-200 text-md font-sans">
              Social App
            </h1>
            <p className="text-right text-gray-300 text-xs font-sans">
              3oct - 8dec
            </p>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className=" mt-20  cshadow  cursor-pointer  br w-[25%] flex  flex-col self-start border bg-gray-900 h-[40vh] shadow-md shadow-teal-700"
        >
          <div className="w-[40%] mx-auto px-2 pt-2">
            <img className="w-full" src={s3} alt="" />
          </div>
          <div className="p-3 mt-6">
            <h1 className="font-bold text-right text-gray-200 text-md font-sans">
              MOVIE TIME
            </h1>
            <p className="text-right text-gray-300 text-xs font-sans">
              3oct - 8dec
            </p>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className=" br  cshadow  cursor-pointer  w-[25%] flex  flex-col self-start border bg-gray-900 h-[40vh] shadow-md shadow-teal-700"
        >
          <div className="w-[40%] mx-auto px-2 pt-2">
            <img className="w-full" src={s4} alt="" />
          </div>
          <div className="p-3 mt-6">
            <h1 className="font-bold text-right text-gray-200 text-md font-sans">
              Ecommerce
            </h1>
            <p className="text-right text-gray-300 text-xs font-sans">
              3oct - 8dec
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-right"
          className=" br mt-16 cursor-pointer  cshadow w-[25%] flex  flex-col self-start border bg-gray-900 h-[40vh] shadow-md shadow-teal-700"
        >
          <div className="w-[40%] mx-auto px-2 pt-2">
            <img className="w-full" src={s5} alt="" />
          </div>
          <div className="p-3 mt-6">
            <h1 className="font-bold text-right text-gray-200 text-md font-sans">
              Chatting App
            </h1>
            <p className="text-right text-gray-300 text-xs font-sans">
              3oct - 8dec
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
