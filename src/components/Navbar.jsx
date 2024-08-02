import React from "react";
import logo from "../assets/react.svg";
const Navbar = () => {
  return (
    <nav className="bg-blue-700 border-b border-indigo-500 pr-20">
      <div className="flex justify-between">
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
          <a href="#">Contact me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
