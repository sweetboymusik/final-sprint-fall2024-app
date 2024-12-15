import React from "react";
import PageDetailsItem from "./PageDetailsItem";
import List from "./List";

function FlightDetails({ flight }) {
  const url = "/passengers";

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
            value={flight.passengerList?.length}
          />
        </div>
      </div>

      <div className="details-inner">
        <h2>Origin Airport</h2>

        <div>
          <PageDetailsItem
            label={"ID"}
            value={flight.originGate?.airport?.id}
          />
          <PageDetailsItem
            label={"Name"}
            value={flight.originGate?.airport?.name}
          />
          <PageDetailsItem
            label={"Code"}
            value={flight.originGate?.airport?.code}
          />
          <PageDetailsItem
            label={"City"}
            value={
              flight.originGate?.airport?.city?.name +
              ", " +
              flight.originGate?.airport?.city?.state
            }
          />
          <PageDetailsItem
            label={"Gate"}
            value={flight.originGate?.gateNumber}
          />
        </div>
      </div>

      <div className="details-inner">
        <h2>Destination Airport</h2>

        <div>
          <PageDetailsItem
            label={"ID"}
            value={flight.destinationGate?.airport?.id}
          />
          <PageDetailsItem
            label={"Name"}
            value={flight.destinationGate?.airport?.name}
          />
          <PageDetailsItem
            label={"Code"}
            value={flight.destinationGate?.airport?.code}
          />
          <PageDetailsItem
            label={"City"}
            value={
              flight.destinationGate?.airport?.city?.name +
              ", " +
              flight.destinationGate?.airport?.city?.state
            }
          />
          <PageDetailsItem
            label={"Gate"}
            value={flight.destinationGate?.gateNumber}
          />
        </div>
      </div>

      <div className="details-inner">
        <h2>Aircraft Details</h2>

        <div>
          <PageDetailsItem label={"ID"} value={flight.aircraft?.id} />
          <PageDetailsItem label={"Type"} value={flight.aircraft?.type} />
          <PageDetailsItem
            label={"Airline"}
            value={flight.aircraft?.airline?.name}
          />
        </div>
      </div>

      <div className="details-table">
        <h2>Passengers ({flight?.passengerList?.length})</h2>

        {flight?.passengerList?.length > 0 && (
          <List list={flight?.passengerList} url={url} />
        )}
      </div>
    </div>
  );
}

export default FlightDetails;
