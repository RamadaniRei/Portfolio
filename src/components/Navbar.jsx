import React from "react";
import logo from "../assets/react.svg";
const Navbar = () => {
  return (
    <nav className="flex justify-between w-full p-3 bg-blue-700">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-20">
        <div className="text-white decoration-white">
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">Projects</a>
        </div>
        <div>
          <a href="#">Skills</a>
        </div>
      </div>
      <div>
        <a href="#" className="pr-5">
          Contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
