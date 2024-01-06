/* eslint-disable no-unused-vars */
import React from "react";
import img from "../images/three.svg";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center  h-[100vh] items-center ">
        <div data-aos="zoom-out-right" className=" flex justify-center">
          <img className="w-[300px]" src={img} alt="" />
        </div>

        <form
          data-aos="zoom-out-left"
          className="w-[50%]  border-emerald-600  flex flex-col items-center gap-3 p-10 "
        >
          <h1 className="shadow-2xl shadow-gray-400 rounded-xl bg-white px-4 py-2 text-3xl  text-gray-700 text-left my-9 font-bold ">
            Contact Me
          </h1>
          <div className="w-[50%] bg-slate-500 h-[10vh] rounded-lg">
            <input
              className="w-[100%] bg-slate-500 outline-none  h-full px-3 text-white rounded-lg"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-[50%] bg-slate-500 h-[10vh] rounded-lg">
            <input
              className="w-[100%] bg-slate-500 outline-none h-full px-3 text-white rounded-lg"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="w-[50%] bg-slate-500  rounded-lg">
            <textarea
              className="w-full bg-slate-500 p-3 rounded-lg outline-none"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Comment"
            ></textarea>
          </div>

          <button className="px-[30px] mt-5 py-[6px]   bg-slate-900 text-white rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
