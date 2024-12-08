import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllPassengers } from "../api/passengers-api";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";

function Passengers() {
  const { pathname: url } = useLocation();
  const [passengers, setPassengers] = useState([]);

  const loadPassengers = useCallback(async () => {
    const response = await fetchAllPassengers();
    setPassengers(response);
  }, []);

  useEffect(() => {
    loadPassengers();
  }, [loadPassengers]);

  return (
    <Page label={"Passengers"}>
      <List list={passengers} url={url} />
    </Page>
  );
}

export default Passengers;
