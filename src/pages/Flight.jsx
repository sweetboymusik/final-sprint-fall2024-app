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

  const handleButtonClick = function () {
    navigate(`/flights/${id}/edit`);
  };

  return (
    <Page label={"Flight | #" + flight.id}>
      <Button icon={"edit"} label={"Edit"} onClick={handleButtonClick} />
      <FlightDetails flight={flight} />
    </Page>
  );
}

export default Flight;
