import React from "react";
import PageDetailsItem from "./PageDetailsItem";

function AircraftDetails({ aircraft }) {
  return (
    <div className="details-outer">
      <div className="details-inner">
        <h2>Aircraft Details</h2>

        <div>
          <PageDetailsItem label={"ID"} value={aircraft.id} />
          <PageDetailsItem label={"Type"} value={aircraft.type} />
          <PageDetailsItem
            label={"Capacity"}
            value={aircraft.passengerCapacity}
          />
        </div>
      </div>

      <div className="details-inner">
        <h2>Airline</h2>

        <div>
          <PageDetailsItem label={"ID"} value={aircraft.airline?.id} />
          <PageDetailsItem label={"Name"} value={aircraft.airline?.name} />
          <PageDetailsItem
            label={"Country"}
            value={aircraft.airline?.country}
          />
        </div>
      </div>
    </div>
  );
}

export default AircraftDetails;
