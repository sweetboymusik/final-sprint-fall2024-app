import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllFlights } from "../api/flights-api";
import Page from "../components/Page";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Flights() {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);

  const loadFlights = useCallback(async () => {
    const response = await fetchAllFlights();
    setFlights(response);
  }, []);

  useEffect(() => {
    loadFlights();
  }, [loadFlights]);

  const handleAddFlight = function () {
    navigate(`/flights/add`);
  };

  return (
    <Page
      label={"Flights"}
      Button={<Button icon="add" label={"Add"} onClick={handleAddFlight} />}
    >
      <List list={flights} url={url} />
    </Page>
  );
}

export default Flights;
