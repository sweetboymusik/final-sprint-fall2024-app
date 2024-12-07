import React, { useCallback, useEffect, useState } from "react";
import { fetchAllAirports } from "../api/airports-api";
import List from "../components/List";
import Page from "../components/Page";

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
    <Page>
      <List list={airports} />
    </Page>
  );
}

export default Airports;
