import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between px-10 bg-blue-700 h-40 items-center ">
      <div className="text-2xl font-bold"> Made by Rei Ramadani</div>
      <div className="flex flex-row gap-5">
        <a href="https://github.com/RamadaniRei/Portfolio" target="_blank">
          <img src="/src/assets/github.png" alt="git" className="w-8 h-full" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img
            src="/src/assets/facebook.png"
            alt="facebook"
            className="w-8 h-full"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img
            src="/src/assets/instagram.png"
            alt="instagram"
            className="w-8 h-full"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
