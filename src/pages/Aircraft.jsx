import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllAircraft } from "../api/aircraft-api";
import Page from "../components/Page";

function Aircraft() {
  const [aircraft, setAircraft] = useState([]);

  const loadAircraft = useCallback(async () => {
    const response = await fetchAllAircraft();
    setAircraft(response);
  }, []);

  useEffect(() => {
    loadAircraft();
  }, [loadAircraft]);
  return (
    <Page>
      <List list={aircraft} />
    </Page>
  );
}

export default Aircraft;
