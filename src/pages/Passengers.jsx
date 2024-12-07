import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllPassengers } from "../api/passengers-api";
import Page from "../components/Page";

function Passengers() {
  const [passengers, setPassengers] = useState([]);

  const loadPassengers = useCallback(async () => {
    const response = await fetchAllPassengers();
    setPassengers(response);
  }, []);

  useEffect(() => {
    loadPassengers();
  }, [loadPassengers]);
  return (
    <Page>
      <List list={passengers} />
    </Page>
  );
}

export default Passengers;
