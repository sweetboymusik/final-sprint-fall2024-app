import React from "react";
import PageDetailsItem from "./PageDetailsItem";

function PassengerDetails({ passenger }) {
  console.log(passenger);
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

        <div className="details-inner">
          <h2>Flights</h2>

          <div className="details-nested">
            {passenger?.flights?.map((flight) => {
              return (
                <div key={flight.id} className="flex flex-col">
                  <PageDetailsItem label={"ID"} value={flight.id} />
                  <PageDetailsItem
                    label={"Departure"}
                    value={flight.departure}
                  />
                  <PageDetailsItem label={"Arrival"} value={flight.arrival} />
                  <PageDetailsItem
                    label={"Origin"}
                    value={flight.origin.name}
                  />
                  <PageDetailsItem
                    label={"Destination"}
                    value={flight.destination.name}
                  />
                  <PageDetailsItem
                    label={"Airline"}
                    value={flight.aircraft.airline.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassengerDetails;
