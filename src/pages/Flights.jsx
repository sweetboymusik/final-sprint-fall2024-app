import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllFlights } from "../api/flights-api";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";

function Flights() {
  const { pathname: url } = useLocation();
  const [flights, setFlights] = useState([]);

  const loadFlights = useCallback(async () => {
    const response = await fetchAllFlights();
    setFlights(response);
  }, []);

  useEffect(() => {
    loadFlights();
  }, [loadFlights]);
  return (
    <Page label={"Flights"}>
      <List list={flights} url={url} />
    </Page>
  );
}

export default Flights;
