import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFlightById } from "../api/flights-api";
import FlightDetails from "../components/FlightDetails";
import Button from "../components/Button";

function Flight() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [flight, setFlight] = useState({});

  const loadFlight = useCallback(async () => {
    const response = await fetchFlightById(id);
    setFlight(response);
  }, [id]);

  useEffect(() => {
    loadFlight();
  }, [loadFlight, id]);

  useEffect(() => {
    flight && flight.id
      ? (document.title = "Flight | #" + flight.id)
      : (document.title = "Flight");
  }, [flight]);

  const handleButtonClick = function () {
    navigate(`/flights/${id}/edit`);
  };

  const handleAddPassengersToFlight = function () {
    navigate(`/flights/${id}/add_passengers`);
  };

  return (
    <Page
      label={"Flight | #" + flight.id}
      Button={
        <Button icon={"edit"} label={"Edit"} onClick={handleButtonClick} />
      }
      SecondaryButton={
        <Button
          icon={"add"}
          label={"Add Passengers"}
          onClick={handleAddPassengersToFlight}
        />
      }
    >
      <FlightDetails flight={flight} />
    </Page>
  );
}

export default Flight;
