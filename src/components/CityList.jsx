import React from "react";
import CityListItem from "./CityListItem";

const headings = {
  id: "ID",
  name: "Name",
  state: "State",
  population: "Population",
  airports: "Airports",
};

function CityList({ cities }) {
  return (
    <div className="flex flex-col mx-10 my-2">
      <CityListItem key={"header"} city={headings} heading={true} />

      {cities.map((city) => (
        <CityListItem key={city.id} city={city} />
      ))}
    </div>
  );
}

export default CityList;
