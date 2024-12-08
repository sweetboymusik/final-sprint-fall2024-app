import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllAircraft } from "../api/aircraft-api";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";

function Aircrafts() {
  const { pathname: url } = useLocation();
  const [aircraft, setAircraft] = useState([]);

  const loadAircraft = useCallback(async () => {
    const response = await fetchAllAircraft();
    setAircraft(response);
  }, []);

  useEffect(() => {
    loadAircraft();
  }, [loadAircraft]);

  return (
    <Page label={"Aircraft"}>
      <List list={aircraft} url={url} />
    </Page>
  );
}

export default Aircrafts;
