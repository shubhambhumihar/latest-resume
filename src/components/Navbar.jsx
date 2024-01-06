/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-[#1c2130]  text-white justify-around items-center h-[10vh]">
      <div>
        <h1 className="text-2xl font-bold text-[#eeeeee] cursor-pointer">
          SHUBHAM
        </h1>
      </div>

      <div className="links">
        <ul className="flex gap-6">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
