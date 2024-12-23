import React from "react";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <div className="p-2 pr-8 py-4 bg-primary-800 w-36 h-28">
      <img
        src={logo}
        alt="page logo"
        className="invert w-full h-full object-contain"
      />
    </div>
  );
}

export default Logo;
