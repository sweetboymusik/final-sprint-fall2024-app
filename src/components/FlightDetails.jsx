import React from "react";
import PageDetailsItem from "./PageDetailsItem";

function FlightDetails({ flight }) {
  console.log(flight);
  return (
    <div className="details-outer">
      <div className="details-inner">
        <h2>Flight Details</h2>

        <div>
          <PageDetailsItem label={"ID"} value={flight.id} />
          <PageDetailsItem label={"Arrival"} value={flight.arrival} />
          <PageDetailsItem label={"Departure"} value={flight.departure} />
          <PageDetailsItem
            label={"Number of Passengers"}
            value={flight.numberOfPassengers}
          />
        </div>
      </div>

      <div className="details-inner">
        <h2>Origin Airport</h2>

        <div>
          <PageDetailsItem label={"ID"} value={flight.origin?.id} />
          <PageDetailsItem label={"Name"} value={flight.origin?.name} />
          <PageDetailsItem label={"Code"} value={flight.origin?.code} />
          <PageDetailsItem
            label={"City"}
            value={
              flight.origin?.city?.name + ", " + flight.origin?.city?.state
            }
          />
        </div>
      </div>

      <div className="details-inner">
        <h2>Destination Airport</h2>

        <div>
          <PageDetailsItem label={"ID"} value={flight.destination?.id} />
          <PageDetailsItem label={"Name"} value={flight.destination?.name} />
          <PageDetailsItem label={"Code"} value={flight.destination?.code} />
          <PageDetailsItem
            label={"City"}
            value={
              flight.destination?.city?.name +
              ", " +
              flight.destination?.city?.state
            }
          />
        </div>
      </div>

      <div className="details-inner">
        <h2>Passengers</h2>

        <div className="details-nested">
          {flight?.passengerList?.map((passenger) => {
            return (
              <div key={passenger.id} className="flex flex-col">
                <PageDetailsItem label={"ID"} value={passenger.id} />
                <PageDetailsItem
                  label={"Name"}
                  value={passenger.firstName + " " + passenger.lastName}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FlightDetails;
