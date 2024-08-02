import React from "react";
import Profile from "../assets/Profile.jpg";

const Hero = () => {
  return (
    <div className="flex flex-row p-10 gap-10 bg-gray-400">
      <img
        src={Profile}
        alt="Person"
        className="h-auto max-w-md rounded-3xl "
      />
      <div className="flex flex-col justify-center gap-3 ">
        <h1 className="text-lg font-semibold "> Rei Ramadani</h1>
        <div className="text-5xl font-extrabold">
          <span className="text-blue-700">Frontend</span> Developer
        </div>
        <p className="text-sm font-medium">
          Hi, I'm Rei Ramadani, 20years old from Albania and I'm a Frontend
          Developer.
        </p>
        <button
          href="#"
          className="bg-blue-700 w-50 h-50 font-black rounded-3xl"
        >
          CONTACT ME
        </button>
      </div>
    </div>
  );
};

export default Hero;
