import React from "react";
import Profile from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="flex flex-row p-10 gap-10 bg-gray-400 w-full h-full">
      <img src={Profile} alt="Person" className="h-auto max-w-2xl" />
      <div className="flex flex-col justify-center gap-3 ">
        <h1 className="text-2xl font-semibold "> Rei Ramadani</h1>
        <div className="text-5xl font-extrabold">
          <span className="text-blue-700">Frontend</span> Developer
        </div>
        <p className="text-md">
          Hi, I'm Rei Ramadani, 20years old based on Tirana, Albania and I'm a
          Frontend Developer.
        </p>
        <div className="flex justify-start font-black">
          <button className="p-3 bg-blue-700 rounded-sm" href="#">
            CONTACT ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
