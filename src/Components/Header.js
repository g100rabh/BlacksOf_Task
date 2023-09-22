import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import image from "../assets/image.png";

const Header = () => {
  return (
    <div className="w-3/5 border-2 border-transparent flex justify-between items-center ps-10 pe-10 mt-4 mb-4 ms-16 me-16 text-white">
      <span className="flex align-middle items-center">
        <img src={image} alt="logo" />
        <h1 className="font-bold">TECH</h1>
      </span>
      <ul className="w-1/4 text-xs text-gray-400 flex justify-between font-sans">
        <li>Solutions</li>
        <li>Services</li>
        <li>About</li>
        <li>Culture</li>
      </ul>
      <span className="w-1/4 flex justify-between">
        <button className="w-32 h-12 flex items-center justify-center border-2 bg-slate-950 border-gray-700 hover:bg-blue-400 px-1.5 py-1.5 rounded-3xl mx-auto">
          Contact us
        </button>
        <button className="w-12 h-12 flex items-center justify-center border-2 bg-slate-950 border-gray-700 hover:bg-gray-300 px-1.5 py-1.5 rounded-3xl mx-auto">
          <AiOutlineArrowRight />
        </button>
      </span>
    </div>
  );
};

export default Header;
