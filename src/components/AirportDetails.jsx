import React from "react";
import PageDetailsItem from "./PageDetailsItem";

function AirportDetails({ airport }) {
  return (
    <div className="details-outer">
      <div className="details-inner">
        <h2>Airport Details</h2>

        <div>
          <PageDetailsItem label={"ID"} value={airport.id} />
          <PageDetailsItem label={"Name"} value={airport.name} />
          <PageDetailsItem label={"Code"} value={airport.code} />
        </div>
      </div>

      <div className="details-inner">
        <h2>City</h2>

        <div>
          <PageDetailsItem label={"ID"} value={airport.city?.id} />
          <PageDetailsItem label={"Name"} value={airport.city?.name} />
          <PageDetailsItem
            label={"Provice/State"}
            value={airport.city?.state}
          />
          <PageDetailsItem
            label={"Population"}
            value={airport.city?.population}
          />
        </div>
      </div>
    </div>
  );
}

export default AirportDetails;
