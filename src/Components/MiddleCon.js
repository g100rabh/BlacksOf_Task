import React from "react";
import FormCon from "./FormCon";

const MiddleCon = () => {
  return (
    <div className="w-2/3 m-12 flex justify-between ">
      <div className="w-1/2 h-72 p-2 text-white flex flex-col justify-between pe-12 ps-10">
        <p className="text-white text-4xl">
          Searching for <strong>Augmented Development</strong> Teams to steer
          your product towards triumph?"
        </p>
        <ul className="w-full flex justify-between">
          <li className="w-1/4">
            <strong className="text-2xl">50+</strong>
            <p className="text-xs text-gray-400">Clients</p>
          </li>
          <li className="w-1/3">
            <strong className="text-2xl">80+</strong>
            <p className="text-xs text-gray-400">
              Projects succesfully completed
            </p>
          </li>
          <li className="w-1/2">
            <strong className="text-2xl">60%</strong>
            <p className="text-xs text-gray-400">
              of the clients converted into long term engagement partners
            </p>
          </li>
        </ul>
      </div>

      <FormCon />
    </div>
  );
};

export default MiddleCon;
