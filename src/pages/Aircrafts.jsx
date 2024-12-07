import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllAircraft } from "../api/aircraft-api";
import Page from "../components/Page";

function Aircrafts() {
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
      <List list={aircraft} />
    </Page>
  );
}

export default Aircrafts;
