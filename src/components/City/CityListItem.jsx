import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CityListItem({ city, heading, onEditCity }) {
  return (
    <div
      className={`flex px-4 py-2 text-sm gap-6 bg-slate-100 items-center  border-t border-slate-200 max-w-screen-xl ${
        heading
          ? "bg-slate-600 text-white font-bold border-none"
          : "bg-slate-100"
      }`}
    >
      <span className="w-20">{city.id}</span>
      <span className="flex-1">{city.name}</span>
      <span className="w-20">{city.state}</span>
      <span className="w-28">{city.population}</span>
      <span className="flex-1">
        {city.airports.length > 0 && !heading ? (
          <div className="flex flex-col">
            {city.airports.map((airport, idx) => (
              <span key={idx}>
                {airport.name} ({airport.code})
              </span>
            ))}
          </div>
        ) : heading ? (
          <span>Airports</span>
        ) : (
          <span>n/a</span>
        )}
      </span>

      {heading ? (
        <span className="w-18">Actions</span>
      ) : (
        <span className="flex gap-4 w-18">
          <button onClick={onEditCity}>
            <FaPenToSquare />
          </button>
          <Link to={`/cities/${city.id}`} state={{ city }}>
            <FaEye />
          </Link>
        </span>
      )}
    </div>
  );
}

export default CityListItem;
