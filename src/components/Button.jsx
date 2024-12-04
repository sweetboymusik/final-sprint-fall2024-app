import React from "react";
import { FaPlusCircle } from "react-icons/fa";

function Button({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="flex gap-4 justify-center items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      <FaPlusCircle />
      <span>{label}</span>
    </button>
  );
}

export default Button;
