import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import AirportGatesForm from "../components/AirportGatesForm";
import { fetchAirportById } from "../api/airports-api";
import { useParams } from "react-router-dom";

function AirportGates() {
  const { id } = useParams();
  const [airport, setAirport] = useState({});

  const loadAirport = useCallback(async () => {
    const response = await fetchAirportById(id);
    setAirport(response);
  }, [id]);

  useEffect(() => {
    loadAirport();
  }, [loadAirport, id]);

  useEffect(() => {
    airport && airport.name
      ? (document.title = "Add Gates | " + airport.name)
      : (document.title = "Add Gates");
  }, [airport]);

  return (
    <Page label={`Add Gates | ${airport.name}`}>
      <AirportGatesForm airport={airport} />{" "}
    </Page>
  );
}

export default AirportGates;
