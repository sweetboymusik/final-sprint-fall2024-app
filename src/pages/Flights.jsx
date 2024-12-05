import React, { useCallback, useEffect, useState } from "react";
import CenteredLayout from "../layouts/CenteredLayout";
import NavBar from "../components/NavBar";
import List from "../components/List";
import { fetchAllFlights } from "../api/flights-api";

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
    <CenteredLayout>
      <NavBar />
      <List list={flights} />
    </CenteredLayout>
  );
}

export default Flights;
