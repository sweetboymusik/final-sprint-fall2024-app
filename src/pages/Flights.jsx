import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllFlights } from "../api/flights-api";
import Page from "../components/Page";

function Flights() {
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
      <List list={flights} />
    </Page>
  );
}

export default Flights;
