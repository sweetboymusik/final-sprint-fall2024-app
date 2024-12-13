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
  const [loading, setLoading] = useState(true);

  const loadFlights = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchAllFlights();
      setFlights(response);
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFlights();
  }, [loadFlights]);

  useEffect(() => {
    document.title = "Flights";
  }, []);

  const handleAddFlight = function () {
    navigate(`/flights/add`);
  };

  return (
    <Page
      label={"Flights"}
      Button={<Button icon="add" label={"Add"} onClick={handleAddFlight} />}
    >
      {loading ? <p>Loading flights...</p> : <List list={flights} url={url} />}
    </Page>
  );
}

export default Flights;
