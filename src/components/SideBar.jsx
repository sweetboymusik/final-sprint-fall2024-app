import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/cities"}>Cities</Link>
        <Link to={"/airports"}>Airports</Link>
        <Link to={"/airlines"}>Airlines</Link>
        <Link to={"/aircraft"}>Aircraft</Link>
        <Link to={"/flights"}>Flights</Link>
        <Link to={"/passengers"}>Passengers</Link>
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

export default SideBar;
