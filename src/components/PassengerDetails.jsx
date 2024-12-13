import React from "react";
import PageDetailsItem from "./PageDetailsItem";
import List from "./List";

function PassengerDetails({ passenger }) {
  const url = "/flights";

  return (
    <div className="details-outer">
      <div className="details-inner">
        <h2>Passenger Details</h2>

        <div>
          <PageDetailsItem label={"ID"} value={passenger.id} />
          <PageDetailsItem label={"First Name"} value={passenger.firstName} />
          <PageDetailsItem label={"Last Name"} value={passenger.lastName} />
          <PageDetailsItem
            label={"Phone Number"}
            value={passenger.phoneNumber}
          />
          <PageDetailsItem label={"Email"} value={passenger.email} />
        </div>
      </div>

      <div className="details-inner">
        <h2>City</h2>

        <div>
          <PageDetailsItem label={"ID"} value={passenger.city?.id} />
          <PageDetailsItem label={"Name"} value={passenger.city?.name} />
          <PageDetailsItem
            label={"Province/State"}
            value={passenger.city?.state}
          />
          <PageDetailsItem
            label={"Population"}
            value={passenger.city?.population}
          />
        </div>
      </div>

      <div className="details-table">
        <h2>Flights ({passenger?.flights?.length})</h2>

        <List list={passenger?.flights} url={url} />
      </div>
    </div>
  );
}

export default PassengerDetails;
