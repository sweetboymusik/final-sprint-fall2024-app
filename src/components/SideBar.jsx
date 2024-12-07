import React from "react";
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
  return (
    <div className="flex flex-col gap-4 w-32 border-r">
      <Logo />

      <SideBarItem icon={<FaHouse />} label={"Home"} to={"/"} />
      <hr className="w-2/3 self-center" />

      <SideBarItem icon={<FaLocationDot />} label={"Cities"} to={"/cities"} />
      <hr className="w-2/3 self-center" />

      <SideBarItem
        icon={<FaCartFlatbedSuitcase />}
        label={"Airports"}
        to={"/airports"}
      />
      <hr className="w-2/3 self-center" />

      <SideBarItem icon={<FaBuilding />} label={"Airlines"} to={"/airlines"} />
      <hr className="w-2/3 self-center" />

      <SideBarItem icon={<FaPlane />} label={"Aircraft"} to={"/aircraft"} />
      <hr className="w-2/3 self-center" />

      <SideBarItem
        icon={<FaPlaneDeparture />}
        label={"Flights"}
        to={"/flights"}
      />
      <hr className="w-2/3 self-center" />

      <SideBarItem icon={<FaUser />} label={"Passengers"} to={"/passengers"} />
    </div>
  );
}

export default SideBar;
