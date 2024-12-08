import React, { useCallback, useEffect, useState } from "react";
import { fetchAllAirlines } from "../api/airlines-api";
import List from "../components/List";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";

function Airlines() {
  const { pathname: url } = useLocation();
  const [airlines, setAirlines] = useState([]);

  const loadAirlines = useCallback(async () => {
    const response = await fetchAllAirlines();
    setAirlines(response);
  }, []);

  useEffect(() => {
    loadAirlines();
  }, [loadAirlines]);
  return (
    <Page label={"Airlines"}>
      <List list={airlines} url={url} />
    </Page>
  );
}

export default Airlines;
