import React from "react";
import { FaPenToSquare } from "react-icons/fa6";

function AirportListItem({ airport, heading, onEditAirport }) {
  return (
    <div
      className={`flex px-4 py-2 text-sm gap-6 bg-slate-100 items-center  border-t border-slate-200 max-w-screen-xl ${
        heading
          ? "bg-slate-600 text-white font-bold border-none"
          : "bg-slate-100"
      }`}
    >
      <span className="w-20">{airport.id}</span>
      <span className="flex-1">{airport.name}</span>
      <span className="w-20">{airport.code}</span>
      <span className="w-28">{airport.city}</span>
      <span className="flex-1"></span>

      {heading ? (
        <span className="w-16">Actions</span>
      ) : (
        <span className="w-16">
          <button onClick={onEditAirport}>
            <FaPenToSquare />
          </button>
        </span>
      )}
    </div>
  );
}

export default AirportListItem;
