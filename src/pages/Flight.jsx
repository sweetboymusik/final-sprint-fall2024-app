import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import { useParams } from "react-router-dom";
import { fetchFlightById } from "../api/flights-api";
import FlightDetails from "../components/FlightDetails";

function Flight() {
  const { id } = useParams();
  const [flight, setFlight] = useState({});

  const loadFlight = useCallback(async () => {
    const response = await fetchFlightById(id);
    setFlight(response);
  }, [id]);

  useEffect(() => {
    loadFlight();
  }, [loadFlight, id]);

  return (
    <Page label={"Flight | #" + flight.id}>
      <FlightDetails flight={flight} />
    </Page>
  );
}

export default Flight;
