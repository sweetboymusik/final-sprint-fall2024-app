import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import { useParams } from "react-router-dom";
import { fetchAirlineById } from "../api/airlines-api";
import AirlineDetails from "../components/AirlineDetails";

function Airline() {
  const { id } = useParams();
  const [airline, setAirline] = useState({});

  const loadAirline = useCallback(async () => {
    const response = await fetchAirlineById(id);
    setAirline(response);
  }, [id]);

  useEffect(() => {
    loadAirline();
  }, [loadAirline, id]);
  return (
    <Page label={"Airline"}>
      <AirlineDetails airline={airline} />
    </Page>
  );
}

export default Airline;
