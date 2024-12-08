import React from "react";
import { FaPlusSquare, FaSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function Button({ icon = "", label, onClick }) {
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
    <button onClick={onClick}>
      {getIcon()}
      <span>{label}</span>
    </button>
  );
}

export default Button;
