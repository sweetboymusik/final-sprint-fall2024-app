import React, { useCallback, useEffect, useState } from "react";
import { fetchAllAirlines } from "../api/airlines-api";
import List from "../components/List";
import Page from "../components/Page";

function Airlines() {
  const [airlines, setAirlines] = useState([]);

  const loadAirlines = useCallback(async () => {
    const response = await fetchAllAirlines();
    setAirlines(response);
  }, []);

  useEffect(() => {
    loadAirlines();
  }, [loadAirlines]);
  return (
    <Page>
      <List list={airlines} />
    </Page>
  );
}

export default Airlines;
