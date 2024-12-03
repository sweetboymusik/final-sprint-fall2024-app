import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/cities"}>Cities</Link>
      </div>

      <div className="flex border-2 border-slate-300 rounded relative items-center">
        <div className="absolute p-2">
          <FaMagnifyingGlass />
        </div>
        <input type="text" className="pl-8" />
      </div>
    </div>
  );
}

export default NavBar;
