import React, { useCallback, useEffect, useState } from "react";
import CenteredLayout from "../layouts/CenteredLayout";
import NavBar from "../components/NavBar";
import List from "../components/List";
import { fetchAllAircraft } from "../api/aircraft-api";

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
    <CenteredLayout>
      <NavBar />
      <List list={aircraft} />
    </CenteredLayout>
  );
}

export default Aircraft;
