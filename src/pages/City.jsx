import React from "react";
import CityDetails from "../components/CityDetails";
import NavBar from "../components/NavBar";

function City() {
  return (
    <div className="flex flex-col gap-6 m-10">
      <NavBar />
      <h1 className="text-3xl">City Details</h1>
      <CityDetails />
    </div>
  );
}

export default City;
