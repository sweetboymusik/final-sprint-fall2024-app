import React from "react";
import { FaPlusSquare, FaSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function Button({ icon = "", label, onClick, type = "submit" }) {
  const getIcon = function () {
    switch (icon) {
      case "edit":
        return <FaPencil />;
      case "submit":
        return <FaSave />;
      case "add":
        return <FaPlusSquare />;
      default:
        break;
    }
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className="flex gap-2 items-center text-white bg-primary-800 p-4 rounded h-10"
    >
      {getIcon()}
      <span>{label}</span>
    </button>
  );
}

export default Button;
