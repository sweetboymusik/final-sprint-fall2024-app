import React from "react";
import { Link } from "react-router-dom";

function SideBarItem({ icon, label, to }) {
  return (
    <Link
      to={to}
      className="flex flex-col gap-2 py-4 mx-4 items-center rounded justify-center hover:bg-gray-100"
    >
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

export default SideBarItem;
