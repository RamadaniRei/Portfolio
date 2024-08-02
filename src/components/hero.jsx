import React from "react";
import Profile from "../assets/Profile.jpg";

const Hero = () => {
  return (
    <div className="flex-row">
      <img src={Profile} alt="Person" className="h-auto max-w-md " />
      <div className="flex-col ">
        <h2> Rei Ramadani</h2>
        <div> Frontend Developer</div>
        <p>
          I'm Rei Ramadani, 20years old from Albania.I'm a Frontend Developer.{" "}
        </p>
        <button href="#" className="bg-red-50 w-50 h-50"></button>
      </div>
    </div>
  );
};

export default Hero;
