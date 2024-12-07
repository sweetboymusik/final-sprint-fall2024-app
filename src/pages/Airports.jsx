import React, { useCallback, useEffect, useState } from "react";
import { fetchAllAirports } from "../api/airports-api";
import List from "../components/List";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";

function Airports() {
  const { pathname: url } = useLocation();
  const [airports, setAirports] = useState([]);

  const loadAirports = useCallback(async () => {
    const response = await fetchAllAirports();
    setAirports(response);
  }, []);

  useEffect(() => {
    loadAirports();
  }, [loadAirports]);
  return (
    <Page label={"Airports"}>
      <List list={airports} url={url} />
    </Page>
  );
}

export default Airports;
