import React from "react";
import { useLocation } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import {
  FaHouse,
  FaCartFlatbedSuitcase,
  FaPlane,
  FaPlaneDeparture,
  FaBuilding,
  FaLocationDot,
  FaUser,
} from "react-icons/fa6";
import Logo from "./Logo";

function SideBar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col gap-4 w-36 border-r h-full">
      <Logo />

      <SideBarItem
        icon={<FaHouse />}
        label={"Home"}
        to={"/"}
        active={isActive("/")}
      />
      <hr className="w-2/3 self-center" />

      <SideBarItem
        icon={<FaLocationDot />}
        label={"Cities"}
        to={"/cities"}
        active={isActive("/cities")}
      />
      <hr className="w-2/3 self-center" />

      <SideBarItem
        icon={<FaCartFlatbedSuitcase />}
        label={"Airports"}
        to={"/airports"}
        active={isActive("/airports")}
      />
      <hr className="w-2/3 self-center" />

      <SideBarItem
        icon={<FaBuilding />}
        label={"Airlines"}
        to={"/airlines"}
        active={isActive("/airlines")}
      />
      <hr className="w-2/3 self-center" />

      <SideBarItem
        icon={<FaPlane />}
        label={"Aircraft"}
        to={"/aircraft"}
        active={isActive("/aircraft")}
      />
      <hr className="w-2/3 self-center" />

      <SideBarItem
        icon={<FaPlaneDeparture />}
        label={"Flights"}
        to={"/flights"}
        active={isActive("/flights")}
      />
      <hr className="w-2/3 self-center" />

      <SideBarItem
        icon={<FaUser />}
        label={"Passengers"}
        to={"/passengers"}
        active={isActive("/passengers")}
      />
    </div>
  );
}

export default SideBar;
