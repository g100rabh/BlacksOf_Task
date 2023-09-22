import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import "./Footer.css"; // Create a separate CSS file for styling

const Footer = () => {
  useEffect(() => {
    const marqueeElement = document.getElementById("marquee");

    if (marqueeElement) {
      marqueeElement.style.animationPlayState = "running";
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-gray-400">Leading the charge for Industries!</h1>
      <div className="marquee">
        {[...Array(30).keys()].map((index) => (
          <div
            key={index}
            className="marquee-item w-24 rounded-lg flex items-center align-middle h-10 bg-white m-8 p-2"
          >
            <img src={logo} alt="Logo" className="h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
