import React, { useCallback, useEffect, useState } from "react";
import CenteredLayout from "../layouts/CenteredLayout";
import NavBar from "../components/NavBar";
import { fetchAllAirports } from "../api/airports-api";
import List from "../components/List";

function Airports() {
  const [airports, setAirports] = useState([]);

  const loadAirports = useCallback(async () => {
    const response = await fetchAllAirports();
    setAirports(response);
  }, []);

  useEffect(() => {
    loadAirports();
  }, [loadAirports]);
  return (
    <CenteredLayout>
      <NavBar />
      <List list={airports} />
    </CenteredLayout>
  );
}

export default Airports;
