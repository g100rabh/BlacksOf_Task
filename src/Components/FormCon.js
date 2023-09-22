import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const FormCon = () => {
  return (
    <form
      className="flex flex-col justify-between items-start p-4 rounded-2xl bg-gradient-to-b from-gray-300 via-gray-300 to-gray-700"
      style={{ width: "45%" }}
    >
      <span className="pt-6">
        <h1 className="font-bold text-xl">Fill out the form.</h1>
        <p className="text-sm">
          Our team will touch base with you within 24 hours.
        </p>
      </span>

      <div className="flex justify-between w-full pt-2 pb-2">
        <input
          type="text"
          placeholder="Full Name*"
          required
          className="h-8 border-b border-black bg-transparent focus:outline-none text-black pt-6 pb-6 placeholder-black"
          style={{ width: "45%" }}
        />
        <input
          type="email"
          placeholder="Email*"
          required
          className="h-8 border-b border-black bg-transparent focus:outline-none text-black pt-6 pb-6 placeholder-black"
          style={{ width: "45%" }}
        />
      </div>
      <div className="flex justify-between w-full pt-2 pb-2 ">
        <input
          type="text"
          placeholder="Country"
          required
          className="h-8 border-b border-black bg-transparent focus:outline-none text-black pt-6 pb-6 placeholder-black"
          style={{ width: "45%" }}
        />
        <input
          type="text"
          placeholder="Contact"
          required
          className="h-8 border-b border-black bg-transparent focus:outline-none text-black pt-6 pb-6 placeholder-black"
          style={{ width: "45%" }}
        />
      </div>

      <span className="flex justify-between w-full pt-2 pb-2">
        <input
          type="text"
          placeholder="Tell us your requirement*"
          required
          className="bg-transparent w-full h-8 border-b border-black border-solid focus:outline-none text-black pt-6 pb-6 placeholder-black"
        />
      </span>
      <div className="flex justify-between w-1/3 text-white pt-2 pb-2">
        <button className="w-24 h-10 flex items-center justify-center border-2 bg-black border-gray-700 hover:bg-blue-400 px-1.5 py-1.5 rounded-3xl mx-auto">
          Submit
        </button>
        <button className="w-10 h-10 flex items-center justify-center border-2 bg-black border-gray-700 hover:bg-gray-300 px-1.5 py-1.5 rounded-3xl mx-auto">
          <AiOutlineArrowRight />
        </button>
      </div>
    </form>
  );
};

export default FormCon;
