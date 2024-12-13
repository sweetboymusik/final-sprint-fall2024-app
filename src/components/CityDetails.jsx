import React from "react";
import PageDetailsItem from "./PageDetailsItem";
import List from "./List";

function CityDetails({ city }) {
  const url = "/airports";

  return (
    <div className="details-outer">
      <div className="details-inner">
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

      <div className="details-table">
        <h2>Airports ({city?.airports?.length})</h2>
        <List list={city?.airports} url={url} />
      </div>
    </div>
  );
}

export default CityDetails;
