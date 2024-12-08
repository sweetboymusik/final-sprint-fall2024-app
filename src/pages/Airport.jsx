import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import { useParams } from "react-router-dom";
import { fetchAirportById } from "../api/airports-api";
import AirportDetails from "../components/AirportDetails";

function Airport() {
  const { id } = useParams();
  const [airport, setAirport] = useState({});

  const loadAirport = useCallback(async () => {
    const response = await fetchAirportById(id);
    setAirport(response);
  }, [id]);

  useEffect(() => {
    loadAirport();
  }, [loadAirport, id]);

  return (
    <Page label={"Airport | " + airport.name}>
      <AirportDetails airport={airport} />
    </Page>
  );
}

export default Airport;
