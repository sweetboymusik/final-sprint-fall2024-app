import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

function CityListItem({ city, heading }) {
  return (
    <div className="grid grid-cols-6 px-4 py-2 text-sm gap-6 bg-slate-100 justify-evenly items-center  border-t border-slate-200">
      <span>{city.id}</span>
      <span>{city.name}</span>
      <span>{city.state}</span>
      <span>{city.population}</span>
      <span>
        {city.airports.length > 0 ? (
          <span>{city.airports}</span>
        ) : (
          <span>n/a</span>
        )}
      </span>

      {heading ? (
        <span>Actions</span>
      ) : (
        <span className="flex gap-4">
          <button>
            <FaPenToSquare />
          </button>
          <button>
            <FaEye />
          </button>
        </span>
      )}
    </div>
  );
}

export default CityListItem;
