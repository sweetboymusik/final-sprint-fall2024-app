import React from "react";
import PageDetailsItem from "./PageDetailsItem";
import List from "./List";

function AirlineDetails({ airline }) {
  const url = "/airline";

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

      <div className="details-table">
        <h2>Aircraft ({airline?.aircraftList?.length})</h2>
        <List list={airline?.aircraftList} url={url} />
      </div>
    </div>
  );
}

export default AirlineDetails;
