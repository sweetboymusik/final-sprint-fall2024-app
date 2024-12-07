import React from "react";
import PageDetailsItem from "./PageDetailsItem";

function CityDetails({ city }) {
  console.log(city.name);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2>City Details</h2>

        <div>
          <PageDetailsItem label={"ID"} value={city.id} />
          <PageDetailsItem label={"Name"} value={city.name} />
          <PageDetailsItem label={"Province/State"} value={city.state} />
          <PageDetailsItem label={"Population"} value={city.population} />
          <PageDetailsItem
            label={"No. of Airports"}
            value={city.airports?.length}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2>Airports</h2>

        <div className="flex flex-col gap-4">
          {city?.airports?.map((airport) => {
            return (
              <div key={airport.id} className="flex flex-col">
                <PageDetailsItem label={"ID"} value={airport.id} />
                <PageDetailsItem label={"Name"} value={airport.name} />
                <PageDetailsItem label={"Code"} value={airport.code} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CityDetails;
