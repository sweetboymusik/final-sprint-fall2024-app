import React from "react";
import PageDetailsItem from "./PageDetailsItem";

function AirlineDetails({ airline }) {
  return (
    <div className="details-outer">
      <div className="details-inner">
        <h2>Airline Details</h2>

        <div>
          <PageDetailsItem label={"ID"} value={airline.id} />
          <PageDetailsItem label={"Name"} value={airline.name} />
          <PageDetailsItem label={"Country"} value={airline.country} />
        </div>
      </div>

      <div className="details-inner">
        <h2>Aircraft</h2>

        <div className="details-nested">
          {airline?.aircraftList?.map((craft) => {
            return (
              <div key={craft.id} className="flex flex-col">
                <PageDetailsItem label={"ID"} value={craft.id} />
                <PageDetailsItem label={"Type"} value={craft.type} />
                <PageDetailsItem
                  label={"Capicity"}
                  value={craft.passengerCapacity}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AirlineDetails;
