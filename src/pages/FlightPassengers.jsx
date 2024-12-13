import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import FlightPassengersForm from "../components/FlightPassengersForm";
import { fetchFlightById } from "../api/flights-api";
import { useParams } from "react-router-dom";

function FlightPassengers() {
  const { id } = useParams();
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
      ? (document.title = "Add Passengers | #" + flight.id)
      : (document.title = "Add Passengers");
  }, [flight]);

  return (
    <Page label={`Add Passengers | #` + flight.id}>
      <FlightPassengersForm flight={flight} />
    </Page>
  );
}

export default FlightPassengers;
