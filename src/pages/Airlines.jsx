import React, { useCallback, useEffect, useState } from "react";
import CenteredLayout from "../layouts/CenteredLayout";
import NavBar from "../components/NavBar";
import { fetchAllAirlines } from "../api/airlines-api";
import List from "../components/List";

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
    <CenteredLayout>
      <NavBar />
      <List list={airlines} />
    </CenteredLayout>
  );
}

export default Airlines;
